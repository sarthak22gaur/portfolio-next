import { FaExternalLinkAlt } from "react-icons/fa";
import { SiGithub } from "react-icons/si";
import Image from "next/image";
const ProjectCard: React.FC<{
  Title: string;
  Description: string;
  DesktopImageURL: string;

  TabletImageURL: string;
  MobileImageURL: string;
  Tech: string[];
  Livelink: string;
  Repolink: string;
}> = (props) => {
  return (
    <div className="group flex h-full w-full flex-col items-center justify-center gap-4 p-4 shadow lg:transition-all lg:hover:scale-105 lg:hover:shadow-2xl">
      <a
        href={props.Livelink}
        target="_blank"
        rel="noopener noreferrer"
        className="underline-hover w-fit cursor-pointer px-4 py-2 text-3xl text-white group-hover:text-primary-dark "
      >
        {props.Title}
      </a>
      <section className="grid h-full w-full grid-cols-4 grid-rows-6 items-center justify-center">
        <div className="col-span-4 col-start-1 row-span-6 row-start-1 h-full w-full">
          <div className="flex flex-col items-center justify-end">
            <div className="h-full w-full bg-gray-400 p-1">
              <div className="w-full ">
                <Image
                  layout="responsive"
                  className=" object-fill"
                  width={16}
                  height={9}
                  src={props.DesktopImageURL}
                  alt=""
                />
              </div>
            </div>
            <div className="h-1 w-8 bg-gray-400"></div>
            <div className="h-2 w-28 bg-gray-400"></div>
          </div>
        </div>
        <div className="z-10 col-span-2 col-start-3 row-span-5 row-start-2 h-full w-full">
          <div className="flex justify-end rounded">
            <div className="flex h-full w-3/4 flex-col items-center justify-center rounded">
              <div className="flex h-full w-full flex-col items-center justify-center gap-1 rounded border-[1px] bg-black p-1">
                <div className="flex h-full w-full flex-col items-center rounded-sm">
                  <div className="h-full w-full rounded-sm">
                    <Image
                      layout="responsive"
                      className="rounded-sm object-fill"
                      width={6}
                      height={7.5}
                      src={props.TabletImageURL}
                      alt=""
                    />
                  </div>
                </div>
                <div className="h-2 w-2 rounded-full border-[1px] bg-gray-500"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="z-20 col-span-1 col-start-4 row-span-3 row-start-4 h-full w-full">
          <div className="flex justify-end">
            <div className="flex h-full w-1/2 flex-col items-center justify-center rounded border-[1px] bg-black p-[2px]">
              <div className="h-full w-full flex-col justify-between rounded-md">
                <div className="flex w-full justify-center gap-1 bg-black p-[2px]">
                  <div className="h-[2px] w-1 rounded-full bg-gray-400"></div>
                  <div className="h-[2px] w-4 rounded-xl bg-gray-400"></div>
                </div>
                <div className="h-full w-full">
                  <Image
                    layout="responsive"
                    className="rounded-sm object-fill"
                    width={2}
                    height={4.5}
                    src={props.MobileImageURL}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="flex flex-col items-center justify-start gap-2">
        <div className="flex w-full flex-col items-center justify-center gap-4 rounded px-4  py-2">
          <p className="w-full text-center text-base text-gray-300">
            {props.Description}
          </p>
          <ul className="flex flex-wrap justify-center gap-2 text-gray-200">
            {props.Tech.map((curr, index) => {
              return <ProjectStackItem label={curr} key={index} />;
            })}
          </ul>
        </div>

        <ul className="flex gap-4 p-1">
          <ProjectCTAItem
            icon={<FaExternalLinkAlt size="18" />}
            externalLink={props.Livelink}
          />
          <ProjectCTAItem
            icon={<SiGithub size="18" />}
            externalLink={props.Repolink}
          />
        </ul>
      </div>
    </div>
  );
};

function ProjectStackItem({ label }: { label: string }) {
  return (
    <li className="text-center text-sm text-gray-500 md:text-right">{label}</li>
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
    <a target="_blank" rel="noopener noreferrer" href={externalLink}>
      <li className="flex cursor-pointer gap-2 rounded  bg-black p-2 text-white transition-all hover:-translate-y-1 hover:bg-black hover:text-primary-dark">
        {icon}
      </li>
    </a>
  );
}

export default ProjectCard;
