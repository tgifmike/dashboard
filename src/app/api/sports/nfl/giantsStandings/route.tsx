import { NextResponse } from 'next/server';

export async function GET() {
	const API_SPORTS_KEY = process.env.API_SPORTS_KEY;
	const endpoint = `https://v1.american-football.api-sports.io/standings?league=1&season=2024&team=4`;

	try {
		const response = await fetch(endpoint, {
			method: 'GET',
			headers: {
				'x-rapidapi-host': 'v1.american-football.api-sports.io',
				'x-rapidapi-key': API_SPORTS_KEY || '',
			},
		});

		const data = await response.json();




		return NextResponse.json(data);
	} catch (error) {
		console.error('Error fetching NFL standings:', error);
		return NextResponse.json(
			{ error: 'Failed to fetch NFL standings' },
			{ status: 500 }
		);
	}
}
