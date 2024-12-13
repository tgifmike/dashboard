'use client';

import React, { useEffect, useState } from 'react';

import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from '../ui/card';
import Link from 'next/link';
import { buttonVariants } from '../ui/button';

const forecast = () => {
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

	return (
		<main className="w-1/2">
			<Card>
				<CardHeader>
					<CardTitle>Today's Weather</CardTitle>
				</CardHeader>
				<CardContent>
					<div className="flex justify-between items-center">
						<div>Current Temperature</div>
						<div>{forecast?.currentConditions?.temp} °F</div>
					</div>
					<div className="flex justify-between items-center">
						<div>Feels Like</div>
						<div>{forecast?.currentConditions?.feelslike} °F</div>
					</div>
					<div className="flex justify-between items-center">
						<div>Weather Conditions</div>
						<div>{forecast?.currentConditions?.conditions}</div>
					</div>
					<div className="flex justify-between items-center">
						<div>Chance of Precipitation</div>
						<div>{forecast?.currentConditions?.precipprob} %</div>
					</div>
					<div className="flex justify-between items-center">
						<div>Precip Type</div>
						<div>{forecast?.currentConditions?.preciptype}</div>
					</div>
				</CardContent>

				<CardFooter>
					<Link href="/weather" className={buttonVariants()}>
						Extended Forcast
					</Link>
				</CardFooter>
			</Card>
		</main>
	);
};

export default forecast;
