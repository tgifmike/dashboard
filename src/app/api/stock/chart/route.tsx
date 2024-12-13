import { NextResponse } from 'next/server';

export async function GET(request: Request): Promise<NextResponse> {
	const FMP_API_KEY = process.env.FMP_API_KEY;

	const baseURL: string = 'https://financialmodelingprep.com/api/v3';

	if (!FMP_API_KEY) {
		return NextResponse.json(
			{ error: 'API_KEY is not configured' },
			{ status: 500 }
		);
	}

	const url = new URL(request.url);
	const symbol = url.searchParams.get('symbol');

	if (!symbol) {
		return NextResponse.json({ error: 'Symbol is required' }, { status: 400 });
	}

	const apiUrl = `${baseURL}/historical-price-full/${symbol}?apikey=${FMP_API_KEY}`;

	try {
		const response = await fetch(apiUrl);
		if (!response.ok) {
			throw new Error('Failed to fetch data from FMP API');
		}

		const data = await response.json();
		return NextResponse.json(data);
	} catch (error: any) {
		return NextResponse.json(
			{ error: error.message || 'An error occurred' },
			{ status: 500 }
		);
	}
}
