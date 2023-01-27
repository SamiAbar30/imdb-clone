import React, { useEffect, useState } from 'react';
import Card from '../../components/Card';
import NavBar from '../../components/NavBar';
import Pagination from '../../components/Pagination';
import requests from '../../config';
import { axiosConfig } from '../../config/axios';

export default function Home() {
	const [moviesTopRated, setMoviesTopRated] = useState();
	const [moviesLatest, setMoviesLatest] = useState();
	useEffect(() => {
		fetchTopRatedMovies();
		fetchLatestMovies();
	}, []);
	const fetchTopRatedMovies = async () => {
		const topRatedMovies = await axiosConfig.get(requests.fetchTopRated);
		setMoviesTopRated(topRatedMovies.data.results);
		console.log(topRatedMovies);
	};
	const fetchLatestMovies = async () => {
		const latestMovies = await axiosConfig.get(requests.fetchAllTrending);
		setMoviesLatest(latestMovies.data.results);
		console.log(latestMovies);
	};
	
	return (
		<>
			<CardsSection dataCards={moviesTopRated} max={4}/>
			<CardsSection dataCards={moviesLatest} max={8}/>
			<Pagination />
		</>
	);
}

function CardsSection({ dataCards, max=1 }) {
	return (
		<div className='p-5 z-10'>
			<h2 className='text-2xl font-extrabold tracking-tight text-gray-900 pl-5 border-b p-5'>
				Latest Movies
			</h2>
			<div class='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6'>
				{dataCards?.map((movie,index) => {
					if (max-1<index) {
						return ;
					} else {
						return (<Card key={index} movie={movie}/>);
					}
				})}
			</div>
		</div>
	);
}
