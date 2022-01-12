import { memo } from 'react';
import { Link } from 'react-router-dom';
import Toggle from 'react-toggle';
import { ReactComponent as Logo } from '../../assets/icons/light-logo.svg';
import cn from './Navbar.module.scss';

function Navbar() {
	return (
		<nav className={cn.container}>
			<Link to='/'>
				<Logo className={cn.logo} />
			</Link>
			<Link to='/' className={cn.name}>
				Data Vis Cheatsheet
			</Link>
			<label className={cn.toggle}>
				<Toggle
					// checked={theme === 1}
					icons={false}
					// onChange={() => {
					// 	setTheme(theme === 1 ? 0 : 1);
					// }}
				/>
			</label>
		</nav>
	);
}

export default memo(Navbar);
