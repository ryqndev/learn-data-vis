import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home, Figure } from './pages';

function App() {
	return (
		<Router>
			<Routes>
				<Route index element={<Home />} />
				<Route path='figure' element={<Figure />}>
					<Route path=':id' element={<Figure />} />
				</Route>
			</Routes>
		</Router>
	);
}

export default App;
