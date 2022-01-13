import { memo, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import cn from './GeneratedFigure.module.scss';

function GeneratedFigure() {
	const { source, id, lang } = useParams();
	const [content, setContent] = useState('');

	function display(file) {
		fetch(file.default)
			.then(res => res.text())
			.then(setContent);
	}

	useEffect(() => {
		if (!source || !id) return setContent('Click an item');
		switch (lang) {
			case 'js':
				break;
			case 'R':
			default:
				import(`../../../../content/${source}/${id}/chart.png`).then(
					file => {
						setContent(<img alt='chart' src={file.default} />);
					}
				);
		}
	}, [source, id, lang]);
	return (
		<div className={cn.container}>
			<div className={cn.content}>
				{source && !id && (
					<>
						<h1>learn.ryqn.dev</h1>
						<span>[ SELECT A FIGURE TO VIEW ]</span>
					</>
				)}
				{id && (
					<>
						<h1>output:</h1>
						{content}
					</>
				)}
			</div>
		</div>
	);
}

export default memo(GeneratedFigure);
