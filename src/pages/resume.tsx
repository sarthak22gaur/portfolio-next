import type { NextPage } from "next";
import Link from "next/link";
import SEO from "@/components/SEO";
import { TbFileDownload } from "react-icons/tb";

export async function getStaticProps() {
  return {
    props: {},
  };
}

const Resume: NextPage = () => {
  return (
    <>
      <SEO title="Resume-Sarthak Gaur" />

      <div className="lg:w-1/3 lg:fixed lg:left-0 z-10 flex flex-col lg:float-left justify-center h-full p-4">
        <div className="flex flex-col gap-2 items-center border-b-2 lg:px-16 text-center py-4 w-full">
          <h1 className="text-2xl sm:text-4xl text-primary-dark">
            SARTHAK GAUR
          </h1>
          <h2 className="text-base sm:text-xl text-slate-300">
            Software Developer
          </h2>
        </div>

        <ul className="flex flex-wrap justify-center lg:justify-around w-full lg:gap-4 p-2 lg:p-4 text-sm underline underline-offset-2 lg:no-underline text-slate-400">
          <div className="text-center sm:flex lg:flex-col">
            <Link href="/">
              <li className="p-2 underline-hover cursor-pointer">
                sarthak22gaur@gmail.com
              </li>
            </Link>
            <a href="https://www.skgr.xyz/">
              <li className="p-2 underline-hover">skgr.xyz</li>
            </a>
          </div>
          <div className="text-center sm:flex lg:flex-col">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/sarthak-gaur-22041998/"
            >
              <li className="p-2 underline-hover">linkedin</li>
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/sarthak22gaur"
            >
              <li className="p-2 underline-hover">github</li>
            </a>
          </div>
        </ul>
        <a
          href="https://storage.googleapis.com/cp_bucket_test/resume_sarthak_gaur.pdf"
          download
          target="_blank"
          rel="noopener noreferrer"
          className="flex justify-center items-center w-full lg:pt-8"
        >
          <div className="flex px-4 lg:px-8 py-1 lg:py-2 rounded lg:rounded-lg gap-4 text-gray-200 hover:bg-slate-800 hover:text-primary-dark items-center bg-slate-700 transition-colors">
            <TbFileDownload size={24} />
            <p className="text-sm sm:text-base">Grab a copy</p>
          </div>
        </a>
      </div>

      <main className="lg:p-4 lg:absolute lg:right-0 flex flex-col gap-4 items-center text-white lg:w-2/3 text-xs">
        <section className="h-full gap-2 p-2 flex">
          <div className="w-2/3 p-2 flex flex-col gap-2">
            <h1 className="pb-4 text-sm sm:text-base text-primary-dark underline underline-offset-8 font-bold">
              Experiences
            </h1>

            <ExpCard
              position="Developer"
              heading="TollRing"
              duration="July 2020 - July 2021"
              description="Worked on Analytics 365 (an analytics app for Microsoft Teams)"
              items={[
                "Building and integrating authentication and authorization in Microsoft Teams (Tabs and Bots) using OAuth2.0 and OpenIDConnect",
                "Building RESTful APIs for authentication and authorization",
                "Creating chatbot for Analytics 365",
              ]}
            />
            <ExpCard
              position="Embedded Intern"
              heading="PureSoftware"
              description=""
              duration="May - July 2019"
              items={[
                "Porting of Delve (debugger for Go) from x86-64 architecture to Aarch-64 architecture for Windows on Arm devices",
                "Cross-compiling JDK-11 for Windows running on an Aarch-64 for Windows on ARM devices.",
              ]}
            />

            <h1 className="pb-4 text-sm sm:text-base text-primary-dark underline underline-offset-8 font-bold">
              Projects
            </h1>

            <ProjectCard
              title="Byte the Tech"
              description="Personal blog"
              summary="Lorem ipsum dolor sit amet, consectetur, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip"
              items={[
                "Next.js",
                "tRPC",
                "NextAuth",
                "TailwindCSS",
                "Contentful",
              ]}
            />
            <ProjectCard
              title="Weakest-Z"
              description="A polling website"
              summary="Lorem ipsum dolor sit amet, consectetur, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip"
              items={["Next.js", "tRPC", "Planetscale"]}
            />
          </div>
          <div className="w-1/3 sticky p-2 flex flex-col gap-2">
            <article>
              <h1 className="pb-4 text-sm sm:text-base text-primary-dark underline underline-offset-8 font-bold">
                Skills
              </h1>
              <SkillsCard
                heading="Languages"
                items={[
                  "TypeScript/ Javascript",
                  "C++",
                  "HTML",
                  "CSS/Saas",
                  "Go",
                  "SQL",
                ]}
              />
              <SkillsCard
                heading="Frameworks/ Libraries"
                items={[
                  "Node.js",
                  "React",
                  "Next.js",
                  "NextAuth",
                  "Prisma",
                  "tRPC",
                  "TailwindCSS",
                ]}
              />
              <SkillsCard
                heading="Platforms/ Tools"
                items={["Git", "Docker", "Planescale", "Vercel", "Contentful"]}
              />
              <SkillsCard heading="Design" items={["Figma"]} />
            </article>

            <article>
              <h1 className="pb-4 text-sm sm:text-base text-primary-dark underline underline-offset-8 font-bold">
                Education
              </h1>
              <EdCard
                heading="The University of Texas at Dallas"
                content="Master's in Computer Science"
                duration="2021 - Present"
                gpa="3.7"
              />
              <EdCard
                heading="Indian Institute of Information Technology, Sonepat, India"
                content="Bachelor of Technology in Electronics and Communication
                  Engineering."
                duration="2016 - 2020"
                gpa="7.92"
              />
            </article>
          </div>
        </section>
      </main>
    </>
  );
};

const SkillsCard: React.FC<{ heading: string; items: Array<string> }> = (
  props
) => {
  return (
    <div className="text-sm flex flex-col gap-2">
      <h2 className="font-bold">{props.heading}</h2>
      <ul className="pb-4 text-xs sm:text-sm text-gray-400 font-light flex flex-wrap gap-2">
        {props.items.map((curr, index) => {
          return <li key={index}>{curr}</li>;
        })}
      </ul>
    </div>
  );
};

const EdCard: React.FC<{
  heading: string;
  duration: string;
  gpa: string;
  content: string;
}> = (props) => {
  return (
    <div className="text-xs sm:text-sm flex flex-col gap-2 pb-4">
      <h2 className="font-bold">
        {props.heading} -{" "}
        <span className="font-light italic">{props.content}</span>
      </h2>
      <h3 className="text-gray-400">GPA: {props.gpa}</h3>
      <h3 className="text-gray-400">{props.duration}</h3>
    </div>
  );
};

const ExpCard: React.FC<{
  heading: string;
  position: string;
  duration: string;
  description: string;
  items: Array<string>;
}> = (props) => {
  return (
    <>
      <article className="flex flex-col gap-2 text-xs sm:text-sm pb-4">
        <h2 className="text-sm sm:text-base">
          <span className="italic">{props.position}</span> @{" "}
          <span className="font-bold">{props.heading}, </span>India
        </h2>
        <h4 className="text-gray-400">{props.duration}</h4>
        <p className="font-bold">
          Project :{" "}
          <span className="font-normal text-gray-400">{props.description}</span>
        </p>

        <ul className="list-disc list-outside pl-4 sm:pl-8 text-gray-400">
          {props.items.map((curr, index) => {
            return <li key={index}>{curr}</li>;
          })}
        </ul>
      </article>
    </>
  );
};
const ProjectCard: React.FC<{
  title: string;
  summary: string;
  description: string;
  items: Array<string>;
}> = (props) => {
  return (
    <>
      <article className="flex flex-col gap-2 text-xs sm:text-sm pb-4">
        <h2 className="text-sm sm:text-base">
          <span className="font-bold">{props.title}</span> -{" "}
          <span className="italic">{props.description}</span>
        </h2>

        <p className="font-bold">
          <span className="font-normal text-gray-400">{props.summary}</span>
        </p>

        <ul className="flex flex-wrap gap-2 sm:gap-4 text-gray-400">
          <span className="font-bold">Stack:</span>
          {props.items.map((curr, index) => {
            return <li key={index}>{curr}</li>;
          })}
        </ul>
      </article>
    </>
  );
};

export default Resume;
