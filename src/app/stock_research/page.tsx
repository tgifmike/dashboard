import SearchDashboard from '@/components/stock/SearchDashboard';
import { buttonVariants } from '@/components/ui/button';
import Link from 'next/link';
import React from 'react';

const page = () => {
	return (
		<main>
			<div className="p-2">
				<Link href="/" className={buttonVariants({ variant: 'outline' })}>
					Back
				</Link>
			</div>
			<SearchDashboard />
		</main>
	);
};

export default page;
