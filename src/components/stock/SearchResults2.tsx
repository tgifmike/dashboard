'use client';

import * as React from 'react';
import { useStockSymbol } from '@/app/context/StockSymbolContext';

import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select';
import { Button } from '../ui/button';
import { useState } from 'react';

interface StockSymbol {
	symbol: string;
	description: string;
}

const SearchResults2: React.FC<StockSymbol> = ({ matches }) => {
	const { stockSymbol, setStockSymbol } = useStockSymbol();
	const [localSelection, setLocalSelection] = useState('');

	const handleChange = (value: string) => {
		setStockSymbol(value);
	};

	return (
		<Select defaultOpen onValueChange={handleChange}>
			<SelectTrigger className="">
				<SelectValue placeholder="Select a Stock" />
			</SelectTrigger>
			<SelectContent>
				<SelectGroup>
					{matches.map((match: StockSymbol) => (
						<SelectItem key={match.symbol} value={match.symbol}>
                            {match.description}
						</SelectItem>
					))}
				</SelectGroup>
			</SelectContent>
		</Select>
	);
};

export default SearchResults2;
