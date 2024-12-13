'use client';

import React, { useContext, useEffect, useState } from 'react';
import Search from './Search';
import { StockChart } from './StockChart';
import StockQuote2 from './StockQuote2';
import StockDetails from './StockDetails';




// interface Profile {
// 	country: string;
// 	currency: string;
// 	estimateCurrency: string;
// 	exchange: string;
// 	finnhubIndustry: string;
// 	ipo: string;
// 	logo: string;
// 	marketCapitalization: number;
// 	name: string;
// 	phone: string;
// 	shareOutstanding: number;
// 	ticker: string;
// 	weburl: string;
// }

const SearchDashboard = () => {
	return (
		<main>
			<div>
				<div>
					<Search />
				</div>
				<div className="flex justify-between">
					<div className="w-2/3">
						<StockChart />
					</div>
					<div className="w-1/3">
						<StockQuote2 />
						<StockDetails />
					</div>
				</div>
			</div>
		</main>
	);
};

export default SearchDashboard;
