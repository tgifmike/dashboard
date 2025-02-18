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
	name: string;
	price: number;
	changesPercentage: number;
	change: number;
	dayLow: number;
	dayHigh: number;
	yearHigh: number;
	yearLow: number;
	open: number;
	previousClose: number;
}
[];

const WatchList = () => {
	// const horizon = 'HRZN';
	// const [horizonQuote, setHorizonQuote] = useState<any>();
	// const agnc = 'AGNC';
	// const [AGNCQuote, setAGNCQuote] = useState<any>();
	// const verizon = 'VZ';
	// const [verizonQuote, setVerizonQuote] = useState<any>();
	// const global = 'GPN';
	// const [globalQuote, setGlobalQuote] = useState<any>();
	// const crudeOil = 'CL=F';
	// const [oilQuote, setOilQuote] = useState<any>();

	const stockArray = ['HRZN', 'AGNC', 'VZ', 'GPN', 'CL=F', 'PMT']
	const [stockQuote, setStockQuote] = useState<any[]>([]);
	// const quoteArray:any = []

	useEffect(() => {
		const getStockQuote = async (stockSymbol: any) => {
			try {
				const fetchQuote = await fetch(`/api/stock/quote/?symbol=${stockSymbol}`)
				const quote = await fetchQuote.json();
				//setStockQuote(quote);
				//console.log(quote)
				//quoteArray.push(quote)
				setStockQuote(stockQuote => [...stockQuote, quote])
				// console.log(quoteArray)
			} catch (error) {
				console.log(error)
			}
		}

		for (let i = 0; i < stockArray.length; i++) {
			getStockQuote(stockArray[i]);
		}
		//getStockQuote(stockSymbol);
	}, [])

	


	if (!stockQuote || stockQuote.length < 1) {
		return <div>No data available </div>;
	}


	//console.log(quoteArray);
	//console.log(stockQuote)

	return (
		<main className="w-5/6 m-1">
			<Card className="p-0">
				<CardHeader>
					<CardTitle>Watch List</CardTitle>
				</CardHeader>
				<CardContent>
					<Table className="p-0 m-0">
						<TableCaption></TableCaption>
						<TableHeader>
							<TableRow>
								<TableHead className="w-[200px]">Stock</TableHead>
								<TableHead className="text-center">Price</TableHead>
								<TableHead className="text-center">+/-</TableHead>
								<TableHead className="text-center">+/-</TableHead>
								<TableHead className="text-center">H</TableHead>
								<TableHead className="text-center">L</TableHead>
								<TableHead className="text-center">52 H</TableHead>
								<TableHead className="text-center">52 L</TableHead>
								<TableHead>Open</TableHead>

								<TableHead className="text-right">PC</TableHead>
							</TableRow>
						</TableHeader>
						<TableBody className="">
							{stockQuote.map((item: any, idx: number) => (
								<TableRow key={idx}>
									<TableCell>{item[0].name}</TableCell>
									<TableCell className="p-0 text-center">
										${Number(item[0].price).toFixed(2)}
									</TableCell>
									<TableCell
										className={
											Number(item[0].change) > 0
												? 'text-green-500 text-center'
												: 'text-red-500 text-center'
										}
									>
										${Number(item[0].change).toFixed(2)}
									</TableCell>
									<TableCell
										className={
											Number(item[0].change) > 0
												? 'text-green-500 text-center'
												: 'text-red-500 text-center'
										}
									>
										{Number(item[0].changesPercentage).toFixed(2)}%
									</TableCell>
									<TableCell className="p-0 text-center">
										${Number(item[0].dayHigh).toFixed(2)}
									</TableCell>
									<TableCell className="p-0 text-center">
										${Number(item[0].dayLow).toFixed(2)}
									</TableCell>
									<TableCell className="p-0 text-center">
										${Number(item[0].yearHigh).toFixed(2)}
									</TableCell>
									<TableCell className="p-0 text-center">
										${Number(item[0].yearLow).toFixed(2)}
									</TableCell>
									<TableCell className="p-0 text-center">
										${Number(item[0].open).toFixed(2)}
									</TableCell>
									<TableCell className="text-right p-0">
										${Number(item[0].previousClose).toFixed(2)}
									</TableCell>
								</TableRow>
							))}

							{/* {quoteArray.map((item: any, idx: number) =>
								item[idx].map((items:any, i:number) => (
									<TableRow key={i} className="">
										<TableCell className="font-medium">
											{items[0].name}
										</TableCell>
									</TableRow>
								))
							)} */}
							{/* <TableCell className="p-0 text-center">
										${Number(item[idx].price).toFixed(2)}
									</TableCell>
									<TableCell
										className={
											Number(item[idx].change) > 0
												? 'text-green-500 text-center'
												: 'text-red-500 text-center'
										}
									>
										${Number(item[idx].change).toFixed(2)}
									</TableCell>
									<TableCell
										className={
											Number(item[idx].change) > 0
												? 'text-green-500 text-center'
												: 'text-red-500 text-center'
										}
									>
										{Number(item[idx].changesPercentage).toFixed(2)}%
									</TableCell>
									<TableCell className="p-0 text-center">
										${Number(item[idx].dayHigh).toFixed(2)}
									</TableCell>
									<TableCell className="p-0 text-center">
										${Number(item[idx].dayLow).toFixed(2)}
									</TableCell>
									<TableCell className="p-0 text-center">
										${Number(item[idx].yearHigh).toFixed(2)}
									</TableCell>
									<TableCell className="p-0 text-center">
										${Number(item[idx].yearLow).toFixed(2)}
									</TableCell>
									<TableCell className="p-0 text-center">
										${Number(item[idx].open).toFixed(2)}
									</TableCell>
									<TableCell className="text-right p-0">
										${Number(item[idx].previousClose).toFixed(2)}
									</TableCell> */}
							{/* </TableRow> */}
						</TableBody>
					</Table>
				</CardContent>
				<CardFooter className="">
					<div className="p-2">
						<Link href="/stock_research" className={buttonVariants()}>
							Research Stocks
						</Link>
					</div>
					<div className="p-2">
						<Link href="/dividendNew" className={buttonVariants()}>
							Stock Dividends
						</Link>
					</div>
				</CardFooter>
			</Card>
		</main>
	);
};

export default WatchList;
