import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';
import { memo, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { MarkdownRenderer } from '../../../../components';
import cn from './CodeDisplay.module.scss';

function CodeDisplay() {
	const { source, id, lang } = useParams();
	const [sourceCode, setSourceCode] = useState('');
	const [description, setDescription] = useState('');

	function displayCode(file, type) {
		fetch(file.default)
			.then(res => res.text())
			.then(code => {
				switch (type) {
					case 'js':
					case 'R':
					case 'r':
					default:
						setSourceCode('```r main.R\n' + code + '\n```');
				}
			});
	}

	function display(file) {
		fetch(file.default)
			.then(res => res.text())
			.then(setDescription);
	}

	useEffect(() => {
		if (!source) {
			setSourceCode('Home');
		}
		if (!id) {
			setSourceCode('');
			import(`../../../../content/${source}/README.md`).then(display);
			return;
		}

		if (!lang) {
			// import(`${path}${id}/main.R`).then((r) => displayCode(r, 'R'));
			import(`../../../../content/${source}/${id}/main.R`).then(r =>
				displayCode(r, 'R')
			);
		} else {
			import(`../../../../content/${source}/${id}/main.R`).then(r =>
				displayCode(r, 'R')
			);
		}
		import(`../../../../content/${source}/${id}/README.md`).then(display);
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
					{description + '\n' + sourceCode}
				</ReactMarkdown>
			</article>
		</div>
	);
}

export default memo(CodeDisplay);
