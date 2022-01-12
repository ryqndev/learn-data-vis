import { memo, useState } from 'react';
import { Link } from 'react-router-dom';
import { Collapsible } from '../../../../components';
import directory from '../../../../assets/directory.json';
import cn from './Directory.module.scss';
import clsx from 'clsx';

function Directory() {
	const [selected, setSelected] = useState(null);

	return (
		<div className={cn.container}>
			{directory.sources.map((source, index) => (
				<Collapsible
					key={index}
					className={clsx(
						cn.source,
						selected === index && cn.selected
					)}
					icon={!!Object.keys(source.figures).length}
					onClick={() => setSelected(index)}
				>
					<Link to={source.path} className={cn.header}>
						<h2>{source.title}</h2>
					</Link>
					<ul>
						{Object.keys(source.figures).map(id => (
							<Link to={source.path + '/' + id} key={id}>
								<li key={id} className={cn.item}>
									{source.figures[id].name}
								</li>
							</Link>
						))}
					</ul>
				</Collapsible>
			))}
		</div>
	);
}

export default memo(Directory);
