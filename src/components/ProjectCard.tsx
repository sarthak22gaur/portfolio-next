import ocean from "@/assets/ocean.jpg";
import { FaExternalLinkAlt } from "react-icons/fa";
import { SiGithub } from "react-icons/si";

import minimal from "@/assets/minimal.png";

import Image from "next/image";
import Link from "next/link";

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
  return (
    <div className="h-full group grid grid-cols-2 hover:grayscale bg-[url('../assets/minimal.png')] bg-cover bg-center transition-all ">
      <div className="h-full flex flex-col justify-between group-hover:backdrop-blur-lg transition-all">
        <p className="text-2xl  w-fit p-8 origin-top-left rotate-90 group-hover:rotate-0 transition-all">
          {Title}
        </p>

        <div className="p-8 scale-x-0 group-hover:scale-x-100 origin-left transition-all">
          <p className="text-xl">{Description}</p>
        </div>
        <div className="p-8 scale-x-0 group-hover:scale-x-100 origin-left transition-all delay-75">
          <ul className="flex flex-wrap gap-4 text-gray-500">
            {Tech.map((curr, index) => {
              return <ProjectStackItem label={curr} key={index} />;
            })}
          </ul>

          <ul className="flex gap-4 my-4">
            <ProjectCTAItem
              icon={<FaExternalLinkAlt size="16" />}
              externalLink={Livelink}
            />
            <ProjectCTAItem
              icon={<SiGithub size="16" />}
              externalLink={Repolink}
            />
          </ul>
        </div>
      </div>
      {/* <div className=""> */}
      <Image className="scale-x-0 group-hover:scale-x-100 origin-left transition-all delay-100" src={ocean} alt="Main image" />
      {/* </div> */}
    </div>
  );
}

function ProjectStackItem({ label }: { label: string }) {
  return <li className="p-2">{label}</li>;
}

function ProjectCTAItem({
  externalLink,
  icon,
}: {
  externalLink: string;
  icon: React.ReactNode;
}) {
  return (
    <Link href={externalLink}>
      <li className="flex gap-2 cursor-pointer bg-primary-dark text-black p-2 rounded hover:bg-black hover:text-white transition-all">
        {icon}
      </li>
    </Link>
  );
}
