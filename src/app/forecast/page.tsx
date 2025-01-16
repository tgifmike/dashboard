import { Button, buttonVariants } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import Link from 'next/link';
import React from 'react'

const page = () => {

  const stockList = [
		{
			stockName: 'AGNC',
			stockPrice: 9.24,
			stockQuanity: 126.45,
			dividend: 0.12,
			dividendTiming: 'Monthly',
			months: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
			get currentValue() {
				return this.stockPrice * this.stockQuanity;
			},
			get ROI() {
				return ((12 * this.dividend) / this.stockPrice) * 100;
			},
			get dividendPayment() {
				return this.dividend * this.stockQuanity;
			},
			get yearDividendPayment() {
				return this.dividendPayment * 12;
			},
		},
		{
			stockName: 'VZ',
			stockPrice: 38.16,
			stockQuanity: 30.96,
			dividend: 0.68,
			dividendTiming: 'Quarterly',
			months: [1, 4, 7, 10],
			get currentValue() {
				return this.stockPrice * this.stockQuanity;
			},
			get ROI() {
				return ((4 * this.dividend) / this.stockPrice) * 100;
			},
			get dividendPayment() {
				return this.dividend * this.stockQuanity;
			},
			get yearDividendPayment() {
				return this.dividendPayment * 4;
			},
		},
		{
			stockName: 'HRZN',
			stockPrice: 9.21,
			stockQuanity: 135.82,
			dividend: 0.11,
			dividendTiming: 'Monthly',
			months: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
			get currentValue() {
				return this.stockPrice * this.stockQuanity;
			},
			get ROI() {
				return ((12 * this.dividend) / this.stockPrice) * 100;
			},
			get dividendPayment() {
				return this.dividend * this.stockQuanity;
			},
			get yearDividendPayment() {
				return this.dividendPayment * 12;
			},
		},
	];
  
  let year = 1;
  let newStockList:any = [];

  function findOneYearPayout() {

    if (!stockList || stockList.length < 1) {
			return <div>No data available </div>;
		}
  
    for (let i = 0; i < stockList.length; i++) {

      

      let updatedStockQuanity = stockList[i].stockQuanity
             let monthlyDividend = 0;
							let quanityIncrease = 0;
      

      if (stockList[i].dividendTiming === 'Monthly') {
        for (let j = 0; j < 11; j++) {
          monthlyDividend = updatedStockQuanity * stockList[i].dividend;
          quanityIncrease = monthlyDividend / stockList[i].stockPrice;
          updatedStockQuanity = updatedStockQuanity + quanityIncrease;
          // newStockList.push({stockName: stockList[i].stockName, stockPrice: stockList[i].stockPrice, updatedQuanity: updatedStockQuanity})
        }
        newStockList.push({
					stockName: stockList[i].stockName,
					stockPrice: stockList[i].stockPrice,
					updatedQuanity: updatedStockQuanity,
					stockValue: stockList[i].currentValue,
					dividend: monthlyDividend,
				});
       
        
      } else if (stockList[i].dividendTiming === 'Quarterly') {
        for (let k = 0; k < 3; k++) {
          monthlyDividend = updatedStockQuanity * stockList[i].dividend;
          quanityIncrease = monthlyDividend / stockList[i].stockPrice;
          updatedStockQuanity = updatedStockQuanity + quanityIncrease;
        }
        newStockList.push({
					stockName: stockList[i].stockName,
					stockPrice: stockList[i].stockPrice,
					updatedQuanity: updatedStockQuanity,
          stockValue: stockList[i].currentValue,
          dividend: monthlyDividend,
				});
      }


    }
    return newStockList;
  }

  function findYearOneDividends() {
    
  }

  let yearOne = findOneYearPayout()
  


  
 

  return (
		<main>
			<div className='p-2'>
        <Link href="/" className={buttonVariants({ variant: 'outline'})}>
					Back
				</Link>
			</div>

			<Card>
				<CardHeader>
					<CardTitle>Stock Dividend Calculator</CardTitle>
				</CardHeader>

				<CardContent>
					<Table className="p-0 m-0">
						<TableHeader>
							<TableRow>
								<TableHead className="w-[200px]">Stock</TableHead>
								<TableHead className="text-center">Price</TableHead>
								<TableHead className="text-center">Quanity</TableHead>
								<TableHead className="text-center">Dividend</TableHead>
								<TableHead className="text-center">ROI</TableHead>
								<TableHead className="text-right">Value</TableHead>
							</TableRow>
						</TableHeader>
						<TableBody className="">
							{stockList.map((item) => (
								<TableRow key={item.stockName}>
									<TableCell className="">{item.stockName}</TableCell>
									<TableCell className="text-center">
										$ {item.stockPrice}
									</TableCell>
									<TableCell className="text-center">
										{item.stockQuanity}
									</TableCell>
									<TableCell className="text-center">
										$ {item.dividend}
									</TableCell>
									<TableCell className="text-center">
										{item.ROI.toFixed(2)}
									</TableCell>

									<TableCell className="text-right">
										${Number(item.currentValue).toFixed(2)}
									</TableCell>
								</TableRow>
							))}
						</TableBody>
					</Table>
				</CardContent>
			</Card>
			<Card>
				<CardHeader>
					<CardTitle>Year {year}</CardTitle>
				</CardHeader>
				<CardContent>
					<Table className="p-0 m-0">
						<TableHeader>
							<TableRow>
								<TableHead className="w-[200px]">Stock</TableHead>
								<TableHead className="text-center">updated Qty</TableHead>
								<TableHead className="text-center">dividend</TableHead>
								<TableHead className="text-center">Updated Value</TableHead>
								<TableHead className="text-right">+/-</TableHead>
							</TableRow>
						</TableHeader>
						<TableBody className="">
							{yearOne.map((item: any, idx: number) => (
								<TableRow key={idx}>
									<TableCell>{item.stockName}</TableCell>
									<TableCell className="text-center">
										{item.updatedQuanity}
									</TableCell>
									<TableCell className="text-center">
										{item.dividend.toFixed(2)}
									</TableCell>
									<TableCell className="text-center">
										$ {(item.stockPrice * item.updatedQuanity).toFixed(2)}
									</TableCell>
									<TableCell className="text-right">
										${' '}
										{(
											item.stockPrice * item.updatedQuanity -
											item.stockValue
										).toFixed(2)}
									</TableCell>
								</TableRow>
							))}
						</TableBody>
					</Table>
				</CardContent>
			</Card>
			<Card>
				<CardHeader>
					<CardTitle>Year {year}</CardTitle>
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
							{stockList.map((item: any, idx: number) => (
								<TableRow key={idx}>
									<TableCell>{item.stockName}</TableCell>
									<TableCell className="text-center">
										{item.months.map((mon: any, i: number) => (
											<span>
												{mon === 0 ? item.dividendPayment.toFixed(2) : null}
											</span>
										))}
									</TableCell>
									<TableCell className="text-center">
										{item.months.map((mon: any) => (
											<span>
												{mon === 1 ? item.dividendPayment.toFixed(2) : null}
											</span>
										))}
									</TableCell>
									<TableCell className="text-center">
										{item.months.map((mon: any) => (
											<span>
												{mon === 2 ? item.dividendPayment.toFixed(2) : null}
											</span>
										))}
									</TableCell>
									<TableCell className="text-center">
										{item.months.map((mon: any) => (
											<span>
												{mon === 3 ? item.dividendPayment.toFixed(2) : null}
											</span>
										))}
									</TableCell>
									<TableCell className="text-center">
										{item.months.map((mon: any) => (
											<span>
												{mon === 4 ? item.dividendPayment.toFixed(2) : null}
											</span>
										))}
									</TableCell>
									<TableCell className="text-center">
										{item.months.map((mon: any) => (
											<span>
												{mon === 5 ? item.dividendPayment.toFixed(2) : null}
											</span>
										))}
									</TableCell>
									<TableCell className="text-center">
										{item.months.map((mon: any) => (
											<span>
												{mon === 6 ? item.dividendPayment.toFixed(2) : null}
											</span>
										))}
									</TableCell>
									<TableCell className="text-center">
										{item.months.map((mon: any) => (
											<span>
												{mon === 7 ? item.dividendPayment.toFixed(2) : null}
											</span>
										))}
									</TableCell>
									<TableCell className="text-center">
										{item.months.map((mon: any) => (
											<span>
												{mon === 8 ? item.dividendPayment.toFixed(2) : null}
											</span>
										))}
									</TableCell>
									<TableCell className="text-center">
										{item.months.map((mon: any) => (
											<span>
												{mon === 9 ? item.dividendPayment.toFixed(2) : null}
											</span>
										))}
									</TableCell>
									<TableCell className="text-center">
										{item.months.map((mon: any) => (
											<span>
												{mon === 10 ? item.dividendPayment.toFixed(2) : null}
											</span>
										))}
									</TableCell>
									<TableCell className="text-center">
										{item.months.map((mon: any, i: number) => (
											<span>
												{mon === 11 ? item.dividendPayment.toFixed(2) : null}
											</span>
										))}
									</TableCell>
									<TableCell className="text-right">
										{item.yearDividendPayment.toFixed(2)}
									</TableCell>
								</TableRow>
							))}
						</TableBody>
					</Table>
				</CardContent>
			</Card>
		</main>
	);
}

export default page