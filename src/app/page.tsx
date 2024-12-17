import Header from '@/components/header/Header';
import StockWatchList from '@/components/stock/StockWatchList';
import Forecast from '@/components/weather/Forecast';
import Image from 'next/image';

export default function Home() {
	return (
		<main className="p-2">
			<Header />

			<div className="flex justify-between">
				<StockWatchList />
				<Forecast />
			</div>
		</main>
	);
}
