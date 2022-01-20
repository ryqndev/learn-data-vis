import { useEffect, useState, useCallback } from 'react';
import lightTheme from '../../assets/themes/light.json';
import darkTheme from '../../assets/themes/dark.json';

const themeStyles = [lightTheme, darkTheme];
const THEME_SELECT_DEFAULT_VALUE = 1;

const useTheme = () => {
	const [currentTheme, setCurrentTheme] = useState(() =>
		Number(localStorage.getItem('@ryqndev/theme') ?? THEME_SELECT_DEFAULT_VALUE)
	);
	const setTheme = useCallback(value => {
		localStorage.setItem('@ryqndev/theme', value);

		let styles = themeStyles[value];
		for (let style in styles) {
			document.documentElement.style.setProperty(style, styles[style]);
		}
	}, []);

	useEffect(() => {
		setTheme(currentTheme);
	}, [currentTheme, setTheme]);

	return {
        currentTheme,
		setCurrentTheme,
	};
};

export default useTheme;
