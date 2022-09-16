import type { NextPage } from "next";
import { useState } from "react";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import Tools from "@/components/sections/Tools";
import Navbar from "../components/Navbar";
import ParticleBg from "@/components/Particles";
import Loader from "@/components/Loader";
import LoaderStagger from "@/components/LoaderStagger";
import SEO from "@/components/SEO";

export async function getStaticProps() {
  return {
    props: {},
  };
}

const Home: NextPage = () => {
  
  const [useLoader, setUseLoader] = useState(true);
  const [useStaggerLoader, setUseStaggerLoader] = useState(false);

  const callbackLoader = (flag: boolean) => {
    setUseLoader(flag);
    setUseStaggerLoader(true);
    setTimeout(() => {
      setUseStaggerLoader(false);
    }, 3500)
  };

  return (
    <>
      <SEO />
      <ParticleBg />
      {useLoader ? (
        <Loader useLoader={callbackLoader} />
      ) : (useStaggerLoader ? (<LoaderStagger />) : (
        <>
          <Navbar />
          <Hero />
          <About />
          <Projects />
          <Tools />
        </>
      ))}
    </>
  );
};

export default Home;
