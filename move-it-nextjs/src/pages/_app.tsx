import React from 'react';
import '../styles/global.css';
import { ChallengeContextProvider } from '../contexts/ChallengeContext';

function MyApp({ Component, pageProps }) {
	return (
		<ChallengeContextProvider>
			<Component {...pageProps} />
		</ChallengeContextProvider>
	);
}

export default MyApp;
