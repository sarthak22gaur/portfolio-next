import Image from "next/image";
import { SiLinkedin, SiGithub } from "react-icons/si";

const About: React.FC = () => {
  return (
    <main
      id="me"
      className="flex min-h-screen w-full flex-col items-center p-2 sm:p-8"
    >
      <h1 className="w-full pb-12 text-center text-3xl font-light text-slate-400 lg:text-4xl">
        A few things about me
      </h1>
      <section className="flex h-fit w-full max-w-screen-xl flex-col items-center justify-evenly gap-4 p-4 sm:px-8 md:grid md:grid-cols-2 md:flex-row md:justify-between">
        <div className="h-fit w-full md:col-span-1">
          <Image
            src="https://storage.googleapis.com/cp_bucket_test/port_about_illustration.svg"
            alt=""
            width={16}
            height={9}
            layout="responsive"
          />
        </div>
        <div className="text-center md:col-span-1 md:text-right">
          <h1 className="mt-8 text-xl font-light text-gray-400 lg:text-3xl">
            I&apos;m pursuing
            <span className="font-bold leading-relaxed text-primary-dark">
              {" "}
              MSc in Computer Science{" "}
            </span>
            at the
            <span className="font-bold leading-relaxed text-primary-dark">
              {" "}
              University of Texas at Dallas
            </span>
          </h1>
          <p className="pt-12 text-base italic text-gray-400">
            When I&apos;m not building stuff for the web or trying out new tech,
            I indulge myself in one of these 👇🏻
          </p>
          <ul className="my-4 text-base text-gray-400">
            <li>Playing/watching soccer ⚽</li>
            <li>Reading books 📚</li>
          </ul>

          <div className="mt-8 flex justify-center gap-4 text-primary-dark md:justify-end">
            <a
              target="_blank"
              href="https://www.linkedin.com/in/sarthak-gaur-22041998/"
              rel="noopener noreferrer"
              className="cursor-pointer rounded  bg-black p-2 text-white transition-all hover:-translate-y-1 hover:bg-black hover:text-primary-dark"
            >
              <SiLinkedin size="28" />
            </a>

            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/sarthak22gaur"
              className="cursor-pointer rounded  bg-black p-2 text-white transition-all hover:-translate-y-1 hover:bg-black hover:text-primary-dark"
            >
              <SiGithub size="28" />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
