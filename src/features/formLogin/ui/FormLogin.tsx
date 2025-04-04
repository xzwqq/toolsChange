import { useState, useRef, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { LoginActions } from '../model/loginSlice.js';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import { history } from '../../../app/providers/history.js';
import { HelperActions } from '../../../utils/helper/helperSlice.js';

const FormLogin = () => {
	const location = useLocation();
	const params = new URLSearchParams(location.search);
	const hasFetched = useRef(false);
	const authCode = params.get('code');
	const stateParam = params.get('state'); // Получаем state
	const navigate = useNavigate;
	const dispatch = useDispatch();
	const [formData, setFormData] = useState({
		login: '',
		password: ''
	});

	const handleChange = e => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	const handleSubmit = e => {
		e.preventDefault();
		dispatch(LoginActions.submit(formData));
	};

	const loginGoogleLogin = e => {
		e.preventDefault();
		const clientId =
			'516154092590-oohtfj363v391j61f005jjgnbpb9jbb6.apps.googleusercontent.com';
		const redirectUri = 'http://localhost:5174/registration';
		const state = 'a2FsZmZsd2xmd2x3Zmx3ZmFhbGZ3bGZ3YWxmd2Fsd2FmbHdmYWw';
		const scope = 'openid profile email';

		window.location.href = `https://accounts.google.com/o/oauth2/v2/auth?response_type=code&client_id=${clientId}&state=${state}&redirect_uri=${redirectUri}&scope=${scope}`;
	};

	useEffect(() => {
		if (authCode && !hasFetched.current) {
			hasFetched.current = true;
			axios
				.post(
					`${import.meta.env.VITE_API_URL}/openid?authCode=${authCode}&state=${stateParam}`
				)
				.then(response => {
					localStorage.setItem('token', response.data);
					console.log('Токен получен:', response.data);
					navigate('/');
				})
				.catch(error => {
					console.error('Ошибка авторизации:', error);
				});
		}
	}, [authCode, stateParam, navigate]);
	useEffect(()=>{
		dispatch(HelperActions.setIsloadingSucsses())
	},[dispatch])
	return (
		<>
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
						maxLength='100'
						minLength='3'
					/>
					<input
						className='gmail-input'
						type='password'
						name='password'
						onChange={handleChange}
						value={formData.password}
						required
						placeholder='Пароль'
						maxLength='100'
						minLength='3'
					/>
					<div className='option_login'>
						<label className='container-check'>
							<input type='checkbox' />
							<span className='checkmark'>запомнить пароль?</span>
						</label>
						<div className='forgot_password'>
							<a>
								<p className='forgot_password_text'>Забыли пароль?</p>
							</a>
						</div>
					</div>
					<button className='login-btn-input' type='submit'>
						Войти
					</button>
				</form>
				<div className='after-form'>
					<div className='google-form'>
						<p className='google-text'>Или продолжить через:</p>
						<img src='../../../../public/svgImage/jam_google.svg' className='logo_google' alt='google-auth' onClick={loginGoogleLogin}/>
					</div>
					<div className='google-form'>
						<p className='google-text'>Нету аккаунта?</p>
						<button onClick={()=> history.push('/registration')} className='redirect-reg'>Зарегистрироваться</button>
					</div>
				</div>
			</div>
		</>
	);
};

export default FormLogin;
