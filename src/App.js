import { Outlet } from 'react-router-dom';
import Card from './components/Card';
import NavBar from './components/NavBar';
import Pagination from './components/Pagination';

function App() {
	return (
		<div className='w-full h-screen'>
			<NavBar />
			<Outlet/>
		</div>
	);
}

export default App;
