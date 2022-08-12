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
    <section className="min-h-[40vh] max-h-[70vh] bg-repeat-space group grid grid-cols-2 bg-[url('../assets/weakest-desktop.png')] bg-contain transition-all ">
      <div className="flex flex-col gap-4 group-hover:backdrop-blur-lg group-hover:backdrop-grayscale transition-all">
        <p className="text-2xl text-gray-500 group-hover:text-primary-dark group-hover:font-bold w-fit px-8 pt-8 origin-top-left rotate-90 group-hover:rotate-0 transition-all">
          {Title}
        </p>
        <div className="h-full flex flex-col justify-around">
          <p className="text-xl text-white px-8 scale-x-0 group-hover:scale-x-100 origin-left transition-all delay-75">
            {Description}
          </p>

          <div className="px-8 scale-x-0 group-hover:scale-x-100 origin-left transition-all delay-150">
            <ul className="flex py-2 flex-wrap gap-4 text-gray-200">
              {Tech.map((curr, index) => {
                return <ProjectStackItem label={curr} key={index} />;
              })}
            </ul>

            <ul className="flex gap-4 py-4">
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
      </div>

      <Image
        className="scale-x-0 group-hover:scale-x-100 origin-left transition-all delay-100"
        src={weakestres}
        alt="Main image"
      />
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
