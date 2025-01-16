import React from 'react';
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
import { get } from 'http';

// interface Quote {
// 	name: string;
// 	price: number;
// 	changesPercentage: number;
// 	change: number;
// 	dayLow: number;
// 	dayHigh: number;
// 	yearHigh: number;
// 	yearLow: number;
// 	open: number;
// 	previousClose: number;
// }
// [];

const NewWatchList = () => {
	const stockArray = ['HRZN', 'AGNC', 'VZ', 'GPN', 'CL=F'];
	
	const quoteArray: any = [];

	//console.log(stockArray);

	const getStockQuote = async (stockSymbol: string) => {
		try {
			const fetchQuote = await fetch(`/api/stock/quote/?symbol=${stockSymbol}`);
			const quote = await fetchQuote.json();
			quoteArray.push(quote);
			
			return quoteArray
		} catch (error) {
			console.log(error);
		}
	};

		for (let i = 0; i < stockArray.length; i++) {
			getStockQuote(stockArray[i]);

			
		}

	

		// const getStockQuote = async (stockSymbol: string) => {
		// 	try {
		// 		const fetchQuote = await fetch(`/api/stock/quote/?symbol=${stockSymbol}`);
		// 		const quote = await fetchQuote.json();

		// 		//console.log(quote)
		// 		quoteArray.push(quote);
		// 		console.log(quoteArray)
		// 	} catch (error) {
		// 		console.log(error);
		// 	}
		// };

		// for (let i = 0; i > stockArray.length; i++){
		// 	getStockQuote(stockArray[i])
		// }

		// stockArray.map((items) => getStockQuote(items));

		if (!quoteArray || quoteArray.length === 0) {
			return <div>No data available </div>;
		}

		// console.log(stockArray);
		// //console.log(quoteArray)
		// console.log(quoteArray);

		return (
			<main className="w-5/6 m-1">
				<Card className="p-0">
					<CardHeader>
						<CardTitle>New Watch List</CardTitle>
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
								<TableRow></TableRow>

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
					<CardFooter>
						<Link href="/stock_research" className={buttonVariants()}>
							Research Stocks
						</Link>
					</CardFooter>
				</Card>
			</main>
		);
	};

export default NewWatchList;
