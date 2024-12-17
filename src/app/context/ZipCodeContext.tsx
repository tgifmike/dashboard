'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

// Define the shape of the context value
interface ZipCodeContextType {
	zipCode: string;
	setZipCode: (zipCode: string) => void;
}

// Create the context
const ZipCodeContext = createContext<ZipCodeContextType | undefined>(
	undefined
);

// Provider component
export const ZipcodeProvider: React.FC<{ children: ReactNode }> = ({
	children,
}) => {
	const [zipCode, setZipCode] = useState<string>('');

	return (
		<ZipCodeContext.Provider value={{ zipCode, setZipCode }}>
			{children}
		</ZipCodeContext.Provider>
	);
};

// Custom hook to use the context
export const useZipCode = (): ZipCodeContextType => {
	const context = useContext(ZipCodeContext);
	if (!context) {
		throw new Error('useZipCode must be used within a ZipcodeProvider');
	}
	return context;
};
