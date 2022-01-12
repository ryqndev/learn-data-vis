import { memo } from 'react';
import { useParams } from 'react-router-dom';
import cn from './GeneratedFigure.module.scss';

function GeneratedFigure() {
	const { source, id, lang } = useParams();
	return (
		<div className={cn.container}>

		</div>
	);
}

export default memo(GeneratedFigure);
