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

const StockWatchList = () => {
	const horizon = 'HRZN';
	const [horizonQuote, setHorizonQuote] = useState<any>();
	const agnc = 'AGNC';
	const [AGNCQuote, setAGNCQuote] = useState<any>();
	const verizon = 'VZ';
	const [verizonQuote, setVerizonQuote] = useState<any>();
	const global = 'GPN';
	const [globalQuote, setGlobalQuote] = useState<any>();
	const crudeOil = 'CL=F';
	const [oilQuote, setOilQuote] = useState<any>();

	useEffect(() => {
		const getCrudeOilStockQuote = async () => {
			try {
				const fetchQuote = await fetch(`/api/stock/quote/?symbol=${crudeOil}`);
				const quote = await fetchQuote.json();
				setOilQuote(quote);
			} catch (error) {
				//setStockDetails()
				console.log(error);
			}
		};

		getCrudeOilStockQuote();
	}, []);

	useEffect(() => {
		const getVerizonStockQuote = async () => {
			try {
				const fetchQuote = await fetch(`/api/stock/quote/?symbol=${verizon}`);
				const quote = await fetchQuote.json();
				setVerizonQuote(quote);
			} catch (error) {
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

	if (!verizonQuote || verizonQuote.length === 0) {
		return <div>No data available for symbol: {verizon}</div>;
	}
	if (!globalQuote || globalQuote.length === 0) {
		return <div>No data available for symbol: {global}</div>;
	}
	if (!horizonQuote || horizonQuote.length === 0) {
		return <div>No data available for symbol: {horizon}</div>;
	}
	if (!AGNCQuote || AGNCQuote.length === 0) {
		return <div>No data available for symbol: {agnc}</div>;
	}
	if (!oilQuote || oilQuote.length === 0) {
		return <div>No data available for symbol: {crudeOil}</div>;
	}

	return (
		<main className="w-11/12 m-1">
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
							<TableRow className="">
								<TableCell className="font-medium">
									{verizonQuote[0]?.name}
								</TableCell>
								<TableCell className="p-0 text-center">
									${Number(verizonQuote[0]?.price).toFixed(2)}
								</TableCell>
								<TableCell
									className={
										Number(verizonQuote[0]?.change) > 0
											? 'text-green-500 text-center'
											: 'text-red-500 text-center'
									}
								>
									${Number(verizonQuote[0]?.change).toFixed(2)}
								</TableCell>
								<TableCell
									className={
										Number(verizonQuote[0]?.change) > 0
											? 'text-green-500 text-center'
											: 'text-red-500 text-center'
									}
								>
									{Number(verizonQuote[0]?.changesPercentage).toFixed(2)}%
								</TableCell>
								<TableCell className="p-0 text-center">
									${Number(verizonQuote[0]?.dayHigh).toFixed(2)}
								</TableCell>
								<TableCell className="p-0 text-center">
									${Number(verizonQuote[0]?.dayLow).toFixed(2)}
								</TableCell>
								<TableCell className="p-0 text-center">
									${Number(verizonQuote[0]?.yearHigh).toFixed(2)}
								</TableCell>
								<TableCell className="p-0 text-center">
									${Number(verizonQuote[0]?.yearLow).toFixed(2)}
								</TableCell>
								<TableCell className="p-0 text-center">
									${Number(verizonQuote[0]?.open).toFixed(2)}
								</TableCell>
								<TableCell className="text-right p-0">
									${Number(verizonQuote[0]?.previousClose).toFixed(2)}
								</TableCell>
							</TableRow>
							<TableRow>
								<TableCell className="font-medium">
									{globalQuote[0]?.name}
								</TableCell>
								<TableCell className="p-0 text-center">
									${Number(globalQuote[0]?.price).toFixed(2)}
								</TableCell>
								<TableCell
									className={
										Number(globalQuote[0]?.change) > 0
											? 'text-green-500 text-center'
											: 'text-red-500 text-center'
									}
								>
									${Number(globalQuote[0]?.change).toFixed(2)}
								</TableCell>
								<TableCell
									className={
										Number(globalQuote[0]?.change) > 0
											? 'text-green-500 text-center'
											: 'text-red-500 text-center'
									}
								>
									{Number(globalQuote[0]?.changesPercentage).toFixed(2)}%
								</TableCell>
								<TableCell className="p-0 text-center">
									${Number(globalQuote[0]?.dayHigh).toFixed(2)}
								</TableCell>
								<TableCell className="p-0 text-center">
									${Number(globalQuote[0]?.dayLow).toFixed(2)}
								</TableCell>
								<TableCell className="p-0 text-center">
									${Number(globalQuote[0]?.yearHigh).toFixed(2)}
								</TableCell>
								<TableCell className="p-0 text-center">
									${Number(globalQuote[0]?.yearLow).toFixed(2)}
								</TableCell>
								<TableCell className="p-0 text-center">
									${Number(globalQuote[0]?.open).toFixed(2)}
								</TableCell>
								<TableCell className="text-right p-0">
									${Number(globalQuote[0]?.previousClose).toFixed(2)}
								</TableCell>
							</TableRow>
							<TableRow>
								<TableCell className="font-medium">
									{horizonQuote[0]?.name}
								</TableCell>
								<TableCell className="p-0 text-center">
									${Number(horizonQuote[0]?.price).toFixed(2)}
								</TableCell>
								<TableCell
									className={
										Number(horizonQuote[0]?.change) > 0
											? 'text-green-500 text-center'
											: 'text-red-500 text-center'
									}
								>
									${Number(horizonQuote[0]?.change).toFixed(2)}
								</TableCell>
								<TableCell
									className={
										Number(horizonQuote[0]?.change) > 0
											? 'text-green-500 text-center'
											: 'text-red-500 text-center'
									}
								>
									{Number(horizonQuote[0]?.changesPercentage).toFixed(2)}%
								</TableCell>
								<TableCell className="p-0 text-center">
									${Number(horizonQuote[0]?.dayHigh).toFixed(2)}
								</TableCell>
								<TableCell className="p-0 text-center">
									${Number(horizonQuote[0]?.dayLow).toFixed(2)}
								</TableCell>
								<TableCell className="p-0 text-center">
									${Number(horizonQuote[0]?.yearHigh).toFixed(2)}
								</TableCell>
								<TableCell className="p-0 text-center">
									${Number(horizonQuote[0]?.yearLow).toFixed(2)}
								</TableCell>
								<TableCell className="p-0 text-center">
									${Number(horizonQuote[0]?.open).toFixed(2)}
								</TableCell>
								<TableCell className="text-right p-0">
									${Number(horizonQuote[0]?.previousClose).toFixed(2)}
								</TableCell>
							</TableRow>
							<TableRow>
								<TableCell className="font-medium">
									{AGNCQuote[0]?.name}
								</TableCell>
								<TableCell className="p-0 text-center">
									${Number(AGNCQuote[0]?.price).toFixed(2)}
								</TableCell>
								<TableCell
									className={
										Number(AGNCQuote[0]?.change) > 0
											? 'text-green-500 text-center'
											: 'text-red-500 text-center'
									}
								>
									${Number(AGNCQuote[0]?.change).toFixed(2)}
								</TableCell>
								<TableCell
									className={
										Number(AGNCQuote[0]?.change) > 0
											? 'text-green-500 text-center'
											: 'text-red-500 text-center'
									}
								>
									{Number(AGNCQuote[0]?.changesPercentage).toFixed(2)}%
								</TableCell>
								<TableCell className="p-0 text-center">
									${Number(AGNCQuote[0]?.dayHigh).toFixed(2)}
								</TableCell>
								<TableCell className="p-0 text-center">
									${Number(AGNCQuote[0]?.dayLow).toFixed(2)}
								</TableCell>
								<TableCell className="p-0 text-center">
									${Number(AGNCQuote[0]?.yearHigh).toFixed(2)}
								</TableCell>
								<TableCell className="p-0 text-center">
									${Number(AGNCQuote[0]?.yearLow).toFixed(2)}
								</TableCell>
								<TableCell className="p-0 text-center">
									${Number(AGNCQuote[0]?.open).toFixed(2)}
								</TableCell>
								<TableCell className="text-right p-0">
									${Number(AGNCQuote[0]?.previousClose).toFixed(2)}
								</TableCell>
							</TableRow>
							<TableRow>
								<TableCell className="font-medium">
									{oilQuote[0]?.name}
								</TableCell>
								<TableCell className="p-0 text-center">
									${Number(oilQuote[0]?.price).toFixed(2)}
								</TableCell>
								<TableCell
									className={
										Number(oilQuote[0]?.change) > 0
											? 'text-green-500 text-center'
											: 'text-red-500 text-center'
									}
								>
									${Number(oilQuote[0]?.change).toFixed(2)}
								</TableCell>
								<TableCell
									className={
										Number(oilQuote[0]?.change) > 0
											? 'text-green-500 text-center'
											: 'text-red-500 text-center'
									}
								>
									{Number(oilQuote[0]?.changesPercentage).toFixed(2)}%
								</TableCell>
								<TableCell className="p-0 text-center">
									${Number(oilQuote[0]?.dayHigh).toFixed(2)}
								</TableCell>
								<TableCell className="p-0 text-center">
									${Number(oilQuote[0]?.dayLow).toFixed(2)}
								</TableCell>
								<TableCell className="p-0 text-center">
									${Number(oilQuote[0]?.yearHigh).toFixed(2)}
								</TableCell>
								<TableCell className="p-0 text-center">
									${Number(oilQuote[0]?.yearLow).toFixed(2)}
								</TableCell>
								<TableCell className="p-0 text-center">
									${Number(oilQuote[0]?.open).toFixed(2)}
								</TableCell>
								<TableCell className="text-right p-0">
									${Number(oilQuote[0]?.previousClose).toFixed(2)}
								</TableCell>
							</TableRow>
						</TableBody>
					</Table>
				</CardContent>
				<CardFooter>
					<Link href="/stock_research" className={buttonVariants()}>
						Research Stocks
					</Link>
				</CardFooter>
			</Card>
		</main>
	);
};

export default StockWatchList;
