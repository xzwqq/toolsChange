import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { LoginActions } from '../model/loginSlice.ts';
import { form } from '../type/loginType.ts';
import jam from '../../../shared/svgImage/jam_google.svg';
import { LoadingButton } from '../../../widgets/loader/loader.tsx';
import { RootState } from '../../../app/store/store.ts';
import { HeaderActions } from '../../../widgets/Header/model/headerSlice.ts';

const FormLogin = () => {
	// const location = useLocation();
	// const params = new URLSearchParams(location.search);
	// const hasFetched = useRef(false);
	// const authCode = params.get('code');
	// const stateParam = params.get('state');
	// const navigate = useNavigate;
	const isLoading = useSelector((state: RootState) => state.login.isLoading)
	const dispatch = useDispatch();
	const [formData, setFormData] = useState<form>({
		login: '',
		password: ''
	});

	const handleChange = (e: { target: { name: string; value: string } }) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	const handleSubmit = (e: { preventDefault: () => void }) => {
		e.preventDefault();
		dispatch(LoginActions.setIsLoading());
		dispatch(LoginActions.submit(formData));
	};

	// const loginGoogleLogin = (e: { preventDefault: () => void; }) => {
	// 	e.preventDefault();
	// 	const clientId =
	// 		'516154092590-oohtfj363v391j61f005jjgnbpb9jbb6.apps.googleusercontent.com';
	// 	const redirectUri = 'http://localhost:5174/registration';
	// 	const state = 'a2FsZmZsd2xmd2x3Zmx3ZmFhbGZ3bGZ3YWxmd2Fsd2FmbHdmYWw';
	// 	const scope = 'openid profile email';

	// 	window.location.href = `https://accounts.google.com/o/oauth2/v2/auth?response_type=code&client_id=${clientId}&state=${state}&redirect_uri=${redirectUri}&scope=${scope}`;
	// };

	// useEffect(() => {
	// 	if (authCode && !hasFetched.current) {
	// 		hasFetched.current = true;
	// 		axios
	// 			.post(
	// 				`${import.meta.env.VITE_API_URL}/openid?authCode=${authCode}&state=${stateParam}`
	// 			)
	// 			.then(response => {
	// 				localStorage.setItem('token', response.data);
	// 				console.log('Токен получен:', response.data);
	// 				window.location.href = '/';
	// 			})
	// 			.catch(error => {
	// 				console.error('Ошибка авторизации:', error);
	// 			});
	// 	}
	// }, [authCode, stateParam, navigate]);
	return (
		<>
			<div className='another-login'>
				<a onClick={() => dispatch(HeaderActions.setVisibleLogin(false))} className='close-auth'>
					x
				</a>
				<div className='roots_login'>
					<h2 className='login_h2'>Вход</h2>
					<div className='form-login_root'>
						<form onSubmit={handleSubmit} className='form-login'>
							<input
								className='gmail-input'
								type='email'
								name='login'
								onChange={handleChange}
								value={formData.login}
								required
								placeholder='Почта'
								maxLength={100}
								minLength={3}
							/>
							<input
								className='gmail-input'
								type='password'
								name='password'
								onChange={handleChange}
								value={formData.password}
								required
								placeholder='Пароль'
								maxLength={100}
								minLength={3}
							/>
							<LoadingButton
								defaultText={'Войти'}
								isLoading={isLoading}
								className={'login-btn-input'}
								type={'sumbit'}
							/>
						</form>
						<div className='after-form'>
							<div className='google-form'>
								<p className='google-text'>Или продолжить через:</p>
								<img src={jam} className='logo_google' alt='google-auth' />
							</div>
							<div className='google-form'>
								<p className='google-text'>Нету аккаунта?</p>
								<button
									onClick={() => {
										dispatch(HeaderActions.setVisibleRegister(true))
									}}
									className='redirect-reg'
								>
									Зарегистрироваться
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default FormLogin;
