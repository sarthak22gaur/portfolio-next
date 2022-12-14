import Image from 'next/image';
import { SiLinkedin, SiGithub } from 'react-icons/si';

const About: React.FC = () => {
  return (
    <main
      id="me"
      className="flex flex-col w-full items-center p-2 sm:p-8 min-h-screen"
    >
      <h1 className="text-3xl lg:text-4xl font-light pb-12 w-full text-center text-slate-400">
        A few things about me 😃
      </h1>
      <section className="flex flex-col md:grid md:grid-cols-2 w-full md:flex-row sm:px-8 p-4 gap-4 h-fit justify-evenly md:justify-between items-center max-w-screen-xl">
        <div className="md:col-span-1 w-full h-fit">
          <Image
            src="https://storage.googleapis.com/cp_bucket_test/port_about_illustration.svg"
            alt=""
            width={16}
            height={9}
            layout="responsive"
          />
        </div>
        <div className="md:col-span-1 text-center md:text-right">
          <h1 className="font-light text-gray-400 text-xl mt-8 lg:text-3xl">
            I&apos;m pursuing
            <span className="leading-relaxed font-bold text-primary-dark">
              {' '}
              MSc in Computer Science{' '}
            </span>
            at the
            <span className="leading-relaxed font-bold text-primary-dark">
              {' '}
              University of Texas at Dallas
            </span>
          </h1>
          <p className="text-base text-gray-400 italic pt-12">
            When I&apos;m not building stuff for the web or trying out new tech,
            I indulge myself in one of these 👇🏻
          </p>
          <ul className="my-4 text-base text-gray-400">
            <li>Playing/watching soccer ⚽</li>
            <li>Reading books 📚</li>
          </ul>

          <div className="flex gap-4 justify-center md:justify-end mt-8 text-primary-dark">
            <a
              target="_blank"
              href="https://www.linkedin.com/in/sarthak-gaur-22041998/"
              rel="noopener noreferrer"
              className="cursor-pointer text-white  bg-black p-2 rounded hover:bg-black hover:text-primary-dark hover:-translate-y-1 transition-all"
            >
              <SiLinkedin size="28" />
            </a>

            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/sarthak22gaur"
              className="cursor-pointer text-white  bg-black p-2 rounded hover:bg-black hover:text-primary-dark hover:-translate-y-1 transition-all"
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
