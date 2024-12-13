'use client';

import React, { useEffect, useState } from 'react';
import {
	Table,
	TableBody,
	TableCaption,
	TableCell,
	TableFooter,
	TableHead,
	TableHeader,
	TableRow,
} from '../ui/table';
import Link from 'next/link';
import { buttonVariants } from '../ui/button';
import {
	Card,
	CardContent,
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
	dp: number;
}

const StockWatchList = () => {
	const horizon = 'HRZN';
	const [horizonQuote, setHorizonQuote] = useState<Quote>();
	const agnc = 'AGNC';
	const [AGNCQuote, setAGNCQuote] = useState<Quote>();

	const verizon = 'VZ';
	const [verizonQuote, setVerizonQuote] = useState<Quote>();
	const global = 'GPN';
	const [globalQuote, setGlobalQuote] = useState<Quote>();

	useEffect(() => {
		const getVerizonStockQuote = async () => {
			try {
				const fetchQuote = await fetch(`/api/stock/quote/?symbol=${verizon}`);
				const quote = await fetchQuote.json();
				setVerizonQuote(quote);
			} catch (error) {
				//setStockDetails()
				console.log(error);
			}
		};

		getVerizonStockQuote();
	}, [verizon]);
	useEffect(() => {
		const getGlobalStockQuote = async () => {
			try {
				const fetchQuote = await fetch(`/api/stock/quote/?symbol=${global}`);
				const quote = await fetchQuote.json();
				setGlobalQuote(quote);
			} catch (error) {
				//setStockDetails()
				console.log(error);
			}
		};

		getGlobalStockQuote();
	}, [global]);
	useEffect(() => {
		const getHorizonStockQuote = async () => {
			try {
				const fetchQuote = await fetch(`/api/stock/quote/?symbol=${horizon}`);
				const quote = await fetchQuote.json();
				setHorizonQuote(quote);
			} catch (error) {
				//setStockDetails()
				console.log(error);
			}
		};

		getHorizonStockQuote();
	}, [horizon]);
	useEffect(() => {
		const getAGNCStockQuote = async () => {
			try {
				const fetchQuote = await fetch(`/api/stock/quote/?symbol=${agnc}`);
				const quote = await fetchQuote.json();
				setAGNCQuote(quote);
			} catch (error) {
				//setStockDetails()
				console.log(error);
			}
		};

		getAGNCStockQuote();
	}, [agnc]);

	return (
		<main className="w-1/2">
			<Card>
				<CardHeader>
					<CardTitle>Watch List</CardTitle>
				</CardHeader>
				<CardContent>
					<Table>
						<TableCaption></TableCaption>
						<TableHeader>
							<TableRow>
								<TableHead className="w-[100px]">Stock</TableHead>
								<TableHead>Current Price</TableHead>
								<TableHead>Change</TableHead>
								<TableHead>Percent Change</TableHead>
								<TableHead>High</TableHead>
								<TableHead>Low</TableHead>
								<TableHead>Open</TableHead>
								<TableHead className="text-right">Previous Close</TableHead>
							</TableRow>
						</TableHeader>
						<TableBody>
							<TableRow>
								<TableCell className="font-medium">Verizon</TableCell>
								<TableCell>{Number(verizonQuote?.d).toFixed(2)}</TableCell>
								<TableCell
									className={
										Number(verizonQuote?.d) > 0
											? 'text-green-500 '
											: 'text-red-500 '
									}
								>
									{Number(verizonQuote?.d).toFixed(2)}
								</TableCell>
								<TableCell
									className={
										Number(verizonQuote?.d) > 0
											? 'text-green-500 '
											: 'text-red-500 '
									}
								>
									{Number(verizonQuote?.dp).toFixed(2)} %
								</TableCell>
								<TableCell>{Number(verizonQuote?.h).toFixed(2)}</TableCell>
								<TableCell>{Number(verizonQuote?.l).toFixed(2)}</TableCell>
								<TableCell>{Number(verizonQuote?.o).toFixed(2)}</TableCell>
								<TableCell className="text-right">
									{Number(verizonQuote?.pc).toFixed(2)}
								</TableCell>
							</TableRow>
							<TableRow>
								<TableCell className="font-medium">Global</TableCell>
								<TableCell>{Number(globalQuote?.c).toFixed(2)}</TableCell>
								<TableCell
									className={
										Number(globalQuote?.d) > 0
											? 'text-green-500 '
											: 'text-red-500 '
									}
								>
									{Number(globalQuote?.d).toFixed(2)}
								</TableCell>
								<TableCell
									className={
										Number(globalQuote?.d) > 0
											? 'text-green-500 '
											: 'text-red-500 '
									}
								>
									{Number(globalQuote?.dp).toFixed(2)} %
								</TableCell>
								<TableCell>{Number(globalQuote?.h).toFixed(2)}</TableCell>
								<TableCell>{Number(globalQuote?.l).toFixed(2)}</TableCell>
								<TableCell>{Number(globalQuote?.o).toFixed(2)}</TableCell>
								<TableCell className="text-right">
									{Number(globalQuote?.pc).toFixed(2)}
								</TableCell>
							</TableRow>
							<TableRow>
								<TableCell className="font-medium">Horizon</TableCell>
								<TableCell>{Number(horizonQuote?.c).toFixed(2)}</TableCell>
								<TableCell
									className={
										Number(horizonQuote?.d) > 0
											? 'text-green-500 '
											: 'text-red-500 '
									}
								>
									{Number(horizonQuote?.d).toFixed(2)}
								</TableCell>
								<TableCell
									className={
										Number(horizonQuote?.d) > 0
											? 'text-green-500 '
											: 'text-red-500 '
									}
								>
									{Number(horizonQuote?.dp).toFixed(2)} %
								</TableCell>
								<TableCell>{Number(horizonQuote?.h).toFixed(2)}</TableCell>
								<TableCell>{Number(horizonQuote?.l).toFixed(2)}</TableCell>
								<TableCell>{Number(horizonQuote?.o).toFixed(2)}</TableCell>
								<TableCell className="text-right">
									{Number(horizonQuote?.pc).toFixed(2)}
								</TableCell>
							</TableRow>
							<TableRow>
								<TableCell className="font-medium">AGNC</TableCell>
								<TableCell>{Number(AGNCQuote?.c).toFixed(2)}</TableCell>
								<TableCell
									className={
										Number(AGNCQuote?.d) > 0
											? 'text-green-500 '
											: 'text-red-500 '
									}
								>
									{Number(AGNCQuote?.d).toFixed(2)}
								</TableCell>
								<TableCell
									className={
										Number(AGNCQuote?.d) > 0
											? 'text-green-500 '
											: 'text-red-500 '
									}
								>
									{Number(AGNCQuote?.dp).toFixed(2)} %
								</TableCell>
								<TableCell>{Number(AGNCQuote?.h).toFixed(2)}</TableCell>
								<TableCell>{Number(AGNCQuote?.l).toFixed(2)}</TableCell>
								<TableCell>{Number(AGNCQuote?.o).toFixed(2)}</TableCell>
								<TableCell className="text-right">
									{Number(AGNCQuote?.pc).toFixed(2)}
								</TableCell>
							</TableRow>
						</TableBody>
					</Table>
				</CardContent>
				<CardFooter>
					<Link href="/stock_research" className={buttonVariants()}>
						Resarch Stocks
					</Link>
				</CardFooter>
			</Card>
		</main>
	);
};

export default StockWatchList;
