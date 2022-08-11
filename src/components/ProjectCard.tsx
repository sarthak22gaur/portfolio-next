import ocean from "../Assets/ocean.jpg";
import { FaExternalLinkAlt } from "react-icons/fa";
import { SiGithub } from "react-icons/si";

import minimal from "../Assets/minimal.png";

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
  console.log(ocean);
  return (
    <div className="flex flex-col h-fit p-4 mb-8 transition-all group  ">
      <div className="w-[400px] object-cover transition-all text-gray-600 group-hover:text-primary-dark ">
        <div className="object-fill aspect-square rounded-xl lg:blur-sm lg:grayscale group-hover:blur-0 group-hover:grayscale-0 transition-all">
          <Image
            layout="responsive"
            width={600}
            height={400}
            className=""
            src={minimal}
            alt="Main image"
          />
        </div>
        <h1 className="text-3xl font-bold mt-2">{Title}</h1>
      </div>
      <div className="w-[400px] flex flex-col mt-4 flex-wrap lg:scale-0 group-hover:scale-100 transition-all">
        <p className="text-xl text-justify">{Description}</p>
        <ul className="flex flex-wrap my-4 gap-4 text-gray-500">
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
  );
}

function ProjectStackItem({ label }: { label: string }) {
  return (
    <li className="pr-2">
      {label}
    </li>
  );
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
