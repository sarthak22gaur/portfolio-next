import { FaExternalLinkAlt } from 'react-icons/fa';
import { SiGithub } from 'react-icons/si';
import Image from 'next/image';
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
    <div className="w-full h-full flex flex-col gap-4 p-4 shadow-md shadow-primary-dark/25 justify-center items-center lg:hover:scale-105 lg:hover:shadow-lg lg:hover:shadow-primary-dark lg:transition-all">
      <a
        href={props.Livelink}
        target="_blank"
        rel="noopener noreferrer"
        className="cursor-pointer underline-hover text-3xl px-4 py-2 text-primary-dark group-hover:text-primary-dark w-fit "
      >
        {props.Title}
      </a>
      <section className="w-full h-full grid items-center justify-center grid-cols-4 grid-rows-6">
        <div className="col-start-1 col-span-4 row-start-1 row-span-6 w-full h-full">
          <div className="flex flex-col items-center justify-end">
            <div className="w-full h-full bg-gray-400 p-1">
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
            <div className="w-8 h-1 bg-gray-400"></div>
            <div className="w-28 h-2 bg-gray-400"></div>
          </div>
        </div>
        <div className="w-full h-full col-start-3 col-span-2 row-start-2 row-span-5 z-10">
          <div className="rounded flex justify-end">
            <div className="w-3/4 h-full flex flex-col items-center rounded justify-center">
              <div className="w-full h-full border-[1px] rounded flex flex-col gap-1 items-center justify-center p-1 bg-black">
                <div className="w-full h-full flex flex-col items-center rounded-sm">
                  <div className="w-full h-full rounded-sm">
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
                <div className="h-2 w-2 border-[1px] rounded-full bg-gray-500"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-full col-start-4 col-span-1 row-start-4 row-span-3 z-20">
          <div className="flex justify-end">
            <div className="w-1/2 h-full border-[1px] flex flex-col items-center justify-center rounded p-[2px] bg-black">
              <div className="w-full h-full rounded-md flex-col justify-between">
                <div className="w-full flex justify-center gap-1 p-[2px] bg-black">
                  <div className="w-1 h-[2px] rounded-full bg-gray-400"></div>
                  <div className="w-4 h-[2px] rounded-xl bg-gray-400"></div>
                </div>
                <div className="w-full h-full">
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
      <div className="flex flex-col gap-2 justify-center items-center">
        <div className="flex flex-col w-full gap-4 px-4 py-2 justify-center items-center md:bg-black rounded">
          <p className="text-base w-full text-gray-300 text-center">
            {props.Description}
          </p>
          <ul className="flex justify-center flex-wrap gap-2 text-gray-200">
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
    <li className="text-center md:text-right text-gray-500 text-sm">
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
    <a target="_blank" rel="noopener noreferrer" href={externalLink}>
      <li className="flex gap-2 cursor-pointer text-white  bg-black p-2 rounded hover:bg-black hover:text-primary-dark hover:-translate-y-1 transition-all">
        {icon}
      </li>
    </a>
  );
}

export default ProjectCard;
