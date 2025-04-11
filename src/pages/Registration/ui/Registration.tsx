import FormRegister from '../../../features/formRegister/ui/FormRegister.js';
import { history } from '../../../app/providers/history.js';

const Registration = () => {
	return (
		<div className='another-login'>
			<a onClick={() => history.push('/')} className='close-auth'>x</a>
			<div className='roots_login'>
				<h2 className='login_h2'>Регистрация</h2>
				<FormRegister />
			</div>
		</div>
	);
};

export default Registration;
