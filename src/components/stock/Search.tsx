'use client';

import React, { useState } from 'react';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import SearchResults2 from './SearchResults2';


// interface StockSymbol {
// 	symbol: string;
// 	description: string;
// }

const Search = () => {
	const [input, setInput] = useState<string>('');
	const [loading, setLoading] = useState<boolean>(false);
	const [results, setResults] = useState<any>([]);

	const findMatches = async () => {
		try {
			if (input) {
				setLoading(true);
				const searchResults = await fetch(`/api/stock/search/?symbol=${input}`);
				const list = await searchResults.json();
				setResults(list.result);
			}
		} catch (error) {
			setResults([]);
			console.log(error);
		} finally {
			setLoading(false);
		}
	};

	const clear = () => {
		setInput('');
		setResults([]);
	};

	return (
		<main className="w-full m-2">
			<div className="w-full flex gap-2">
				<div className="flex items-center gap-2">
					<Input
						type="text"
						placeholder="Search for Stock"
						value={input}
						onChange={(event:any) => setInput(event.target.value)}
					/>
					{input && (
						<Button variant={'outline'} onClick={clear} className="">
							Clear
						</Button>
					)}
					<Button onClick={findMatches}>
						{loading ? 'Loading' : 'Search'}
					</Button>
				</div>
				<div className="w-1/4">
					{input && results.length > 0 ? (
						<SearchResults2 matches={results} />
					) : null}
				</div>
			</div>

			{/* {input && matches.length > 0 ? <SearchResults matches={matches} /> : null} */}
		</main>
	);
};

export default Search;
