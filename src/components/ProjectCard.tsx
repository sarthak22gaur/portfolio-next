import ocean from "@/assets/ocean.jpg";
import { FaExternalLinkAlt } from "react-icons/fa";
import { SiGithub } from "react-icons/si";

import minimal from "@/assets/minimal.png";
import weakestres from "@/assets/weakest-result.png";
import weakestmdesk from "@/assets/weakest-desktop.png";

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
    <section className="group flex flex-col items-center shadow-2xl p-4 text-justify gap-4">
      <h2 className="text-2xl text-gray-500 group-hover:text-primary-dark w-fit">
        {Title}
      </h2>

      <p className="text-xl text-white">{Description}</p>

      <ul className="flex py-2 flex-wrap items-center justify-center gap-4 text-gray-200">
        {Tech.map((curr, index) => {
          return <ProjectStackItem label={curr} key={index} />;
        })}
      </ul>

      <ul className="flex gap-4 py-4">
        <ProjectCTAItem
          icon={<FaExternalLinkAlt size="16" />}
          externalLink={Livelink}
        />
        <ProjectCTAItem icon={<SiGithub size="16" />} externalLink={Repolink} />
      </ul>
    </section>
  );
}

function ProjectStackItem({ label }: { label: string }) {
  return <li className="pr-2">{label}</li>;
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
