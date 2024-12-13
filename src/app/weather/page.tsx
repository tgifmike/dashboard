'use client';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from '@/components/ui/table';
import React, { useEffect, useState } from 'react';

const extendedForecast = () => {
	const [forecast, setForcast] = useState<any>();

	useEffect(() => {
		const updateForecast = async () => {
			try {
				const fetchForecast = await fetch(`/api/weather?`);
				const forecast = await fetchForecast.json();
				setForcast(forecast);
			} catch (error) {
				//setStockDetails()
				console.log(error);
			}
		};

		updateForecast();
	}, []);

	let todaysDate = new Date();

	function formatDate(date: Date) {
		var d = new Date(date),
			month = '' + (d.getMonth() + 1),
			day = '' + d.getDate(),
			year = d.getFullYear();

		if (month.length < 2) month = '0' + month;
		if (day.length < 2) day = '0' + day;

		return [year, month, day].join('-');
	}

	let formatedDate = formatDate(todaysDate);

	console.log(forecast);
	return (
		<main>
			<Card>
				<CardHeader>
					<CardTitle>Extended Forecast</CardTitle>
				</CardHeader>
				<CardContent>
					<Table>
						<TableHeader>
							<TableRow>
								<TableHead className="w-[100px]">Date</TableHead>
								<TableHead>Temp</TableHead>
								<TableHead>High</TableHead>
								<TableHead>Low</TableHead>
								<TableHead>Feels Like</TableHead>
								<TableHead>Condition</TableHead>
								<TableHead>Precipitaion %</TableHead>
								<TableHead>Precipitaion Type</TableHead>
								<TableHead>Humidity</TableHead>
								<TableHead>UV Index</TableHead>
								<TableHead>Sun Rise</TableHead>
								<TableHead className="text-right">Sun Set</TableHead>
							</TableRow>
						</TableHeader>
						<TableBody>
							{forecast?.days.map((day: any) => (
								<TableRow>
									<TableCell>
										{day.datetime === formatedDate ? 'Today' : day.datetime}
									</TableCell>
									<TableCell>{day.temp} °F</TableCell>
									<TableCell>{day.tempmax} °F</TableCell>
									<TableCell>{day.tempmin} °F</TableCell>
									<TableCell>{day.feelslike} °F</TableCell>
									<TableCell>{day.conditions}</TableCell>
									<TableCell>{day.precipprob} %</TableCell>
									<TableCell>{day.preciptype}</TableCell>
									<TableCell>{day.humidity}</TableCell>
									<TableCell>{day.uvindex}</TableCell>
									<TableCell>{day.sunrise}</TableCell>
									<TableCell className="text-right">{day.sunset}</TableCell>
								</TableRow>
							))}
						</TableBody>
					</Table>
				</CardContent>
			</Card>
		</main>
	);
};

export default extendedForecast;