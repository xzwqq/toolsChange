import {GoogleOAuthProvider} from '@react-oauth/google'
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './store/store.ts'
import '../shared/styles/main.scss'
import App from './App.tsx';

createRoot(document.getElementById('root')!).render(
			<GoogleOAuthProvider clientId='516154092590-oohtfj363v391j61f005jjgnbpb9jbb6.apps.googleusercontent.com'>
				<Provider store={store}>
					<App />
				</Provider>
			</GoogleOAuthProvider>
);
