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

interface Quote {
	c: number;
	h: number;
	l: number;
	o: number;
	pc: number;
	t: number;
	d: number;
}

const StockQuote2 = () => {
	const { stockSymbol, setStockSymbol } = useStockSymbol();
	const [quote, setQuote] = useState<Quote>();

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
					<div className="flex flex-col md:flex-row items-center gap-2">
						<div className="text-xl md:text-5xl font-semibold">
							$ {quote?.c?.toFixed(2)}
						</div>
						<div
							className={
								quote?.d > 0
									? 'text-green-500 text-md md:text-xl font-semibold'
									: 'text-red-500 text-md md:text-xl font-semibold'
							}
						>
							{' '}
							{quote?.d?.toFixed(2)}
						</div>
						<div>
							<div
								className={
									quote?.d > 0
										? 'text-green-500 text-md md:text-xl font-semibold'
										: 'text-red-500 text-md md:text-xl font-semibold'
								}
							>
								({quote?.dp?.toFixed(2)} %)
							</div>
						</div>
					</div>
				</CardContent>
				<CardFooter></CardFooter>
			</Card>
		</main>
	);
};

export default StockQuote2;
