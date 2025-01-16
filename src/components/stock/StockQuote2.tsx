'use client';

import React, { useEffect, useState } from 'react';
import { useStockSymbol } from '@/app/context/StockSymbolContext';
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '../ui/card';



const StockQuote2 = () => {
	const { stockSymbol, setStockSymbol } = useStockSymbol();
	const [quote, setQuote] = useState<any>();

	useEffect(() => {
		const updateStockProfile = async () => {
			try {
				const fetchQuote = await fetch(
					`/api/stock/quote/?symbol=${stockSymbol}`
				);
				const quote = await fetchQuote.json();
				setQuote(quote);
			} catch (error) {
				//setStockDetails()
				console.log(error);
			}
		};

		updateStockProfile();
	}, [stockSymbol]);


	if (!quote || quote.length < 1) {
		return <div>No data available </div>;
	}

	return (
		<main className="m-2">
			<Card>
				<CardHeader>
					<CardTitle>
						<p className="text-lg md:text-xl">{stockSymbol}</p>
					</CardTitle>
					<CardDescription></CardDescription>
				</CardHeader>
				<CardContent>
					{/* {quote.map((item: any) => ( */}
					<div className="flex flex-col md:flex-row items-center gap-2">
						<div className="text-xl md:text-5xl font-semibold">
							$ {quote[0]?.price.toFixed(2)}
						</div>
						<div
							className={
								quote.change > 0
									? 'text-green-500 text-md md:text-xl font-semibold'
									: 'text-red-500 text-md md:text-xl font-semibold'
							}
						>
							{' '}
							{quote[0]?.change.toFixed(2)}
						</div>
						<div>
							<div
								className={
									quote.change > 0
										? 'text-green-500 text-md md:text-xl font-semibold'
										: 'text-red-500 text-md md:text-xl font-semibold'
								}
							>
								({quote[0]?.changesPercentage.toFixed(2)} %)
							</div>
						</div>
					</div>
					{/* ))} */}
				</CardContent>

				<CardFooter></CardFooter>
			</Card>
		</main>
	);
};

export default StockQuote2;
