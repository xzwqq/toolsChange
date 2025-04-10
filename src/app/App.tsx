import {
	unstable_HistoryRouter as HistoryRouter,
	Routes,
	Route
} from 'react-router-dom';
import { toast, ToastContainer, Zoom } from 'react-toastify';
import {Registration} from '../pages/Registration/index.ts';
import {Home} from '../pages/Home/index.ts';
import {Login} from '../pages/Login/index.ts';
import {MyProfile} from '../pages/MyProfile/index.ts';
import { useDispatch, useSelector } from 'react-redux';
import {ToolsSend} from '../pages/ToolsSend/index.ts';
import Spinner from '../widgets/spinner/Spinner.tsx';
import { useEffect } from 'react';
import { HelperActions } from '../utils/helper/helperSlice.ts';
import { RootState } from './store/store.ts';
import { history } from './providers/history.ts';
import {Edit} from '../pages/Edit/index.ts';
import {Rating} from '../pages/Rating/index.ts';
import { Advert } from '../pages/Advert/index.ts';

function App() {
	const dispatch = useDispatch();
	const isLoading = useSelector((state: RootState) => state.helper.isLoading);
	const error = useSelector((state: RootState) => state.helper.errorNetwork);
	const sucsses = useSelector((state: RootState) => state.helper.sucsses);
	

	useEffect(() => {
		const unlisten = history.listen(({ location }) => {
			console.log('Новый путь:', location.pathname);
			if(location.pathname === '/login' || location.pathname === '/registration'){
				dispatch(HelperActions.setIsloadingSucsses())
				return
			}else{
				dispatch(HelperActions.reset());
			}
		});

		return () => unlisten();
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

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
			{isLoading && <Spinner />}
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
			</HistoryRouter>
		</>
	);
}

export default App;
