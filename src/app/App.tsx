import { useEffect, Suspense } from 'react';
import {
	unstable_HistoryRouter as HistoryRouter,
	Routes,
	Route
} from 'react-router-dom';
import { toast, ToastContainer, Zoom } from 'react-toastify';
import { useSelector } from 'react-redux';
import Spinner from '../widgets/spinner/Spinner.tsx';
import { RootState } from './store/store.ts';
import { history } from './providers/history.ts';
import { InitHeader } from '../widgets/Header/index.ts';
import { routes } from './providers/route.tsx';

function App() {
	const error = useSelector((state: RootState) => state.helper.errorNetwork);
	const sucsses = useSelector((state: RootState) => state.helper.sucsses);

	useEffect(() => {
		if (error) {
			toast.error(`${error}`);
		}
		if (sucsses) {
			toast(`${sucsses}`);
		}
	}, [error, sucsses]);

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
			<HistoryRouter history={history}>
				<Suspense fallback={<Spinner />}>
					<Routes>
						{Object.values(routes).map((route) => (
							<Route key={route.path} {...route} />
						))}
					</Routes>
				</Suspense>
			</HistoryRouter>
		</>
	);
}

export default App;
