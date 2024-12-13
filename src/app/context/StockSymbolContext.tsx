'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

// Define the shape of the context value
interface StockSymbolContextType {
	stockSymbol: string;
	setStockSymbol: (symbol: string) => void;
}

// Create the context
const StockSymbolContext = createContext<StockSymbolContextType | undefined>(
	undefined
);

// Provider component
export const StockSymbolProvider: React.FC<{ children: ReactNode }> = ({
	children,
}) => {
	const [stockSymbol, setStockSymbol] = useState<string>('');

	return (
		<StockSymbolContext.Provider value={{ stockSymbol, setStockSymbol }}>
			{children}
		</StockSymbolContext.Provider>
	);
};

// Custom hook to use the context
export const useStockSymbol = (): StockSymbolContextType => {
	const context = useContext(StockSymbolContext);
	if (!context) {
		throw new Error('useStockSymbol must be used within a StockSymbolProvider');
	}
	return context;
};
