import { memo } from 'react';
import { CodeDisplay, Directory, GeneratedFigure } from './components';
import cn from './Figure.module.scss';

function Figure() {
	return (
		<main className={cn.container}>
			<Directory />
			<CodeDisplay />
			<GeneratedFigure />
		</main>
	);
}

export default memo(Figure);
