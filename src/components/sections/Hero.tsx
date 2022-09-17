import Stagger from '@/components/Stagger';

const Hero: React.FC = () => {
  return (
    <>
      <main className="flex w-full justify-center items-center p-8 min-h-screen">
        <section className="flex flex-col gap-2 md:grid md:grid-cols-2 w-full max-w-screen-xl md:flex-row justify-evenly md:justify-between items-center">
          <div className="p-2 text-center md:col-span-1 md:text-left">
            <h3 className="text-xl text-slate-400">Hello there! 🙋🏻‍♂️ I&apos;m</h3>
            <h1 className="text-primary-dark font-semibold text-4xl mt-4 lg:text-5xl xl:text-6xl">
              Sarthak Gaur
            </h1>
            <p className="text-xl italic mt-4 text-slate-400">
              and i build experiences for the web.
            </p>
          </div>
          <div className="md:col-span-1 w-full h-full">
            <Stagger />
          </div>
        </section>
      </main>
    </>
  );
};

export default Hero;
