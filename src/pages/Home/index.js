import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Card from '../../components/Card';
import NavBar from '../../components/NavBar';
import Pagination from '../../components/Pagination';
import requests from '../../config';
import { axiosConfig } from '../../config/axios';
import { setMovies } from '../../features/filter/filterSlice';

export default function Home() {
	const dispatch = useDispatch();
	const [moviesTopRated, setMoviesTopRated] = useState([]);
	const [moviesPopular, setMoviesPopular] = useState([]);
	const filteredMovies = useSelector((state) => state.filter);
	const pageNumbre = useSelector((state) => state.pagination);
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		setTimeout(() => {
			setLoading(false);
		}, 800);
	});
	useEffect(() => {
		fetchPopularMovies();
		setLoading(true);
	}, [pageNumbre.page]);
	useEffect(() => {
		dispatch(setMovies(moviesPopular));
		setLoading(true);
	}, [moviesPopular]);

	useEffect(() => {
		fetchTopRatedMovies();
		fetchPopularMovies();
	}, []);
	//get top rated movies
	const fetchTopRatedMovies = async () => {
		const topRatedMovies = await axiosConfig.get(requests.fetchTopRated);
		setMoviesTopRated(topRatedMovies.data.results);
	};
	//get Popular Movies
	const fetchPopularMovies = async () => {
		const popularMovies = await axiosConfig.get(
			requests.fetchPopular + '&page=' + pageNumbre.page,
		);
		setMoviesPopular(popularMovies.data.results);
	};

	return (
		<>
			{loading ? (
				<div className='p-5 z-10'>
					<div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6'>
						{[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((index) => (
							<div key={index} className='border border-gray-300 shadow rounded-md p-4 max-w-sm w-full mx-auto'>
								<div className='animate-pulse grid space-x-4'>
									<div className='rounded-xl bg-slate-700 h-44 w-70 ml-1'></div>
									<div className='flex-1 space-y-6 py-2'>
										<div className='h-2 bg-slate-700 rounded'></div>
										<div className='space-y-3'>
											<div className='grid grid-cols-3 gap-4'>
												<div className='h-2 bg-slate-700 rounded col-span-2'></div>
												<div className='h-2 bg-slate-700 rounded col-span-1'></div>
											</div>
											<div className='h-2 bg-slate-700 rounded'></div>
										</div>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			) : (
				<>
					{filteredMovies.filterMovies?.length > 0 ? (
						<CardsSection
							dataCards={filteredMovies.filterMovies}
							max={filteredMovies.filterMovies?.length}
							title='Movies'
						/>
					) : (
						<>
							<CardsSection
								dataCards={moviesTopRated}
								max={4}
								title='Top rated Movies'
							/>
							<CardsSection
								dataCards={moviesPopular}
								max={moviesPopular.filterMovies?.length}
								title='Popular Movies'
							/>
						</>
					)}
				</>
			)}
			<Pagination
				hidden={
					loading || (filteredMovies.filterMovies?.length > 0 ? true : false)
				}
			/>
		</>
	);
}

function CardsSection({ dataCards, max = dataCards?.length, title }) {
	return (
		<div className='p-5 z-10'>
			<h2 className='text-2xl font-extrabold tracking-tight text-gray-900 pl-5 border-b p-5'>
				{title}
			</h2>
			<div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6'>
				{dataCards?.map((movie, index) => {
					if (max - 1 < index) {
						return;
					} else {
						return <Card key={index} movie={movie} />;
					}
				})}
			</div>
		</div>
	);
}
