

import Header from '@/components/header/Header';
import NFLStandings from '@/components/sports/Standings';
import NewWatchList from '@/components/stock/NewWatchList';
import StockWatchList from '@/components/stock/StockWatchList';
import WatchList from '@/components/stock/WatchList';
import Forecast from '@/components/weather/Forecast';
import Image from 'next/image';

export default function Home() {
	return (
		<main className="p-2">
			<Header />

			<div className="flex flex-col md:flex-row justify-between w-full">
				{/* <StockWatchList /> */}
				<WatchList />
				{/* <NewWatchList /> */}
				<Forecast />
			</div>
			<div>
				{/* <WatchList /> */}
				<NFLStandings />
			</div>
		</main>
	);
}
