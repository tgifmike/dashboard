import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	/* config options here */
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'static2.finnhub.io',
				port: '',
			},
			{
				protocol: 'https',
				hostname: 'images.financialmodelingprep.com',
				port: '',
			},
			{
				protocol: 'https',
        hostname: 'media.api-sports.io',
				port: '',
			},
		],
	},
};

export default nextConfig;
