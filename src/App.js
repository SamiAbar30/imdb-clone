import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import NavBar from './components/NavBar';

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
