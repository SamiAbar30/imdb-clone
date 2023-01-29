import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import ImdbLogo from '../../assets/images/Imdb-logo.png';
import requests, { API_KEY } from '../../config';
import { axiosConfig } from '../../config/axios';
import { filterMovie, searchMovie } from '../../features/filter/filterSlice';
export default function NavBar() {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const [filterDisplay, setFilterDisplay] = useState(false);
	const [genre, setGenre] = useState('');
	const [rating, setRating] = useState('');
	const [language, setLanguage] = useState('');
	const [genres, setGenres] = useState([]);
	const [searchInput, setSearchInput] = useState('');
	const message = useSelector((state) => state.filter.message);
	useEffect(() => {
		fetchGenres();
	}, []);
	useEffect(() => {
		notify()
	}, [message]);
	useEffect(() => {
		searchInput==""&&dispatch(searchMovie(searchInput));
	}, [searchInput]);
	const fetchGenres = async () => {
		const genresData = await axiosConfig.get(requests.fetchGenres);
		setGenres(genresData.data.genres)
	};
	//reset filter
	function resetFilter() {
		setGenre('');
		setRating('');
		setLanguage('');
		dispatch(filterMovie({ language, rating, genre }));
	}
	//movie filter by language and rating and genre
	function moviesFilter() {
		dispatch(filterMovie({ language, rating, genre }));
	}
	//search movie
	function moviesSearch() {
		dispatch(searchMovie(searchInput));
	}
	//
	const notify = () => {
		toast.info(message, {
			position: toast.POSITION.TOP_RIGHT,
		});
	};
	return (
		<div
			className={` w-full ${
				filterDisplay ? 'h-52 pt-5 mb-20' : 'h-20 items-center'
			} bg-black  transition-all duration-1000`}>
			<div className='flex pt-5 justify-around '>
				<img
					src={ImdbLogo}
					onClick={() => {
						navigate('/');
					}}
					alt='logo'
					className='hidden sm:h-10 sm:inline transition-all hover:scale-110 ease-in-out duration-300 '
				/>
				<div className='flex h-10 '>
					<span
						className='rounded-l-lg bg-yellow-300 p-2 transition-all font-extrabold text-4xl hover:bg-black hover:text-yellow-300 hover:text-yellow-300 duration-1000  border-yellow-300 border-2'
						onClick={() => {
							setFilterDisplay(!filterDisplay);
						}}>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							viewBox='0 0 24 24'
							strokeWidth={1.5}
							stroke='currentColor'
							className='w-6 h-6'>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								d='M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 00-.659-1.591L3.659 7.409A2.25 2.25 0 013 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3z'
							/>
						</svg>
					</span>
					<input
						type='text'
						className='p-2 w-40 md:w-96 sm:50'
						placeholder='Search'
						onChange={(e) => {
							setSearchInput(e.target.value);
						}}
					/>
					<span
						className='rounded-r-full bg-yellow-300 p-2 transition-all font-extrabold text-4xl hover:bg-black hover:text-yellow-300 hover:text-yellow-300 duration-1000  border-yellow-300 border-2'
						onClick={() => {
							moviesSearch();
						}}>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							viewBox='0 0 24 24'
							strokeWidth={1.5}
							stroke='currentColor'
							className='w-6 h-6'>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								d='M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z'
							/>
						</svg>
					</span>
				</div>
				<div className='px-4 py-2 text-white border-2 border-yellow-300 rounded-lg hover:bg-yellow-300 hover:text-black transition-all hover:scale-110 ease-in-out duration-300'>
					<Link to={`watch-list/`}>
						<p className='hidden sm:inline'>watchlist</p>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							className='h-4 w-4 text-yellow-300 group-hover:text-white hover:text-black sm:hidden'
							viewBox='0 0 20 20'
							fill='currentColor'>
							<path d='M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z' />
						</svg>
					</Link>
				</div>
			</div>
			<div
				className={` m-5 rounded-lg z-100  ${
					filterDisplay ? 'opacity-100 ' : 'opacity-0 '
				} transition-all  duration-800 `}>
				<div
					className={`bg-white p-6 rounded-xl shadow-lg ${
						!filterDisplay && 'hidden'
					}`}>
					<div className='grid grid-cols-3 gap-6'>
						<div className='flex flex-col'>
							<label
								htmlFor='status'
								className='font-medium text-sm text-stone-600'>
								Genre (s)
							</label>

							<select
								id='status'
								className='mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-300 focus:ring focus:ring-orange-200 focus:ring-opacity-50'
								onChange={(e) => {
									setGenre(e.target.value);
								}}>
								<option value=''>select Genre</option>
								{genres?.map((genre) => (
									<option key={genre.id} value={genre.id}>
										{genre.name}
									</option>
								))}
							</select>
						</div>
						<div className='flex flex-col'>
							<label
								htmlFor='status'
								className='font-medium text-sm text-stone-600'>
								Rating
							</label>

							<select
								id='status'
								className='mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-300 focus:ring focus:ring-orange-200 focus:ring-opacity-50'
								onChange={(e) => {
									setRating(e.target.value);
								}}>
								<option value=''>select starts</option>
								{[1, 2, 3, 4, 5, 6, 7, 8, 9]?.map((starts) => (
									<option key={starts} value={starts}>
										{starts} Stars{' '}
									</option>
								))}
							</select>
						</div>

						<div className='flex flex-col'>
							<label
								htmlFor='status'
								className='font-medium text-sm text-stone-600'>
								Language
							</label>

							<select
								id='status'
								className='mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-300 focus:ring focus:ring-orange-200 focus:ring-opacity-50'
								onChange={(e) => {
									setLanguage(e.target.value);
								}}>
								<option value=''>select Language</option>
								<option value='en'>English</option>
								<option value='ar'>Arabic</option>
								<option value='fr'>French</option>
								<option value='es'>Spanish</option>
								<option value='ko'>Korean</option>
								<option value='el'>Greek</option>
								<option value='ja'>Japanese</option>
								<option value='tr'>Turkish</option>
								<option value='it'>Italian</option>
								<option value='nl'>Dutch</option>
								<option value='pt'>Portuguese</option>
								<option value='de'>German</option>
							</select>
						</div>
					</div>

					<div className='grid md:flex grid-cols-2 justify-end space-x-4 w-full mt-6'>
						<button
							className='px-4 py-2 rounded-lg text-stone-50 bg-stone-400 hover:bg-stone-500 font-bold text-white shadow-lg shadow-stone-200 transition ease-in-out duration-200 translate-10'
							onClick={() => {
								resetFilter();
							}}>
							Reset
						</button>

						<button
							className='px-4 py-2 rounded-lg text-white bg-yellow-300 hover:bg-yellow-400 font-bold text-white shadow-lg shadow-yellow-200 transition ease-in-out duration-200 translate-10'
							onClick={() => {
								moviesFilter();
							}}>
							Apply Filters
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
