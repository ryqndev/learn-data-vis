import { memo } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { DirectoryContext, ThemeContext } from './controllers';

function AppWrapper({ children }) {
	return (
		<ThemeContext.Provider value={true}>
			<DirectoryContext.Provider value={true}>
				<Router>{children}</Router>
			</DirectoryContext.Provider>
		</ThemeContext.Provider>
	);
}

export default memo(AppWrapper);
