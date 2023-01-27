import React from 'react';

export default function Card({movie}) {
	function addToWatchList(){
		
	}
	return (
		<div className='cursor-pointer rounded-xl  p-3 shadow-lg hover:shadow-xl'>
			<div className='relative flex items-end overflow-hidden rounded-xl'>
				<img
					src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
					alt='wallpaper'
				/>

				<div className='absolute bottom-3 left-3 inline-flex items-center rounded-lg bg-white p-2 shadow-md'>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						className='h-5 w-5 text-yellow-400'
						viewBox='0 0 20 20'
						fill='currentColor'>
						<path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
					</svg>

					<span className='ml-1 text-sm text-slate-400'>{movie?.vote_average}</span>
				</div>
			</div>

			<div className='mt-1 p-2  grid justify-items-center'>
				<h1 className='text-slate-700 text-xl font-semibold'>
					{movie?.original_name||movie?.original_title}
				</h1>
				<button className='group flex rounded-xl border-2 border-yellow-300 text-yellow-300 p-2 hover:text-white hover:bg-yellow-400 mt-3 text-md font-semibold' onClick={()=>{
					addToWatchList(movie)
				}}>
					<p>Add to watchlist</p>
          <div className='mt-1 ml-1'>
          <svg
						xmlns='http://www.w3.org/2000/svg'
						className='h-4 w-4 text-yellow-300 group-hover:text-white'
						viewBox='0 0 20 20'
						fill='currentColor'>
						<path d='M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z' />
					</svg>
          </div>
					
				</button>
				<div className='flex items-end justify-between'>
					<a href='text' className='inline-block mt-6 text-yellow-400 hover:text-yellow-500 border-b'>
						Read More
					</a>
				</div>
			</div>
		</div>
	);
}
