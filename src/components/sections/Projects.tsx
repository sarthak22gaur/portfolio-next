import type { NextPage } from "next";
import Link from "next/link";
import Image from "next/image";

import { ProjectCard } from "@/components/ProjectCard";

import homeillustration from "@/assets/homeillustration.svg";

const Projects: NextPage = () => {
  return (
    <>
      <article className="flex flex-col items-center p-8 min-h-screen">
        <h1 className="border-primary-dark border-b-2 mb-8 p-4 font-bold text-3xl lg:text-4xl">
          A few things I&apos;ve built
        </h1>
        <main className="grid auto-rows-fr min-h-[65vh] p-4 gap-24 max-w-[70vw] ">
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
            Description=" Pariatur perspiciatis a harum voluptas soluta autem cumque alias quasi vitae?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur perspiciatis a harum voluptas soluta autem cumque alias quasi vitae?adipisicing elit. Pariatur perspiciatis a harum voluptas soluta autem cumque alias quasi vitae? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur perspiciatis a harum voluptas soluta autem cumque alias quasi vitae? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur perspiciatis a harum voluptas soluta autem cumque alias quasi vitae?"
            Livelink="skgr.xyz"
            Repolink="github.com"
            ImageURL=""
            Tech={["Nodejs", "Nextjs", "Firebase", "Planetscale"]}
          />
          <ProjectCard
            Title="Launching Soon"
            Description=" Pariatur perspiciatis a harum voluptas soluta autem cumque alias quasi vitae?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur perspiciatis a harum voluptas soluta autem cumque alias quasi vitae?adipisicing elit. Pariatur perspiciatis a harum voluptas soluta autem cumque alias quasi vitae? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur perspiciatis a harum voluptas soluta autem cumque alias quasi vitae? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur perspiciatis a harum voluptas soluta autem cumque alias quasi vitae?"
            Livelink="skgr.xyz"
            Repolink="github.com"
            ImageURL=""
            Tech={["Nodejs", "Nextjs", "Firebase", "Planetscale"]}
          />

          {/* <ProjectCard
              Title="Launching Soon"
              Description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur perspiciatis a harum voluptas soluta autem cumque alias quasi vitae?Pariatur perspiciatis a harum voluptas soluta autem cumque alias quasi vitae? Pariatur perspiciatis a harum voluptas soluta autem cumque alias quasi vitae?"
              Livelink="/"
              Repolink="/"
              ImageURL=""
              Tech={["Nodejs", "Nextjs", "Firebase", "Planetscale"]}
            /> */}
        </main>
      </article>
    </>
  );
};

export default Projects;
