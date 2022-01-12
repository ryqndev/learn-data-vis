import { memo } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
	return (
		<div>
			<Link to='/figure/2.1'>2.1</Link>
		</div>
	);
};

export default memo(Home);
