import type { NextPage } from "next";
import Link from "next/link";
import Image from "next/image";

import { ProjectCard } from "@/components/ProjectCard";

import homeillustration from "@/assets/homeillustration.svg";

const Projects: NextPage = () => {
  return (
    <>
      <main className="flex w-full justify-center p-8 min-h-screen">
        <section className="flex flex-col w-full sm:p-8 gap-4 justify-evenly md:justify-between items-center max-w-[80vw] ">
          <h1 className="border-primary-dark border-b-2 mb-8  rounded-md p-4 font-bold text-3xl lg:text-4xl">
            A few things I&apos;ve built
          </h1>

          <div className="text-white m-4 mt-8 p-4 flex flex-wrap gap-8 justify-center items-start ">
            <ProjectCard
              Title="Launching Soon"
              Description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur perspiciatis a harum voluptas soluta autem cumque alias quasi vitae?"
              Livelink="skgr.xyz"
              Repolink="github.com"
              ImageURL=""
              Tech={["Nodejs", "Nextjs", "Firebase", "Planetscale"]}
            />
            <ProjectCard
              Title="Launching Soon"
              Description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur perspiciatis a harum voluptas soluta autem cumque alias quasi vitae?Pariatur perspiciatis a harum voluptas soluta autem cumque alias quasi vitae? Pariatur perspiciatis a harum voluptas soluta autem cumque alias quasi vitae?"
              Livelink="/"
              Repolink="/"
              ImageURL=""
              Tech={["Nodejs", "Nextjs", "Firebase", "Planetscale"]}
            />
          </div>
        </section>
      </main>
    </>
  );
};

export default Projects;
