'use client';

import React, { useEffect, useState } from 'react';

import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '../ui/card';
import Link from 'next/link';
import { Button, buttonVariants } from '../ui/button';
import { Input } from '../ui/input';
import { useZipCode } from '@/app/context/ZipCodeContext';



const forecast = () => {
	const [forecast, setForcast] = useState<any>();
	const [input, setInput] = useState<string>('');
	const [loading, setLoading] = useState<boolean>(false);
	const [zip, setZip] = useState<string>('10956');
	const { zipCode, setZipCode } = useZipCode();
	

	const clear = () => {
		setInput('');
	};


    const updateForecast = async () => {
        try {
            if (input) {
                setLoading(true);
				setZip(input)
				setZipCode(input)
                const fetchForecast = await fetch(`/api/weather?zip=${zip}`);
                const forecast = await fetchForecast.json();
	 				setForcast(forecast);
			} 
			
        }  catch (error) {
	 			
	 			console.log(error);
	 		} finally {
	 			setLoading(false);
	 			setInput('');
	 		}
    }

	useEffect(() => {
		const updateForecast = async () => {
			try {
				
				const fetchForecast = await fetch(`/api/weather?zip=${zip}`);
				const forecast = await fetchForecast.json();
				setForcast(forecast);
				setZipCode(zip);
			} catch (error) {
				
				console.log(error);
			} finally {
				setLoading(false);
				setInput('');
			}
		};

		updateForecast();
	}, []);

	return (
		<main className="w-1/3 m-1">
			<Card>
				<CardHeader>
					<CardTitle>
						<p className="p-1">Today's Weather</p>
						<div className="pt-2 px-3 flex justify-between items-center font-thin">
							<p>Current Zip Code</p>
							<p>{zip}</p>
						</div>
					</CardTitle>
				</CardHeader>
				<CardDescription className="flex p-2">
					<Input
						type="text"
						placeholder="ZipCode"
						value={input}
						onChange={(event: any) => setInput(event.target.value)}
					/>
					{input && (
						<Button variant={'outline'} onClick={clear}>
							Clear
						</Button>
					)}
					<Button onClick={updateForecast}>{loading ? 'Loading' : 'Lookup'}</Button>
				</CardDescription>
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
