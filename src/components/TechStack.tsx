import Tilt from "react-parallax-tilt";
import { FaNodeJs, FaGitAlt, FaFigma } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import {
  SiGithub,
  SiVercel,
  SiVisualstudiocode,
  SiGnubash,
  SiCplusplus,
  SiTailwindcss,
  SiReact,
  SiTypescript,
  SiPostman,
} from "react-icons/si";
import { GrMysql } from "react-icons/gr";

function TechCard({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className="m-4 w-fit shadow-xl md:w-40">
      <Tilt>
        <div className="jusify-center group flex w-full flex-col items-center rounded-xl bg-black p-4 text-2xl text-white transition-colors hover:text-primary-dark lg:p-8">
          <i className="transition-all group-hover:translate-y-0 md:translate-y-6">
            {icon}
          </i>
          <span className="mt-4 hidden transition-all group-hover:scale-100 md:block md:scale-0">
            {label}
          </span>
        </div>
      </Tilt>
    </div>
  );
}

function TechStack() {
  return (
    <div className="mt-12 flex w-full max-w-screen-xl flex-row flex-wrap items-center justify-center gap-0 py-4">
      <TechCard icon={<FaNodeJs size="50" />} label="Nodejs" />
      <TechCard icon={<SiCplusplus size="50" />} label="C++" />
      <TechCard icon={<SiTypescript size="50" />} label="TypeScript" />
      <TechCard icon={<SiTailwindcss size="50" />} label="TailwindCSS" />
      <TechCard icon={<GrMysql size="50" />} label="MySQL" />
      <TechCard icon={<SiReact size="50" />} label="React" />
      <TechCard icon={<SiGithub size="50" />} label="Github" />
      <TechCard icon={<TbBrandNextjs size="50" />} label="Next.js" />
      <TechCard icon={<FaGitAlt size="50" />} label="Git" />
      <TechCard icon={<SiPostman size="50" />} label="Postman" />
      <TechCard icon={<SiGnubash size="50" />} label="Bash" />
      <TechCard icon={<SiVisualstudiocode size="50" />} label="VSCode" />
      <TechCard icon={<FaFigma size="50" />} label="Figma" />
      <TechCard icon={<SiVercel size="50" />} label="Vercel" />
    </div>
  );
}

export default TechStack;
