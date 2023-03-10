import {
	ArrowLongLeftIcon,
	ArrowLongRightIcon,
} from '@heroicons/react/24/solid';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { pageNumbre } from '../../features/pagination/paginationSlice';

export default function Pagination({hidden}) {
	const [page, setPage] = useState(1);
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(pageNumbre(page))
	}, [page])
	
	return (
		<nav className={`border-t border-gray-200 px-5 flex items-center justify-between sm:px-0  pb-5 ${hidden&&'hidden'}`}>
			<div className='-mt-px w-0 flex-1 flex'>
				<a
					href='a'
					className='border-t-2 border-transparent pt-4 pr-1 inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300'>
					<ArrowLongLeftIcon
						className='mr-3 h-5 w-5 text-gray-400'
						aria-hidden='true'
					/>
					Previous
				</a>
			</div>
			<div className='hidden md:-mt-px md:flex'>
				{[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((index) => (
					<button
						onClick={() => {
							setPage(index);
						}}
						key={index}
						className={`${
							index !== page
								? 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
								: 'border-yellow-300 text-yellow-300'
						} border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium`}>
						{index}
					</button>
				))}
				<span className='border-transparent text-gray-500 border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium'>
					...
				</span>
			</div>
			<div className='-mt-px w-0 flex-1 flex justify-end'>
				<a
					href='a'
					className='border-t-2 border-transparent pt-4 pl-1 inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300'>
					Next
					<ArrowLongRightIcon
						className='ml-3 h-5 w-5 text-gray-400'
						aria-hidden='true'
					/>
				</a>
			</div>
		</nav>
	);
}
