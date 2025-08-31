// src/data/skills.js

import {
  DiReact,
  DiNodejsSmall,
  DiPython,
  DiGit,
  DiDocker,
  DiHtml5,
  DiCss3
  // DiFigma,
} from "react-icons/di";
import {
  SiC,
  SiCplusplus,
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiFramer,
  SiExpress,
  SiVercel,
  SiMongodb,
  SiFastapi,
  SiJsonwebtokens,
  SiGithub,
  SiPostman,
  SiRender,
  // SiUbuntu,
  // SiMicrosoftwindows,
} from "react-icons/si";

import { TbBrandCSharp } from "react-icons/tb";
import { FaJava, FaWindows } from "react-icons/fa6";

export const skills = [
  {
    category: "Languages",
    technologies: [
      { name: "C", icon: SiC },
      { name: "C++", icon: SiCplusplus },
      { name: "Java", icon: FaJava},
      { name: "C#", icon: TbBrandCSharp },
      { name: "Python", icon: DiPython },
    ],
  },
  {
    category: "Frontend",
    technologies: [
      { name: "HTML", icon: DiHtml5 },
      { name: "CSS", icon: DiCss3 },
      { name: "React", icon: DiReact },
      { name: "Tailwind CSS", icon: SiTailwindcss },
    ],
  },
  {
    category: "Backend",
    technologies: [
      { name: "Node.js", icon: DiNodejsSmall },
      { name: "Express", icon: SiExpress },
      { name: "FastAPI", icon: SiFastapi },
      { name: "JWT", icon: SiJsonwebtokens },
    ],
  },
  {
    category: "Database",
    technologies: [
      { name: "MongoDB", icon: SiMongodb },
    ],
  },
  {
    category: "Tools & Platforms",
    technologies: [
      { name: "Git", icon: DiGit },
      { name: "GitHub", icon: SiGithub },
      { name: "Postman", icon: SiPostman },
      { name: "Vercel", icon: SiVercel },
      { name: "Render", icon: SiRender},
    ],
  },

];