import clsx from 'clsx';
import { memo } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Collapsible } from '../../../../components';
import directory from '../../../../assets/directory.json';
import cn from './Directory.module.scss';

function Directory() {
	const { source } = useParams();

	return (
		<div className={cn.container}>
			{directory.sources.map(({ path, figures, title }, index) => (
				<Collapsible
					key={index}
					className={clsx(
						cn.source,
						source === path && cn.selected
					)}
					isOpen={source === path}
					icon={!!Object.keys(figures).length}
				>
					<Link to={path} className={cn.header}>
						<h2>{title}</h2>
					</Link>
					<div>
						<hr />
						<ul>
							{Object.keys(figures).map(id => (
								<Link to={path + '/' + id} key={id}>
									<li key={id} className={cn.item}>
										{figures[id].name}
									</li>
								</Link>
							))}
						</ul>
					</div>
				</Collapsible>
			))}
		</div>
	);
}

export default memo(Directory);
