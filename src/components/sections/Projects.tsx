import type { NextPage } from "next";
import Link from "next/link";
import Image from "next/image";

import minimal from "@/assets/minimal.png";
import weakestres from "@/assets/weakest-result.png";
import weakestmdesk from "@/assets/weakest-desktop.png";

import { ProjectCard } from "@/components/ProjectCard";

import homeillustration from "@/assets/homeillustration.svg";

const Projects: NextPage = () => {
  return (
    <>
      <article className="flex flex-col items-center p-8 min-h-screen">
        <h1 className="border-primary-dark border-b-2 mb-8 p-4 font-bold text-3xl lg:text-4xl">
          A few things I&apos;ve built
        </h1>
        <main className="grid auto-rows-fr p-4 gap-24 max-w-[70vw] ">
          <ProjectCard
            Title="Byte the Tech"
            Description="A personal blog. LAUNCHING SOON"
            Livelink="skgr.xyz"
            Repolink="github.com"
            ImageURL="../assets/weakest-desktop.png"
            Tech={["Nextjs", "tRPC", "NextAuth", "TailwindCSS", "MySQL"]}
          />

          <ProjectCard
            Title="Weakest Z-Fighter"
            Description="A polling website made with the t3 stack to get familiar with tRPC and tailwind and to finally find out who is the weakest among all the Z-fighters. The data was scraped from MyAnimeList using a Go web scraper"
            Livelink="https://weakest.skgr.xyz/"
            Repolink="https://github.com/sarthak22gaur/weakest-z"
            ImageURL='../assets/weakest-desktop.png'
            Tech={["tRPC", "Nextjs", "TailwindCSS", "MySQL"]}
          />
        </main>
      </article>
    </>
  );
};

export default Projects;
