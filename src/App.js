import ImdbLogo from "./assets/images/Imdb-logo.png"
function App() {
	return (
		<div className='w-full h-screen'>
			<div className='flex items-center justify-around w-full h-20 bg-black'>
				<div className="">
					<img src={ImdbLogo} alt='logo' className="h-10"/>
				</div>
				<div className=''>
					<input type='text' className='p-2 rounded-lg' />
					<span className='rounded-lg bg-yellow-300'></span>
				</div>
				<div>
					<button className='px-4 py-2 text-white border-2 border-yellow-300 rounded-lg '>
						watchlist
					</button>
				</div>
			</div>
		</div>
	);
}

export default App;
