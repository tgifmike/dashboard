import { Button, buttonVariants } from '@/components/ui/button';
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from '@/components/ui/table';
import Link from 'next/link';
import React from 'react';

const page = () => {
	const stockList = [
		{
			stockName: 'AGNC',
			stockPrice: 9.72,
			stockQuanity: 126.45,
			dividend: 0.12,
			dividendTiming: 'Monthly',
			months: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
			// get currentValue() {
			// 	return this.stockPrice * this.stockQuanity;
			// },
			// get ROI() {
			// 	return ((12 * this.dividend) / this.stockPrice) * 100;
			// },
			// get dividendPayment() {
			// 	return this.dividend * this.stockQuanity;
			// },
			// get yearDividendPayment() {
			// 	return this.dividendPayment * 12;
			// },
		},
		{
			stockName: 'VZ',
			stockPrice: 38.16,
			stockQuanity: 30.96,
			dividend: 0.68,
			dividendTiming: 'Quarterly',
			months: [0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0],
			// get currentValue() {
			// 	return this.stockPrice * this.stockQuanity;
			// },
			// get ROI() {
			// 	return ((4 * this.dividend) / this.stockPrice) * 100;
			// },
			// get dividendPayment() {
			// 	return this.dividend * this.stockQuanity;
			// },
			// get yearDividendPayment() {
			// 	return this.dividendPayment * 4;
			// },
		},
		{
			stockName: 'HRZN',
			stockPrice: 9.21,
			stockQuanity: 135.82,
			dividend: 0.11,
			dividendTiming: 'Monthly',
			months: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
			// get currentValue() {
			// 	return this.stockPrice * this.stockQuanity;
			// },
			// get ROI() {
			// 	return ((12 * this.dividend) / this.stockPrice) * 100;
			// },
			// get dividendPayment() {
			// 	return this.dividend * this.stockQuanity;
			// },
			// get yearDividendPayment() {
			// 	return this.dividendPayment * 12;
			// },
		},
	];

	//let year = 1;
	let newStockList: any = [];

	const yearXArray: any = [];
	const yearArray: any = [];
	const yearsTotalArray: any = [];
	let dividend = 0;
	let grandTotal = 0;

	function dividendPayout() {
		for (let i = 0; i < stockList.length; i++) {
			for (let j = 0; j < 12; j++) {
				if (stockList[i].months[j] === 1) {
					//find dividend for jan [0]
					dividend = Number(
						stockList[i].stockQuanity * Number(stockList[i].dividend)
					);

					//find how many share you can drip to qty
					let updatedQty =
						Number(dividend.toFixed(2)) / stockList[i].stockPrice;

					//update qty
					stockList[i].stockQuanity = stockList[i].stockQuanity + updatedQty;

					//push to array
					yearArray.push(dividend);
				} else yearArray.push(0);
			}

			let a = yearArray.splice(0, 12);
			let sum = a.reduce(
				(accumulator: number, currentValue: number) =>
					accumulator + currentValue,
				0
			);
			grandTotal = grandTotal + sum;

			yearXArray.push({
				stockName: stockList[i].stockName,
				monthlyPayment: a,
				total: sum,
				//VZarray: b,
				//      HRZNArray: c
			});
		}
		return yearXArray;
	}

	let year = dividendPayout();
	// let year2 = dividendPayout();
	// let year3 = dividendPayout();
	// let year4 = dividendPayout();
	// let year5 = dividendPayout();
	// let year6 = dividendPayout();
	// let year7 = dividendPayout();
	// let year8 = dividendPayout();
	// let year9 = dividendPayout();
	// let year10 = dividendPayout();
	// let year11 = dividendPayout();
	// let year12 = dividendPayout();
	// let year13 = dividendPayout();
	// let year14 = dividendPayout();
	// let year15 = dividendPayout();
	// let year16 = dividendPayout();
	// let year17 = dividendPayout();
	// let year18 = dividendPayout();
	// let year19 = dividendPayout();
	// let year20 = dividendPayout();

	

	return (
		<main>
			<div className="p-2">
				<Link href="/" className={buttonVariants({ variant: 'outline' })}>
					Back
				</Link>
			</div>

			<Card>
				<CardHeader>
					<CardTitle>Year 1</CardTitle>
				</CardHeader>
				<CardContent>
					<Table className="p-0 m-0">
						<TableHeader>
							<TableRow>
								<TableHead className="w-[200px]">Stock</TableHead>
								<TableHead className="text-center">Jan</TableHead>
								<TableHead className="text-center">Feb</TableHead>
								<TableHead className="text-center">Mar</TableHead>
								<TableHead className="text-center">Apr</TableHead>
								<TableHead className="text-center">May</TableHead>
								<TableHead className="text-center">June</TableHead>
								<TableHead className="text-center">July</TableHead>
								<TableHead className="text-center">Aug</TableHead>
								<TableHead className="text-center">Sept</TableHead>
								<TableHead className="text-center">Oct</TableHead>
								<TableHead className="text-center">Nov</TableHead>
								<TableHead className="text-center">Dec</TableHead>
								<TableHead className="text-right">Total</TableHead>
							</TableRow>
						</TableHeader>
						<TableBody className="">
							{year.map((item: any, idx: number) => (
								<TableRow key={idx}>
									<TableCell>{item.stockName}</TableCell>

									{item.monthlyPayment.map((items: any) => (
										<TableCell>{items.toFixed(2)}</TableCell>
									))}

									<TableCell>{item.total.toFixed(2)}</TableCell>
								</TableRow>
							))}
						</TableBody>
					</Table>
				</CardContent>
				<CardFooter className="flex justify-end">
					<div className="flex gap-4">
						<div>Year 1 total dividends</div>
						<div>{grandTotal.toFixed(2)}</div>
					</div>
				</CardFooter>
			</Card>
		</main>
	);
};

export default page;
