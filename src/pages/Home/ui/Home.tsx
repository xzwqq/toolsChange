import { Container } from '../../../features/container/index.ts';
import { Header } from '../../../widgets/Header/index.ts';

const Home = () => {
	const type = 'all';
	return (
		<div>
			<Header />
			<Container type={type} />
		</div>
	);
};

export default Home;
