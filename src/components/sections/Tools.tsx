import TechStack from "@/components/TechStack";

const Tools: React.FC = () => {
  return (
    <section
      id="tools"
      className="flex min-h-screen w-full flex-col items-center p-2 sm:p-8"
    >
      <h1 className="w-full max-w-screen-xl pt-12 text-center text-3xl font-light text-slate-400 lg:text-4xl">
        Tools I Use 🧰
      </h1>
      <TechStack />
    </section>
  );
};

export default Tools;
