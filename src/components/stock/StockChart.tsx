'use client';

import { TrendingUp } from 'lucide-react';
import {
	CartesianGrid,
	LabelList,
	Line,
	LineChart,
	XAxis,
	YAxis,
} from 'recharts';

import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import {
	ChartConfig,
	ChartContainer,
	ChartTooltip,
	ChartTooltipContent,
} from '@/components/ui/chart';
import { useStockSymbol } from '@/app/context/StockSymbolContext';
import { useEffect, useState } from 'react';

interface StockChartProps {
	historical: { date: string; close: number }[];
}

const chartConfig = {
	close: {
		label: 'close',
		color: 'black',
	},
	mobile: {
		label: 'Mobile',
		color: 'hsl(var(--chart-2))',
	},
} satisfies ChartConfig;

export function StockChart() {
	const { stockSymbol, setStockSymbol } = useStockSymbol();
	const [APIChartData, setAPIChartData] = useState<StockChartProps>();

	useEffect(() => {
		const updateStockProfile = async () => {
			try {
				const fetchchartData = await fetch(
					`/api/stock/chart/?symbol=${stockSymbol}`
				);
				const chartData = await fetchchartData.json();
				setAPIChartData(chartData);
				console.log(fetchchartData);
			} catch (error) {
				//setStockDetails()
				console.log(error);
			}
		};

		updateStockProfile();
	}, [stockSymbol]);

	let chartData: any[] = [];

	// Safely access 'APIChartData?.historical' and handle undefined
	if (APIChartData?.historical) {
		chartData = APIChartData.historical.slice().reverse();
	} else {
		console.warn("APIChartData or its 'historical' property is undefined.");
	}

	return (
		<Card className="m-2">
			<CardHeader>
				{/* <CardTitle>Line Chart - Label</CardTitle>
				<CardDescription>January - June 2024</CardDescription> */}
			</CardHeader>
			<CardContent>
				<ChartContainer config={chartConfig}>
					<LineChart
						accessibilityLayer
						data={chartData}
						margin={{
							top: 20,
							left: 12,
							right: 12,
						}}
					>
						<CartesianGrid vertical={false} />
						<XAxis
							dataKey="label"
							tickLine={true}
							axisLine={true}
							tickMargin={8}
							tickFormatter={(value:any) => value.slice(0, 3)}
						/>
						<YAxis />
						<Line
							dataKey="close"
							type="natural"
							stroke="red"
							strokeWidth={1}
							dot={false}
							activeDot={{
								r: 5,
							}}
						></Line>
						<LabelList
							position="top"
							offset={12}
							className="fill-foreground"
							fontSize={12}
						/>
						<ChartTooltip
							cursor={false}
							content={<ChartTooltipContent indicator="line" />}
						/>
					</LineChart>
				</ChartContainer>
			</CardContent>
			<CardFooter className="flex-col items-start gap-2 text-sm">
				
			</CardFooter>
		</Card>
	);
}
