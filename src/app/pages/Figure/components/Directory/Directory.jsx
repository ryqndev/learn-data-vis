import { useParams } from 'react-router-dom';
import directory from '../../../../assets/directory.json';
import cn from './Directory.module.scss';

function Directory() {
	const { source, id } = useParams();
	return (
		<div className={cn.container}>
			{directory.sources.map(source => (
				<div>
					{source.author}

					{source.title}
				</div>
			))}
		</div>
	);
}

export default Directory;
