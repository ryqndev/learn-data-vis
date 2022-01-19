import clsx from 'clsx';
import { Children, memo, useState } from 'react';
import { ReactComponent as ExpandMoreIcon } from '../../assets/icons/expand-more.svg';
import cn from './Collapsible.module.scss';

function Collapsible({ children, className, icon, isOpen=false, ...props }) {
	const [open, setOpen] = useState(isOpen);
	const [header, ...content] = Children.toArray(children);

	return (
		<div className={clsx(className, cn.container)} {...props}>
			<div className={cn.header} onClick={() => setOpen(prev => !prev)}>
				{header}
				{icon && (
					<ExpandMoreIcon
						className={clsx(cn.expand, open && cn.open)}
					/>
				)}
			</div>
			{open && icon && (
				<div className={clsx(cn.content, open && cn.open)}>
					{content}
				</div>
			)}
		</div>
	);
}

export default memo(Collapsible);
