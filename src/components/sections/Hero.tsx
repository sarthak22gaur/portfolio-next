import type { NextPage } from "next";
import Link from "next/link";
import Image from "next/image";



const Hero: NextPage = () => {
  return (
    <>
      <main className="flex w-full justify-center items-center p-8 min-h-screen">
        <section className="flex flex-col md:grid md:grid-cols-2 w-full max-w-screen-xl md:flex-row sm:p-8 gap-16 justify-evenly md:justify-between items-center">
          <div className="text-center md:col-span-1 md:text-left">
            <h3 className="text-2xl text-slate-400">
              Hello there! 🙋🏻‍♂️ I&apos;m
            </h3>
            <h1 className="text-primary-dark font-semibold text-4xl mt-4 md:text-5xl lg:text-6xl xl:text-7xl">
              Sarthak Gaur
            </h1>
            <p className="text-xl italic mt-4 text-slate-400">
              and i build experiences for the web.
            </p>
          </div>
          <div className="md:col-span-1 w-full h-fit">
            <Image
              src="https://storage.googleapis.com/cp_bucket_test/port_hero_illustration.svg"
              alt=""
              width={16}
              height={9}
              layout='responsive'
            />
          </div>
        </section>
      </main>
    </>
  );
};

export default Hero;
