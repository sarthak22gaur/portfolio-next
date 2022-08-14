import type { NextPage } from "next";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import Navbar from "../components/Navbar";
import ParticleBg from "@/components/Particles";
import SEO from '@/components/SEO'

export async function getStaticProps() {
  return {
    props: {},
  };
}

const Home: NextPage = () => {
  return (
    <>
      <SEO />
      <ParticleBg />
      <Navbar />
      <Hero />
      <About />
      <Projects />
    </>
  );
};

export default Home;
