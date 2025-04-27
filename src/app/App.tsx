import React, { useEffect, Suspense } from 'react';
import {
	unstable_HistoryRouter as HistoryRouter,
	Routes,
	Route
} from 'react-router-dom';
import { toast, ToastContainer, Zoom } from 'react-toastify';
import {Home} from '../pages/Home/index.ts';
import {Login} from '../pages/Login/index.ts';
import { useDispatch, useSelector } from 'react-redux';
import {ToolsSend} from '../pages/ToolsSend/index.ts';
import Spinner from '../widgets/spinner/Spinner.tsx';
import { HelperActions } from '../utils/helper/helperSlice.ts';
import { RootState } from './store/store.ts';
import { history } from './providers/history.ts';

const MyProfile = React.lazy(() => import('../pages/MyProfile/index.ts'))
const Edit = React.lazy(() => import('../pages/Edit/index.ts'))
const Rating = React.lazy(() => import('../pages/Rating/index.ts'))
const Advert = React.lazy(() => import('../pages/Advert/index.ts'))
const Registration = React.lazy(() => import('../pages/Registration/index.ts'))

function App() {
	const error = useSelector((state: RootState) => state.helper.errorNetwork);
	const sucsses = useSelector((state: RootState) => state.helper.sucsses);

	// useEffect(() => {
	// 	const unlisten = history.listen(({ location }) => {
	// 		console.log('Новый путь:', location.pathname);
	// 		if(location.pathname === '/login' || location.pathname === '/registration'){
	// 			dispatch(HelperActions.setIsloadingSucsses())
	// 			return
	// 		}else{
	// 			dispatch(HelperActions.reset());
	// 		}
	// 	});

	// 	return () => unlisten();
	// // eslint-disable-next-line react-hooks/exhaustive-deps
	// }, []);

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
			{/* {isLoading && <Spinner />} */}
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
					<Route path='/rating/:id' element={<Rating/>}/>
				</Routes>
				</Suspense>
			</HistoryRouter>
		</>
	);
}

export default App;
