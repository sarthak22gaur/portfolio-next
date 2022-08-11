import type { NextPage } from "next";
import Link from "next/link";
import Image from "next/image";

import homeillustration from "@/assets/homeillustration.svg";

const Hero: NextPage = () => {
  return (
    <>
      <main className="flex w-full justify-center p-8 min-h-screen">
        <section className="flex flex-col w-full md:flex-row sm:p-8 gap-4 justify-evenly md:justify-between items-center max-w-[80vw] ">
          <div className="text-center md:text-left">
            <h3 className="text-2xl">Hello! my name is</h3>
            <h1 className="text-primary-dark font-semibold text-4xl mt-4 md:text-5xl lg:text-6xl xl:text-7xl">
              Sarthak Gaur
            </h1>
            <p className="text-xl italic mt-4">
              and i build experiences for the web.
            </p>
          </div>
          <Image
          
            src={homeillustration}
            alt=""
          />
        </section>
      </main>
    </>
  );
};

export default Hero;
