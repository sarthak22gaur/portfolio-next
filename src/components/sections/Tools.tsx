import TechStack from "@/components/TechStack";

const Tools: React.FC = () => {
  return (
    <section
      id="tools"
      className="flex flex-col w-full items-center p-2 sm:p-8 min-h-screen"
    >
      <h1 className="text-3xl lg:text-4xl text-slate-400 font-light pt-12 w-full text-center max-w-screen-xl">
        Tools I Use 🧰
      </h1>
      <TechStack />
    </section>
  );
};

export default Tools;
