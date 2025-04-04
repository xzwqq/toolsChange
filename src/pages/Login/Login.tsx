import { history } from '../../app/providers/history';
import { FormLogin } from '../../features/formLogin/index';

const Login = () => {
	return (
		<div className='another-login'>
			<a onClick={()=> history.back()} className='close-auth'>x</a>
			<div className='roots_login'>
				<h2 className='login_h2'>Вход</h2>
				<FormLogin />
			</div>
		</div>
	);
};

export default Login;
