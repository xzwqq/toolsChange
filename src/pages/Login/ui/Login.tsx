import { history } from '../../../app/providers/history.ts';
import { FormLogin } from '../../../features/formLogin/index.ts';

const Login = () => {
	return (
		<div className='another-login'>
			<a onClick={()=> history.push('/')} className='close-auth'>x</a>
			<div className='roots_login'>
				<h2 className='login_h2'>Вход</h2>
				<FormLogin />
			</div>
		</div>
	);
};

export default Login;
