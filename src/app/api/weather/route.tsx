import { NextResponse } from 'next/server';

export async function GET(request: Request): Promise<NextResponse> {
	const Weather_API_KEY = process.env.Weather_API_KEY;
	const WeatherZipCode = process.env.WeatherZipCode;
	const baseURL: string =
		'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline';

	https: if (!Weather_API_KEY) {
		return NextResponse.json(
			{ error: 'API_KEY is not configured' },
			{ status: 500 }
		);
	}

	const url = new URL(request.url);
	const apiUrl = `${baseURL}/${WeatherZipCode}?key=${Weather_API_KEY}`;

	try {
		const response = await fetch(apiUrl);
		if (!response.ok) {
			throw new Error('Failed to fetch data from Weather API');
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
