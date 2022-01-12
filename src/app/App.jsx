import { memo } from 'react';
import { Routes, Route } from 'react-router-dom';
import AppWrapper from './AppWrapper.jsx';
import { Navbar } from './components';
import { Home, Figure } from './pages';
import './styles/main.scss';

const App = () => (
	<AppWrapper>
		<Navbar />
		<Routes>
			<Route index element={<Home />} />
			<Route path='figure' element={<Figure />}>
				<Route path=':source' element={<Figure />}>
					<Route path=':id' element={<Figure />}>
						<Route path=':lang' element={<Figure />} />
					</Route>
				</Route>
			</Route>
		</Routes>
	</AppWrapper>
);

export default memo(App);
