import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';

import StdLayout from '../layouts/standard';
import ThemeButton from '../components/themeChange';

const Home = () => {
  return (
    <StdLayout >
      <ThemeButton />
    </StdLayout>
  )
}

export default Home
