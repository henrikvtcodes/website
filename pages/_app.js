import { useRouter } from 'next/router';
import { useEffect } from 'react';

import '../styles/globals.css'
import { analytics } from '@lib/firebase.js';


const MyApp = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default MyApp