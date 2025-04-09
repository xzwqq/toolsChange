import { FormToolsSend } from '../../features/formToolsSend/index.ts';
import { InitHeader } from '../../widgets/Header/index.ts';
const ToolsSend = () => {
	return (
		<div className='tools_root'>
			<InitHeader />
			<FormToolsSend />
		</div>
	);
};

export default ToolsSend;
