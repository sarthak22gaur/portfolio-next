import ProjectCard from "@/components/ProjectCard";

const Projects: React.FC = () => {
  return (
    <>
      <article className="flex min-h-screen flex-col items-center gap-8 p-4 sm:p-8">
        <h1 className="mb-8 max-w-screen-xl p-4 text-center text-3xl font-bold text-slate-400 lg:text-4xl">
          A few things I&apos;ve built
        </h1>
        <main className="grid w-full max-w-screen-xl grid-cols-1 items-center justify-center gap-16 lg:grid-cols-2">
          <ProjectCard
            Title="Byte the Tech"
            Description="A personal blog."
            Livelink="https://btt.skgr.xyz/"
            Repolink="https://github.com/sarthak22gaur/byte-the-tech"
            DesktopImageURL="https://storage.googleapis.com/cp_bucket_test/btt-desktop-light.png"
            TabletImageURL="https://storage.googleapis.com/cp_bucket_test/btt-tablet-dark.png"
            MobileImageURL="https://storage.googleapis.com/cp_bucket_test/btt-home-mobile-light.png"
            Tech={[
              "Nextjs",
              "tRPC",
              "NextAuth",
              "TailwindCSS",
              "Planetscale",
              "Contentful",
            ]}
          />
          <ProjectCard
            Title="Weakest Z-Fighter"
            Description="Polling website made with the t3 stack to get familiar with tRPC. The data was scraped from MyAnimeList using a Go web scraper"
            Livelink="https://weakest.skgr.xyz/"
            Repolink="https://github.com/sarthak22gaur/weakest-z"
            DesktopImageURL="https://storage.googleapis.com/cp_bucket_test/weakest-desktop.png"
            TabletImageURL="https://storage.googleapis.com/cp_bucket_test/weakest-tablet.png"
            MobileImageURL="https://storage.googleapis.com/cp_bucket_test/weakest-mobile.png"
            Tech={["Nextjs", "tRPC", "Planetscale", "TailwindCSS"]}
          />
        </main>
      </article>
    </>
  );
};

export default Projects;
