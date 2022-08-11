import type { NextPage } from "next";
import Head from "next/head";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import Navbar from "../components/Navbar";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Sarthak Gaur</title>
        <meta name="description" content="A personal portfolio built with Next.js and tailwind" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Hero />
      <Projects />
      <About />
    </>
  );
};

export default Home;
