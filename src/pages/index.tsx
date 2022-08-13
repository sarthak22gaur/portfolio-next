import type { NextPage } from "next";
import Head from "next/head";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import Navbar from "../components/Navbar";
import ParticleBg from "@/components/Particles";

export async function getStaticProps() {
  return {
    props: {},
  };
}

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Sarthak Gaur</title>
        <meta
          name="description"
          content="A personal portfolio built with Next.js and tailwind"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <ParticleBg />
      <Navbar />
      <Hero />
      <About />
      <Projects />
    </>
  );
};

export default Home;
