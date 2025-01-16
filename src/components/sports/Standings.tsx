'use client'
import Image from "next/image";
import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../ui/table";

const Standings = () => {

	const [standings, setStandings] = useState<any>()

	useEffect(() => {
		const getGiantsStandings = async () => {
			try {
				const fetchNYGStandings = await fetch(`/api/sports/nfl/giantsStandings`);
				const NYGStandings = await fetchNYGStandings.json();
				setStandings(NYGStandings.response);
			} catch (error) {
				console.log(error);
			}
		}

		getGiantsStandings()
	}, [])

	if (!standings || standings.length === 0) {
		return <div>No data available</div>;
	}

	

	return (
		<main>
			
			<Card className="">
				<CardHeader>
					<CardTitle>
						<div className="flex items-center">
								<div>
									{standings[0]?.league.logo && (
										<Image
											src={standings[0]?.league.logo}
											alt={standings[0]?.league.name}
											width={20}
											height={20}
										/>
									)}
								</div>
								<div>{standings[0]?.league.name}</div>
							</div>
							<div>Season {standings[0]?.league.season}</div>
							<div>{standings[0]?.conference}</div>
							<div>{standings[0]?.division}</div>
					</CardTitle>
				</CardHeader>
				<CardContent>
					<Table>
						<TableHeader>
							<TableRow>
								<TableHead className="w=[200px]">Team</TableHead>
								<TableHead>W</TableHead>
								<TableHead>L</TableHead>
								<TableHead>T</TableHead>
								<TableHead>PF</TableHead>
								<TableHead>PA</TableHead>
								<TableHead>Home</TableHead>
								<TableHead>Away</TableHead>
								<TableHead>Division</TableHead>
								<TableHead>Conference</TableHead>
								<TableHead className="text-right">Streak</TableHead>
							</TableRow>
						</TableHeader>
						<TableBody>
							{standings.map((item: any, idx: number) => (
								<TableRow key={idx}>
									<TableCell>
										<div className="flex items-center gap-2">
											<div>
												{standings[idx]?.team.logo && (
													<Image
														src={standings[idx]?.team.logo}
														alt={standings[idx]?.team.name}
														width={20}
														height={20}
													/>
												)}
											</div>
											<div>{standings[idx]?.team.name}</div>
										</div>
									</TableCell>
									<TableCell>{standings[idx]?.won}</TableCell>
									<TableCell>{standings[idx]?.lost}</TableCell>
									<TableCell>{standings[idx]?.ties}</TableCell>
									<TableCell>{standings[idx]?.points.for}</TableCell>
									<TableCell>{standings[idx]?.points.against}</TableCell>
									<TableCell>{standings[idx]?.records.home}</TableCell>
									<TableCell>{standings[idx]?.records.road}</TableCell>
									<TableCell>{standings[idx]?.records.division}</TableCell>
									<TableCell>{standings[idx]?.records.conference}</TableCell>
									<TableCell className="text-right">
										{standings[idx]?.streak}
									</TableCell>
								</TableRow>
							))}
						</TableBody>
					</Table>
				</CardContent>
			</Card>

		
		</main>
	);
};

export default Standings;
