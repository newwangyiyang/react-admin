import Loadable from 'react-loadable';
import LoadingComponent from './loading-component';

export default (loader: any, loading: any = LoadingComponent) => {
	return Loadable({
		loader,
		loading
	});
};
