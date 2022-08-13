import type { NextPage } from "next";
import { ProjectCard } from "@/components/ProjectCard";
const Projects: NextPage = () => {
  return (
    <>
      <article
        id="work"
        className="flex flex-col items-center p-4 sm:p-8 min-h-screen"
      >
        <h1 className="mb-8 p-4 text-slate-400 text-center font-bold text-3xl lg:text-4xl">
          A few things I&apos;ve built
        </h1>
        <main className="p-1 flex flex-col gap-8 sm:p-4 h-full max-w-screen-lg">
          <ProjectCard
            Title="Byte the Tech"
            Description="A personal blog. LAUNCHING SOON"
            Livelink="https://btt.skgr.xyz/"
            Repolink="github.com"
            ImageURL="https://storage.googleapis.com/cp_bucket_test/8KKpE4bnrgPr_BSjdodjBBS01657346517231.png"
            Tech={["Nextjs", "tRPC", "NextAuth", "TailwindCSS", "MySQL"]}
          />

          <ProjectCard
            Title="Weakest Z-Fighter"
            Description="A polling website made with the t3 stack to get familiar with tRPC and tailwind and to finally find out who is the weakest among all the Z-fighters. The data was scraped from MyAnimeList using a Go web scraper"
            Livelink="https://weakest.skgr.xyz/"
            Repolink="https://github.com/sarthak22gaur/weakest-z"
            ImageURL="https://storage.googleapis.com/cp_bucket_test/8KKpE4bnrgPr_BSjdodjBBS01657346517231.png"
            Tech={["tRPC", "Nextjs", "TailwindCSS", "MySQL"]}
          />
        </main>
      </article>
    </>
  );
};

export default Projects;
