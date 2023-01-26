import React from 'react';
import Card from '../../components/Card';
import NavBar from '../../components/NavBar';
import Pagination from '../../components/Pagination';

export default function Home() {
	return (
		<>
			<CardsSection dataCards={[1, 2, 3, 4]} />
			<CardsSection dataCards={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]} />
		</>
	);
}

function CardsSection({ dataCards }) {
	return (
		<div className='p-5 z-10'>
			<h2 className='text-2xl font-extrabold tracking-tight text-gray-900 pl-5 border-b p-5'>
				Latest Movies
			</h2>
			<div class='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6'>
				{dataCards.map(() => (
					<Card />
				))}
			</div>
			<Pagination />
		</div>
	);
}
