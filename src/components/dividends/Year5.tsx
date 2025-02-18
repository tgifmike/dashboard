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

const year = ({ stockList }: any) => {
	let payoutArray: any = [];
	let dividendArray: any = [];
	let yearPayout = 0;
	let monthlyPayout = 0;
	const janArray: number[] = [];
	const febArray: number[] = [];
	const marArray: number[] = [];
	const aprArray: number[] = [];
	const mayArray: number[] = [];
	const junArray: number[] = [];
	const julArray: number[] = [];
	const augArray: number[] = [];
	const sepArray: number[] = [];
	const octArray: number[] = [];
	const novArray: number[] = [];
	const decArray: number[] = [];

	function dividendPayout() {
		//iterate though each stock
		for (let i = 0; i < stockList.length; i++) {
			//iterate though each month
			for (let j = 0; j < 12; j++) {
				if (stockList[i].months[j] === 1) {
					//calculate how much was dividend for that month
					let dividend = stockList[i].stockQuanity * stockList[i].dividend;
					//calculate the amount of shares that were dripped
					let updatedQty = dividend / stockList[i].stockPrice;
					//add that amount to new qty
					stockList[i].stockQuanity += updatedQty;
					yearPayout += dividend;
					dividendArray.push(dividend);
					if (j === 0) {
						janArray.push(dividend);
					} else if (j === 1) {
						febArray.push(dividend);
					} else if (j === 2) {
						marArray.push(dividend);
					} else if (j === 3) {
						aprArray.push(dividend);
					} else if (j === 4) {
						mayArray.push(dividend);
					} else if (j === 5) {
						junArray.push(dividend);
					} else if (j === 6) {
						julArray.push(dividend);
					} else if (j === 7) {
						augArray.push(dividend);
					} else if (j === 8) {
						sepArray.push(dividend);
					} else if (j === 9) {
						octArray.push(dividend);
					} else if (j === 10) {
						novArray.push(dividend);
					} else if (j === 11) {
						decArray.push(dividend);
					}
				} else {
					dividendArray.push(0);
				}
			}
			monthlyPayout = 0;
			let arr = dividendArray.splice(0, 12);
			let sum = arr.reduce(
				(accumulator: number, currentValue: number) =>
					accumulator + currentValue,
				0
			);

			payoutArray.push({
				stockName: stockList[i].stockName,
				dividend: arr,
				total: sum,
			});
		}

		return payoutArray;
	}

	let year = dividendPayout();

	function findMonthlyTotals(arr: any) {
		let total = 0;
		for (let i = 0; i < arr.length; i++) {
			total += arr[i];
		}
		return total;
	}

	const janTotal = findMonthlyTotals(janArray);
	const febTotal = findMonthlyTotals(febArray);
	const marTotal = findMonthlyTotals(marArray);
	const aprTotal = findMonthlyTotals(aprArray);
	const mayTotal = findMonthlyTotals(mayArray);
	const junTotal = findMonthlyTotals(junArray);
	const julTotal = findMonthlyTotals(julArray);
	const augTotal = findMonthlyTotals(augArray);
	const sepTotal = findMonthlyTotals(sepArray);
	const octTotal = findMonthlyTotals(octArray);
	const novTotal = findMonthlyTotals(novArray);
	const decTotal = findMonthlyTotals(decArray);
  

	return (
		<main>
			<Card className="pb-0 mb-0">
							<CardHeader className="py-0 my-1">
								<CardTitle>Year 5</CardTitle>
							</CardHeader>
							<CardContent>
								<Table className="p-0 m-0">
									<TableHeader className="p-0 m-0">
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
									<TableBody className="py-0 my-0">
										{year.map((item: any, idx: number) => (
											<TableRow>
												<TableCell>{item.stockName}</TableCell>
			
												{item.dividend.map((items: any) => (
													<TableCell>$ {items.toFixed(2)}</TableCell>
												))}
			
												<TableCell>{item.total.toFixed(2)}</TableCell>
											</TableRow>
										))}
										<TableRow>
											<TableCell>Montlhy Total</TableCell>
											<TableCell>$ {janTotal.toFixed(2)}</TableCell>
											<TableCell>{febTotal.toFixed(2)}</TableCell>
											<TableCell>$ {marTotal.toFixed(2)}</TableCell>
											<TableCell>{aprTotal.toFixed(2)}</TableCell>
											<TableCell>$ {mayTotal.toFixed(2)}</TableCell>
											<TableCell>{junTotal.toFixed(2)}</TableCell>
											<TableCell>$ {julTotal.toFixed(2)}</TableCell>
											<TableCell>{augTotal.toFixed(2)}</TableCell>
											<TableCell>$ {sepTotal.toFixed(2)}</TableCell>
											<TableCell>{octTotal.toFixed(2)}</TableCell>
											<TableCell>$ {novTotal.toFixed(2)}</TableCell>
											<TableCell>{decTotal.toFixed(2)}</TableCell>
										</TableRow>
									</TableBody>
								</Table>
							</CardContent>
							<CardFooter className="flex justify-end py-0 my-0">
								<div className="flex gap-4">
									Total Year Payout $ {yearPayout.toFixed(2)}
								</div>
							</CardFooter>
						</Card>
		</main>
	);
};

export default year;
