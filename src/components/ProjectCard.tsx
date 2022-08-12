import { FaExternalLinkAlt } from "react-icons/fa";
import { SiGithub } from "react-icons/si";
import Tilt from "react-parallax-tilt";
import Image from "next/image";

export function ProjectCard({
  Title,
  Description,
  ImageURL,

  Tech,
  Livelink,
  Repolink,
}: {
  Title: string;
  Description: string;
  ImageURL: string;

  Tech: string[];
  Livelink: string;
  Repolink: string;
}) {
  // let mql = window.matchMedia('(max-width: 600px)');
  return (
    <Tilt tiltMaxAngleX={1} tiltMaxAngleY={1}>
      <section className="group h-[500px] grid grid-cols-12 grid-rows-1 items-center justify-center shadow-2xl p-4 text-justify gap-4">
        <div className="w-full z-10 flex flex-col justify-center h-full col-span-8 col-start-1 row-span-1 row-start-1 translate-x-1/4 group-hover:translate-x-0 blur-sm group-hover:blur-none transition-all">
          <Image
            layout="responsive"
            width={16}
            height={10}
            src={ImageURL}
            alt=""
          />
        </div>

        <div className="h-full flex gap-4 flex-col justify-center items-end col-span-6 col-start-7 z-0 row-span-1 row-start-1 -translate-x-1/2 group-hover:translate-x-0 transition-all  group-hover:z-10">
          <h2 className="text-2xl  p-4 text-gray-500 group-hover:text-primary-dark w-fit ">
            {Title}
          </h2>

          <div className="flex flex-col gap-4 p-4 justify-center items-end bg-black rounded">
            <p className=" text-base text-gray-300 text-right">{Description}</p>
            <ul className="flex justify-end flex-wrap gap-4 text-gray-200">
              {Tech.map((curr, index) => {
                return <ProjectStackItem label={curr} key={index} />;
              })}
            </ul>
          </div>

          <ul className="flex gap-4 p-4">
            <ProjectCTAItem
              icon={<FaExternalLinkAlt size="18" />}
              externalLink={Livelink}
            />
            <ProjectCTAItem
              icon={<SiGithub size="18" />}
              externalLink={Repolink}
            />
          </ul>
        </div>
      </section>
    </Tilt>
  );
}

function ProjectStackItem({ label }: { label: string }) {
  return <li className="text-right text-primary-dark text-sm">{label}</li>;
}

function ProjectCTAItem({
  externalLink,
  icon,
}: {
  externalLink: string;
  icon: React.ReactNode;
}) {
  return (
    <a target="_blank" rel="noopener noreferrer" href={externalLink}>
      <li className="flex gap-2 cursor-pointer text-white  bg-black p-2 rounded hover:bg-black hover:text-primary-dark hover:-translate-y-1 transition-all">
        {icon}
      </li>
    </a>
  );
}
