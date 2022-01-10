import { Link } from 'react-router-dom';

const Home = () => {
	return (
		<div>
			<Link to='/figure/2.1'>2.1</Link>
			<br />
			<Link to='/figure/2.3'>2.3</Link>
			<br />

			<Link to='/figure/3.1'>3.1</Link>
			<br />

			<Link to='/figure/5.1'>5.1</Link>
			<br />

			<Link to='/figure/5.4'>5.4</Link>
		</div>
	);
};

export default Home;
