import { useParams } from 'react-router-dom';
import cn from './Directory.module.scss';

function Directory() {
	const { id } = useParams();
	return <div className={cn.container}>directory: {id}</div>;
}

export default Directory;
