import React, { useEffect, Suspense } from 'react';
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
const Home = React.lazy(() => import('../pages/Home/index.ts'));
const ToolsSend = React.lazy(() => import('../pages/ToolsSend/index.ts'));
const Login = React.lazy(() => import('../pages/Login/index.ts'));
const MyProfile = React.lazy(() => import('../pages/MyProfile/index.ts'));
const Edit = React.lazy(() => import('../pages/Edit/index.ts'));
const Rating = React.lazy(() => import('../pages/Rating/index.ts'));
const Advert = React.lazy(() => import('../pages/Advert/index.ts'));
const Registration = React.lazy(() => import('../pages/Registration/index.ts'));

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
			<HistoryRouter history={history}>
				<Suspense fallback={<Spinner />}>
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='/registration' element={<Registration />} />
						<Route path='/login' element={<Login />} />
						<Route path='/my' element={<MyProfile />} />
						<Route path='/toolsend' element={<ToolsSend />} />
						<Route path='/advert/:id' element={<Advert />} />
						<Route path='/edit/:id' element={<Edit />} />
						<Route path='/rating/:id' element={<Rating />} />
					</Routes>
				</Suspense>
			</HistoryRouter>
		</>
	);
}

export default App;
