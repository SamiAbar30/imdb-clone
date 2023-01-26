import React, { useEffect, useState } from 'react';
import ImdbLogo from '../../assets/images/Imdb-logo.png';
export default function NavBar() {
	const [filterDisplay, setFilterDisplay] = useState(false);
	return (
		<div
			className={` w-full ${
				filterDisplay ? 'h-52 pt-5 mb-20' : 'h-20 items-center'
			} bg-black  transition-all duration-1000`}>
			<div className='flex pt-5 justify-around'>
				<img src={ImdbLogo} alt='logo' className='hidden sm:h-10 sm:inline' />
				<div className='flex h-10'>
					<span
						className='rounded-l-lg bg-yellow-300 p-2'
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
					/>
					<span className='rounded-r-full bg-yellow-300 p-2'>
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
				<div>
					<button className='px-4 py-2 text-white border-2 border-yellow-300 rounded-lg '>
						<p className='hidden sm:inline'>watchlist</p>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							className='h-4 w-4 text-yellow-300 group-hover:text-white sm:hidden'
							viewBox='0 0 20 20'
							fill='currentColor'>
							<path d='M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z' />
						</svg>
					</button>
				</div>
			</div>
			{filterDisplay && (
				<div className='h-20 m-5 rounded-lg'>
					<div class='bg-white p-6 rounded-xl shadow-lg'>
						<div class='grid grid-cols-3 gap-6'>
							<div class='flex flex-col'>
								<label for='status' class='font-medium text-sm text-stone-600'>
									Genre (s)
								</label>

								<select
									id='status'
									class='mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-300 focus:ring focus:ring-orange-200 focus:ring-opacity-50'>
									<option>Active</option>
									<option>Pending</option>
									<option>Deleted</option>
								</select>
							</div>
							<div class='flex flex-col'>
								<label for='status' class='font-medium text-sm text-stone-600'>
									Rating
								</label>

								<select
									id='status'
									class='mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-300 focus:ring focus:ring-orange-200 focus:ring-opacity-50'>
									<option>5 Stars</option>
									<option>4 Stars</option>
									<option>3 Stars</option>
									<option>2 Stars</option>
									<option>1 Stars</option>
								</select>
							</div>

							<div class='flex flex-col'>
								<label for='status' class='font-medium text-sm text-stone-600'>
									Language
								</label>

								<select
									id='status'
									class='mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-300 focus:ring focus:ring-orange-200 focus:ring-opacity-50'>
									<option>English</option>
									<option>Arabic</option>
									<option>Franch</option>
								</select>
							</div>
						</div>

						<div class='grid md:flex grid-cols-2 justify-end space-x-4 w-full mt-6'>
							<button class='px-4 py-2 rounded-lg text-stone-50 bg-stone-400 hover:bg-stone-500 font-bold text-white shadow-lg shadow-stone-200 transition ease-in-out duration-200 translate-10'>
								Reset
							</button>

							<button class='px-4 py-2 rounded-lg text-white bg-yellow-300 hover:bg-yellow-400 font-bold text-white shadow-lg shadow-yellow-200 transition ease-in-out duration-200 translate-10'>
								Apply Filters
							</button>
						</div>
					</div>
				</div>
			)}
		</div>
	);
}
