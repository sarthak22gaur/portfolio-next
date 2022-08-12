import type { NextPage } from "next";
import Link from "next/link";
import Image from "next/image";

import { SiLinkedin, SiGithub } from "react-icons/si";
import soccer from "@/assets/soccer.svg";

import TechStack from "@/components/TechStack";

const About: NextPage = () => {
  return (
    <>
      <main className="flex flex-col w-full items-center p-2 sm:p-8 min-h-screen">
        <h1 className="text-2xl font-light w-full text-center">
          A FEW THINGS ABOUT ME 😃
        </h1>
        <section className="flex flex-col w-full md:flex-row p-4 sm:p-8 gap-4 h-fit justify-evenly md:justify-between items-center max-w-[80vw] ">
          <div className="md:w-1/2">
            <Image src={soccer} alt="" />
          </div>
          <div className="md:w-1/2 text-center md:text-right">
            <h1 id="home" className="font-light text-xl mt-8 lg:text-3xl">
              I&apos;m pursuing
              <span className="leading-relaxed font-bold text-primary-dark">
                {" "}
                MSc in Computer Science{" "}
              </span>
              at the
              <span className="leading-relaxed font-bold text-primary-dark">
                {" "}
                University of Texas at Dallas
              </span>
            </h1>
            <p className="text-base text-gray-500 italic pt-12">
              When I&apos;m not building stuff for the web or trying out new
              tech, I indulge myself in one of these 👇🏻
            </p>
            <ul className="my-4 text-base text-gray-500">
              <li>Playing/watching soccer ⚽</li>
              <li>Reading books 📚</li>
            </ul>

            <div className="flex gap-4 justify-center md:justify-end mt-8 text-primary-dark">
              <Link href="/">
                <a className="cursor-pointer text-white  bg-black p-2 rounded hover:bg-black hover:text-primary-dark hover:-translate-y-1 transition-all">
                  <SiLinkedin size="28" />
                </a>
              </Link>
              <Link href="/">
                <a className="cursor-pointer text-white  bg-black p-2 rounded hover:bg-black hover:text-primary-dark hover:-translate-y-1 transition-all">
                  <SiGithub size="28" />
                </a>
              </Link>
            </div>
          </div>
        </section>
        <h1 className="text-2xl font-light w-full text-center">
          Tools I Use 🧰
        </h1>
        <TechStack />
      </main>
    </>
  );
};

export default About;
