import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components';
import { Home, Figure } from './pages';
import './styles/main.scss';

function App() {
	return (
		<Router>
			<Navbar />
			<Routes>
				<Route index element={<Home />} />
				<Route path='figure' element={<Figure />}>
					<Route path=':source' element={<Figure />}>
						<Route path=':id' element={<Figure />} />
					</Route>
				</Route>
			</Routes>
		</Router>
	);
}

export default App;
