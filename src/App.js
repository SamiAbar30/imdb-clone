import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Card from './components/Card';
import NavBar from './components/NavBar';
import Pagination from './components/Pagination';

function App() {
	return (
		<div className='w-full h-screen'>
			<NavBar />
			<Outlet/>
			<ToastContainer />
		</div>
	);
}

export default App;
