import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';
import { memo, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { MarkdownRenderer } from '../../../../components';
import cn from './CodeDisplay.module.scss';

function CodeDisplay() {
	const { source, id, lang } = useParams();
	const [content, setContent] = useState('');

	function display(file) {
		fetch(file.default)
			.then(res => res.text())
			.then(setContent);
	}
	useEffect(() => {
		if (!source) {
			setContent('Home');
			return;
		}
		if (!id)
			return import('../../../../content/' + source + '/README.md').then(
				display
			);

		if (!lang)
			return import(`../../../../content/${source}/${id}/main.r`).then(
				display
			);

		import(`../../../../content/${source}/${id}/main.r`).then(display);
	}, [source, id, lang]);

	return (
		<div className={cn.container}>
			<article className='md-renderer'>
				<ReactMarkdown
					plugins={[gfm]}
					renderers={{ ...MarkdownRenderer }}
					transformLinkUri={null}
					// transformImageUri={transformImageUri}
				>
					{!source
						? content
						: `${'```r main.r'}
${content}
${'```'}`}
				</ReactMarkdown>
			</article>
		</div>
	);
}

export default memo(CodeDisplay);
