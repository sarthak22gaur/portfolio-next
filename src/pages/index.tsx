import type { NextPage } from 'next';
import { useState } from 'react';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Projects from '@/components/sections/Projects';
import Tools from '@/components/sections/Tools';
import Navbar from '../components/Navbar';
import ParticleBg from '@/components/Particles';
import Loader from '@/components/Loader';
import SEO from '@/components/SEO';

export async function getStaticProps() {
  return {
    props: {},
  };
}

const Home: NextPage = () => {
  const [useLoader, setUseLoader] = useState(true);

  const callbackLoader = (flag: boolean) => {
    setUseLoader(flag);
  };

  return (
    <>
      <SEO />
      <ParticleBg />
      {useLoader ? (
        <Loader useLoader={callbackLoader} />
      ) : (
        <>
          <Navbar />
          <Hero />
          <About />
          <Projects />
          <Tools />
        </>
      )}
    </>
  );
};

export default Home;
