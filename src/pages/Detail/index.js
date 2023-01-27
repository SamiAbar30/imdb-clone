import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import requests, { API_KEY } from '../../config';
import { axiosConfig } from '../../config/axios';

export default function Detail() {
	const [movie, setMovie] = useState([]);
	const [view, setView] = useState(true);
	let { Id } = useParams();

	useEffect(() => {
		fetchMovieById();
	}, []);

	const fetchMovieById = async () => {
		const moviesData = await axiosConfig.get(
			`/movie/${Id}?api_key=${API_KEY}&language=en-US`,
		);
		console.log(moviesData);
		setMovie(moviesData.data);
	};

	//add movie to the watch list
	function addToWatchList() {
		// get the data from localStorage and convert it to table
		const arr = JSON.parse(localStorage.getItem('array')) || [];
		//add new movie
		arr.push(movie);
		// convert array to JSON string
		const jsonArr = JSON.stringify(arr);
		// save to localStorage
		localStorage.setItem('array', jsonArr);
	}
	const notify = () => {
		toast.success('the movie was added', {
			position: toast.POSITION.TOP_RIGHT,
		});
	};
	return (
		<>
			<div className='text-gray-600 body-font overflow-hidden'>
				<div className='container px-5 py-24 mx-auto'>
					<div className='flex px-16 mt-8 space-y-0 space-x-4  mb-2  ml-5 lg:ml-20'>
						<button
							className='inline-flex items-center justify-center w-full px-4 py-2 text-base font-semibold text-white  transition-all duration-200 bg-black border border-transparent rounded-md sm:w-auto  ml-1'
							onClick={() => setView(true)}>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								fill='none'
								viewBox='0 0 24 24'
								strokeWidth={1.5}
								stroke='currentColor'
								className='w-6 h-6 mr-1'>
								<path
									strokeLinecap='round'
									d='M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z'
								/>
							</svg>
							Trailer
						</button>

						<button
							className='inline-flex items-center justify-center w-full px-4 py-2 text-base font-semibold text-black transition-all duration-200 bg-transparent border border-black rounded-md sm:w-auto '
							onClick={() => setView(false)}>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								fill='none'
								viewBox='0 0 24 24'
								strokeWidth={1.5}
								stroke='currentColor'
								className='w-6 h-6 mr-1'>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									d='M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z'
								/>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									d='M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z'
								/>
							</svg>
							Photos
						</button>
					</div>
					<div className='lg:w-4/5 mx-auto flex flex-wrap'>
						{view ? <MoviesContainer /> : <ImageContainer />}
						<div className='lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0'>
							<h1 className='text-gray-900 text-3xl title-font font-medium mb-1'>
								{movie?.original_name || movie?.original_title}
							</h1>
							<div className='flex mb-4 mt-5'>
								<span className='flex items-center'>
									<svg
										fill='currentColor'
										stroke='currentColor'
										stroke-linecap='round'
										stroke-linejoin='round'
										stroke-width='2'
										className='w-4 h-4 text-yellow-500'
										viewBox='0 0 24 24'>
										<path d='M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z'></path>
									</svg>
									<span className='text-gray-600 ml-3'>
										{movie?.vote_average}
									</span>
								</span>
							</div>
							<p className='leading-relaxed'>{movie?.overview}</p>
							<div className='mt-5'>
								<p className='text-lg font-semibold text-black'>GENRES</p>
								<nav className='flex flex-wrap list-none -mb-1 mt-1'>
									{movie?.genres?.map((genre, index) => (
										<li className='lg:w-1/3 mb-1 w-1/2'>
											<p className='text-gray-600 hover:text-gray-800'>
												{genre.name}
											</p>
										</li>
									))}
								</nav>
							</div>
							<div>
								<div className='flex items-center mt-5'>
									<p className='text-lg font-semibold text-black'>
										Production Companies
									</p>
								</div>

								<div className='flex items-center mt-5 space-x-4'>
									{movie?.production_companies?.map((company) => (
										<div className='lg:w-1/3 mb-1 w-1/2'>
											<p className='text-gray-600 hover:text-gray-800'>
												{company.name}
											</p>
										</div>
									))}
								</div>
							</div>
							<div className='flex mt-5'>
								<button
									className='flex  text-white bg-yellow-500 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-600 rounded'
									onClick={() => {
										addToWatchList(movie);
										notify();
									}}>
									Add to Watchlist
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className='px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20'>
				<div className='mx-auto mb-10 lg:max-w-xl sm:text-center'>
					<p className='inline-block px-3 py-px mb-4 text-4xl font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400'>
						Lorem Team
					</p>
					<p className='text-base text-gray-700 md:text-lg'>
						Sed ut perspiciatis unde omnis iste natus error sit voluptatem
						accusantium doloremque laudantium.
					</p>
				</div>
				<div className='grid gap-10 mx-auto lg:max-w-screen-lg sm:grid-cols-2 lg:grid-cols-4'>
					{[1, 2, 3, 4, 5, 6, 7, 8].map(() => (
						<div className='flex flex-col items-center'>
							<img
								className='object-cover w-20 h-20 mb-2 rounded-full shadow'
								src='https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260'
								alt='Person'
							/>
							<div className='flex flex-col items-center'>
								<p className='text-lg font-bold'>Oliver Aguilerra</p>
								<p className='text-sm text-gray-800'>Product Manager</p>
							</div>
						</div>
					))}
				</div>
			</div>
			<div className='py-10 bg-white sm:py-16 lg:py-24'>
				<div className='mx-auto mb-10 lg:max-w-xl sm:text-center'>
					<p className='inline-block px-3 py-px mb-4 text-4xl font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400'>
						Lorem Team
					</p>
					<p className='text-base text-gray-700 md:text-lg'>
						Sed ut perspiciatis unde omnis iste natus error sit voluptatem
						accusantium doloremque laudantium.
					</p>
				</div>
				<div className='px-4 mx-auto max-w-7xl sm:px-6 lg:px-8'>
					<div className='grid grid-cols-1 gap-6 lg:gap-10 sm:grid-cols-2 md:grid-cols-3'>
						{[1, 2, 3, 4, 5, 6].map(() => (
							<div className='flex flex-col bg-white border border-gray-200 rounded-md'>
								<div className='flex flex-col justify-between flex-1 p-8'>
									<div className='flex-1'>
										<blockquote>
											<p className='text-lg text-gray-800'>
												“You made it so simple. My new site is so much faster
												and easier to work with than my old site. I just choose
												the page, make the change and click save.”
											</p>
										</blockquote>
									</div>

									<div className='mt-8'>
										<div className='w-full h-0 mb-8 border-t-2 border-gray-200 border-dotted'></div>
										<div className='flex items-center'>
											<img
												className='flex-shrink-0 object-cover w-10 h-10 rounded-full'
												src='https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/8/avatar-1.jpg'
												alt=''
											/>
											<div className='ml-3'>
												<p className='text-base font-semibold text-gray-800 truncate'>
													Devon Lane
												</p>
												<p className='text-base text-gray-500 truncate'>
													President of Sales
												</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</>
	);
}
function MoviesContainer() {
	const [videos, setVideos] = useState([]);
	let { Id } = useParams();
	useEffect(() => {
		fetchVideosMovieById();
	}, []);
	const fetchVideosMovieById = async () => {
		const videosData = await axiosConfig.get(
			`/movie/${Id}/videos?api_key=${API_KEY}&language=en-US`,
		);
		setVideos(videosData.data.results);
	};
	return (
		<>
			<iframe
				className='lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded'
				width='560'
				height='315'
				src={`https://www.youtube.com/embed/${
					videos[Math.floor(Math.random() * videos?.length)]?.key
				}`}
				title='YouTube video player'
				frameborder='0'
				allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
				allowfullscreen></iframe>
		</>
	);
}
function ImageContainer() {
	const [images, setImages] = useState([]);
	let { Id } = useParams();
	useEffect(() => {
		fetchImagesMovieById();
	}, []);
	const fetchImagesMovieById = async () => {
		const imagesData = await axiosConfig.get(
			`/movie/${Id}/images?api_key=${API_KEY}`,
		);
		console.log(imagesData.data);
		setImages(imagesData.data.posters);
	};
	return (
		<>
			<img
				alt='ecommerce'
				className='lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded '
				src={`https://image.tmdb.org/t/p/original/${images[Math.floor(Math.random() * images?.length)]?.file_path}`}
			/>
		</>
	);
}
