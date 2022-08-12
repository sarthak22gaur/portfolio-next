import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { TbFileDownload } from "react-icons/tb";

const Resume: NextPage = () => {
  return (
    <>
      <Head>
        <title>Sarthak Gaur</title>
        <meta
          name="description"
          content="A personal portfolio built with Next.js and tailwind"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="lg:w-1/3 lg:fixed lg:left-0 z-10 flex flex-col lg:float-left justify-center h-full p-4">
        {/* <Image
          className="rounded-full"
          layout="responsive"
          width={1}
          height={1}
          src="https://storage.googleapis.com/cp_bucket_test/8KKpE4bnrgPr_BSjdodjBBS01657346517231.png"
          alt=""
        /> */}
        <div className="flex flex-col gap-2 items-center border-b-2 px-16  text-center py-4 w-full">
          <h1 className="text-4xl text-primary-dark">SARTHAK GAUR</h1>
          <h2 className="text-xl text-slate-300">Software Developer</h2>
        </div>

        <ul className="flex flex-wrap justify-center lg:justify-around w-full gap-4 p-4 text-sm text-slate-400">
          <div className="text-center sm:flex lg:flex-col">
            <li className="p-2">858-414-2310</li>
            <Link href="/">
              <li className="p-2">sarthak22gaur@gmail.com</li>
            </Link>
          </div>
          <div className="text-center sm:flex lg:flex-col">
            <Link href="/">
              <li className="p-2">skgr.xyz</li>
            </Link>
            <Link href="/">
              <li className="p-2">github/sarthak22gaur</li>
            </Link>
          </div>
        </ul>
        <div className="hidden lg:flex justify-center w-full pt-8">
          <button className="flex px-8 py-2 rounded-lg gap-4 text-gray-200 hover:bg-slate-800 hover:text-primary-dark items-center bg-slate-700 transition-colors">
            <TbFileDownload size={32}/>
            <p>Grab a copy</p>
          </button>
        </div>
      </div>

      <main className="p-4 lg:absolute lg:right-0 flex flex-col gap-4 items-center text-white lg:w-2/3 text-xs">
        <section className="h-full gap-2 p-2 flex">
          <div className="w-1/3 sticky p-2 flex flex-col gap-2 bg-slate-800">
            <article>
              <h1 className="pb-4 text-lg text-primary-dark underline underline-offset-8 font-bold">
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
                  "Auth0",
                ]}
              />
              <SkillsCard
                heading="Platforms/ Tools"
                items={[
                  "Git",
                  "C++",
                  "Docker",
                  "Planescale",
                  "Vercel",
                  "Netlify",
                ]}
              />
              <SkillsCard heading="Design" items={["Figma"]} />
            </article>

            <article>
              <h1 className="pb-4 text-lg text-primary-dark underline underline-offset-8 font-bold">
                Education
              </h1>
              <EdCard
                heading="The University of Texas at Dallas"
                content=" Master of Science in Computer Science. Major in Systems"
                duration="2021 - Present"
              />
              <EdCard
                heading=" National Institute of Technology, Kurukshetra"
                content="Bachelor of Technology in Electronics and Communication
                  Engineering. Major in Digital Systems. Minor in Communication
                  Systems"
                duration="2016 - 2020"
              />
            </article>
          </div>

          <div className="w-2/3 p-2 flex flex-col gap-2">
            <h1 className="pb-4 text-lg text-primary-dark underline underline-offset-8 font-bold">
              Experiences
            </h1>

            <ExpCard
              position="Developer"
              heading="TollRing Noida, Delhi"
              duration="July 2020 - July 2021"
              items={[
                "Building and integrating authentication and authorization in Microsoft Teams (Tabs and Bots) using OAuth2.0 and OpenIDConnect",
                "Building API endpoints to fetch data from Microsoft Graph for Teams",
                "Creating chatbot for Analytics 365",
                "Building windows services using background services and the worker service template for long running logging and backup applications",
              ]}
            />
            <ExpCard
              position="Embedded Intern"
              heading="PureSoftware Noida, Delhi"
              duration="May - July 2019"
              items={[
                "Porting of Delve (debugger for Go) from x86-64 architecture to Aarch-64 architecture for Windows on Arm devices",
                "Testing and debugging various applications using Go",
                "Cross-compiling JDK-11 for Windows running on an Aarch-64 for Windows on ARM devices.",
              ]}
            />

            <h1 className="pb-4 text-lg text-primary-dark underline underline-offset-8 font-bold">
              Projects
            </h1>

            <ExpCard
              position="Fake News Detection"
              heading="National Institute of Technology, Kurukshetra"
              duration="Jan 2020 - April 2021"
              items={[
                "Worked with a team of 3 people to build an application to detect fake news on Twitter using NLP",
                "Researched through various existing methodologies for Linguistic and Network Approaches to create the Training, Testing and Prediction Modules for the application",
              ]}
            />
            <ExpCard
              position="Facial Recognition based Attendance System"
              heading="NIT, Kurukshetra"
              duration="Aug - Dec 2019"
              items={[
                "Project aimed at removing the manual attendance system, currently being used in the institution. It was capable of simultaneously marking attendance for a large group.",
                "Built modules for capturing, detecting and recognizing faces and training the data set",
              ]}
            />
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
    <>
      <h2 className="text-base pb-2 font-bold">{props.heading}</h2>
      <ul className="pb-4 text-sm text-gray-400 font-light flex flex-wrap gap-2">
        {props.items.map((curr, index) => {
          return <li key={index}>{curr}</li>;
        })}
      </ul>
    </>
  );
};

const EdCard: React.FC<{
  heading: string;
  duration: string;
  content: string;
}> = (props) => {
  return (
    <>
      <h2 className="text-base font-bold pb-3">{props.heading}</h2>
      <h3 className="text-sm text-gray-400 pb-2">{props.duration}</h3>
      <p className="text-sm pb-6">{props.content}</p>
    </>
  );
};

const ExpCard: React.FC<{
  heading: string;
  position: string;
  duration: string;
  items: Array<string>;
}> = (props) => {
  return (
    <>
      <article>
        <h2 className="text-base pb-3">
          <span className="font-bold">{props.position}</span> @ {props.heading}
        </h2>
        <h3 className="text-sm text-gray-400 pb-2">{props.duration}</h3>
        <ul className="list-disc text-sm list-outside pl-4 pb-4">
          {props.items.map((curr, index) => {
            return <li key={index}>{curr}</li>;
          })}
        </ul>
      </article>
    </>
  );
};

export default Resume;
