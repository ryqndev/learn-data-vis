import { memo } from 'react';
import { Link } from 'react-router-dom';
import cn from './Home.module.scss';

const Home = () => {
	return (
		<div className={cn.container}>
			<Link to="figure/introduction" className={cn.explore}>EXPLORE</Link>
		</div>
	);
};

export default memo(Home);
