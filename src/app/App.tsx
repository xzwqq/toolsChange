import {
	unstable_HistoryRouter as HistoryRouter,
	Routes,
	Route
} from 'react-router-dom';
import Registration from '../pages/Registration/Registration.tsx';
import Home from '../pages/Home/Home.tsx';
import Login from '../pages/Login/Login.tsx';
import MyProfile from '../pages/MyProfile/MyProfile.tsx';
import { EditContainer } from '../features/editContainer/index.ts';
import { useDispatch, useSelector } from 'react-redux';
import ToolsSend from '../pages/ToolsSend/ToolsSend.tsx';
import Spinner from '../widgets/spinner/Spinner.tsx';
import { useEffect } from 'react';
import { HelperActions } from '../utils/helper/helperSlice.ts';
import { RootState } from './store/store.ts';
import { history } from './providers/history.ts';

function App() {
	const dispatch = useDispatch();
	const isLoading = useSelector((state: RootState) => state.helper.isLoading);

	useEffect(() => {
		const unlisten = history.listen(({ location }) => {
			console.log('Новый путь:', location.pathname);
			dispatch(HelperActions.reset());
		});

		return () => unlisten();
	}, [dispatch]);

	return (
		<>
			{isLoading && <Spinner />}
			<HistoryRouter history={history}>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/registration' element={<Registration />} />
					<Route path='/login' element={<Login />} />
					<Route path='/my' element={<MyProfile />} />
					<Route path='/toolsend' element={<ToolsSend />} />
					<Route path='/edit/:id' element={<EditContainer />} />
				</Routes>
			</HistoryRouter>
		</>
	);
}

export default App;