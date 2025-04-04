import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import {GoogleOAuthProvider} from '@react-oauth/google'
import store from './store/store.ts'
import App from './App.tsx';

createRoot(document.getElementById('root')!).render(
	<StrictMode>
			<GoogleOAuthProvider clientId='516154092590-oohtfj363v391j61f005jjgnbpb9jbb6.apps.googleusercontent.com'>
				<Provider store={store}>
					<App />
				</Provider>
			</GoogleOAuthProvider>
	</StrictMode>
);
