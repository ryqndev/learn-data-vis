import { memo } from 'react';
import { Link } from 'react-router-dom';
import Toggle from 'react-toggle';
import { ReactComponent as Logo } from '../../assets/icons/light-logo.svg';
import { useTheme } from '../../controllers';
import cn from './Navbar.module.scss';

function Navbar() {
	const { currentTheme, setCurrentTheme } = useTheme();

	return (
		<nav className={cn.container}>
			<Link to='/'>
				<Logo className={cn.logo} />
			</Link>
			<Link to='/' className={cn.name}>
				learn.ryqn.dev
			</Link>
			<label className={cn.toggle}>
				<Toggle
					checked={!!currentTheme}
					icons={false}
					onChange={() => {
						setCurrentTheme(prevTheme => (prevTheme + 1) % 2);
					}}
				/>
			</label>
		</nav>
	);
}

export default memo(Navbar);
