import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './store/store.ts';
import '../shared/styles/main.scss';
import App from './App.tsx';
import { BrowserRouter } from 'react-router';
import { StrictMode } from 'react';

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<BrowserRouter>
			<Provider store={store}>
				<App />
			</Provider>
		</BrowserRouter>
	</StrictMode>
);
