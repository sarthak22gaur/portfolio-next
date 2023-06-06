import Stagger from "@/components/Stagger";

const Hero: React.FC = () => {
  return (
    <>
      <main className="flex min-h-screen w-full items-center justify-center p-8">
        <section className="flex w-full max-w-screen-xl flex-col items-center justify-evenly gap-2 md:grid md:grid-cols-2 md:flex-row md:justify-between">
          <div className="p-2 text-center md:col-span-1 md:text-left">
            <h3 className="text-xl text-slate-400">Hello there! 🙋🏻‍♂️ I&apos;m</h3>
            <h1 className="mt-4 text-4xl font-semibold text-primary-dark lg:text-5xl xl:text-6xl">
              Sarthak Gaur
            </h1>
            <p className="mt-4 text-xl italic text-slate-400">
              and i build experiences for the web.
            </p>
          </div>
          <div className="h-full w-full md:col-span-1">
            <Stagger />
          </div>
        </section>
      </main>
    </>
  );
};

export default Hero;
