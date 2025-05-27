import { useEffect, Suspense } from 'react';
import {
	Routes,
	Route,
	useNavigate
} from 'react-router';
import { toast, ToastContainer, Zoom } from 'react-toastify';
import { useSelector } from 'react-redux';
import Spinner from '../widgets/spinner/Spinner.tsx';
import { RootState } from './store/store.ts';
import { InitHeader } from '../widgets/Header/index.ts';
import { routes } from './providers/route.tsx';
import { setNavigator } from '../utils/helper/navigationService.ts';

function App() {
	const navigate = useNavigate();
	const numSuccses = useSelector((state: RootState) => state.helper.numSuccses);
	const numError = useSelector((state: RootState) => state.helper.numError);
	const sucsses = useSelector((state: RootState) => state.helper.sucsses);
	const error = useSelector((state: RootState) => state.helper.errorNetwork);

	useEffect(() => {
    setNavigator(navigate);
  }, []);

	useEffect(() => {
		if (sucsses) {
			toast(`${sucsses}`);
		}
	}, [numSuccses]);
	useEffect(() => {
		if (error) {
			toast.error(`${error}`);
		}
	}, [numError]);

	return (
		<>
			<ToastContainer
				position='top-right'
				autoClose={5000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick={false}
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
				theme='light'
				transition={Zoom}
			/>
			<InitHeader/>
				<Suspense fallback={<Spinner />}>
					<Routes>
						{Object.values(routes).map((route, index) => (
							<Route key={index} {...route} />
						))}
					</Routes>
				</Suspense>
		</>
	);
}

export default App;
