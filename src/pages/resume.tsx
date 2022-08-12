import type { NextPage } from "next";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Image from "next/image";

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
      <Navbar />
      <h1>Resume</h1>
      <main className="grid grid-cols-2 p-4 text-xs">
        <div className="w-full z-10 flex flex-col justify-center h-full p-4">
          <Image
            layout="responsive"
            width={16}
            height={10}
            src="https://storage.googleapis.com/cp_bucket_test/8KKpE4bnrgPr_BSjdodjBBS01657346517231.png"
            alt=""
          />
        </div>
        <section className="p-4 flex flex-col gap-4 items-center text-white">
          <div className="flex flex-col gap-2 items-center border-4 px-16 py-4 w-full">
            <h1 className="text-4xl">SARTHAK GAUR</h1>
            <h2 className="text-xl">Software Developer</h2>
          </div>

          <ul className="flex justify-around w-full text-sm">
            <li>858-414-2310</li>
            <li>sarthak22gaur@gmail.com</li>
            <li>skgr.xyz</li>
            <li>github.com</li>
          </ul>
          <section className="w-full h-full gap-2 p-2 grid grid-cols-12">
            <div className="col-span-4 p-2 flex flex-col gap-2">
              <article>
                <h1 className="pb-4 text-lg text-primary-dark underline underline-offset-8 font-bold">
                  Skills
                </h1>
                <SkillsCard
                  heading="Languages"
                  items={[
                    "TypeScript/Javascript",
                    "C++",
                    "HTML",
                    "CSS/Saas",
                    "Go",
                    "SQL",
                  ]}
                />
                <SkillsCard
                  heading="Frameworks/Libraries"
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
                  heading="Platforms/Tools"
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

            <div className="col-span-8 p-2 flex flex-col gap-2">
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

              <h1>Projects</h1>
              <article>
                <h2>
                  Fake News Detection @{" "}
                  <span>National Institute of Technology, Kurukshetra</span>
                </h2>
                <h3>Jan 2020 - April 2021</h3>
                <ul className="list-disc list-outside px-8">
                  <li>
                    Worked with a team of 3 people to build an application to
                    detect fake news on Twitter using NLP
                  </li>
                  <li>
                    Researched through various existing methodologies for
                    Linguistic and Network Approaches to create the Training,
                    Testing and Prediction Module for the application
                  </li>
                </ul>
              </article>
              <article>
                <h2>
                  Facial Recognition based Attendance System @{" "}
                  <span>NIT, Kurukshetra</span>
                </h2>
                <h3>Aug - Dec 2019</h3>
                <ul className="list-disc list-outside px-8">
                  <li>
                    Worked with a team of 3 people to build an application to
                    detect fake news on Twitter using NLP
                  </li>
                  <li>
                    Researched through various existing methodologies for
                    Linguistic and Network Approaches to create the Training,
                    Testing and Prediction Module for the application
                  </li>
                </ul>
              </article>
            </div>
          </section>
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
        <ul className="list-disc list-outside px-8">
          {props.items.map((curr, index) => {
            return <li key={index}>{curr}</li>;
          })}
        </ul>
      </article>
    </>
  );
};

export default Resume;
