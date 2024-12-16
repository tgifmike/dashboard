'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { useStockSymbol } from '@/app/context/StockSymbolContext';
import { Separator } from '../ui/separator';
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '../ui/card';

interface Profile {
	companyName: string;
	ceo: string;
	currency: string;
	exchangeShortName: string;
	country: string;
	industry: string;
	sector: string;
	image: string;
	symbol: string;
}
[];

const StockDetails = () => {
	const { stockSymbol, setStockSymbol } = useStockSymbol();
	const [profile, setProfile] = useState<any>();

	useEffect(() => {
		const updateStockProfile = async () => {
			try {
				const profileResult = await fetch(
					`/api/stock/profile/?symbol=${stockSymbol}`
				);
				const profile = await profileResult.json();
				setProfile(profile);
			} catch (error) {
				//setStockDetails()
				//setProfile([]);
				console.log(error);
			}
		};

		updateStockProfile();
	}, [stockSymbol]);

	if (!profile || profile.length === 0) {
		return <div>No data available for symbol: {stockSymbol}</div>;
	}

	return (
		<main className="m-2">
			<Card>
				<CardHeader>
					<CardTitle>
						<div className="flex justify-between items-center pb-4">
							<div className="">
								{profile[0]?.image && (
									<Image
										src={profile[0]?.image}
										alt="logo of company"
										height={30}
										width={30}
										className=""
									/>
								)}
							</div>
							<div className="text-xl font-semibold">
								{profile[0]?.companyName}
							</div>
						</div>
					</CardTitle>
					<CardDescription></CardDescription>
				</CardHeader>
				<CardContent>
					<div className="flex justify-between items-center">
						<div>CEO:</div>
						<div className="">{profile[0]?.ceo}</div>
					</div>
					<Separator />

					<div className="flex justify-between items-center">
						<div>Country:</div>
						<div className="">{profile[0]?.country}</div>
					</div>
					<Separator />

					<div className="flex justify-between items-center">
						<div>Exchange:</div>
						<div className="">{profile[0]?.exchangeShortName}</div>
					</div>
					<Separator />

					<div className="flex justify-between items-center">
						<div>Sector:</div>
						<div className="">{profile[0]?.sector}</div>
					</div>
					<Separator />

					<div className="flex justify-between items-center">
						<div>Industry:</div>
						<div className="">{profile[0]?.industry}</div>
					</div>
					<Separator />

					<div className="flex justify-between items-center">
						<div>Currency:</div>
						<div className="">{profile[0]?.currency}</div>
					</div>
				</CardContent>
				<CardFooter></CardFooter>
			</Card>
		</main>
	);
};

export default StockDetails;
