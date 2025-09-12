import { ReactNode } from "react";
import {
  FaReact,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaSass,
  FaBootstrap,
  FaNodeJs,
  FaGitAlt,
  FaNpm,
  FaDocker,
  FaDatabase,
  FaUbuntu,
  FaFigma,
  FaAws,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiRedux,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiVite,
  SiFramer,
  SiGraphql,
  SiJsonwebtokens,
  SiJest,
} from "react-icons/si";

type Skill = {
  name: string;
  icon: ReactNode;
  color: string;
};

export default function Skills() {
  const skills: Skill[] = [
    { name: "React", color: "text-cyan-400", icon: <FaReact /> },
    { name: "Next.js", color: "text-primary", icon: <SiNextdotjs /> },
    { name: "JavaScript", color: "text-yellow-400", icon: <FaJs /> },
    { name: "TypeScript", color: "text-blue-500", icon: <SiTypescript /> },
    { name: "HTML5", color: "text-orange-500", icon: <FaHtml5 /> },
    { name: "CSS3", color: "text-blue-400", icon: <FaCss3Alt /> },
    { name: "Tailwind CSS", color: "text-teal-400", icon: <SiTailwindcss /> },
    { name: "Scss", color: "text-pink-400", icon: <FaSass /> },
    { name: "Bootstrap", color: "text-purple-400", icon: <FaBootstrap /> },
    { name: "Redux", color: "text-purple-600", icon: <SiRedux /> },
    { name: "Framer Motion", color: "text-pink-500", icon: <SiFramer /> },

    { name: "Node.js", color: "text-green-600", icon: <FaNodeJs /> },
    { name: "Express.js", color: "text-gray-600", icon: <SiExpress /> },
    { name: "REST API", color: "text-blue-500", icon: <FaNodeJs /> },
    { name: "GraphQL", color: "text-pink-400", icon: <SiGraphql /> },
    {
      name: "JWT / Authentication",
      color: "text-yellow-500",
      icon: <SiJsonwebtokens />,
    },

    { name: "MongoDB", color: "text-green-500", icon: <SiMongodb /> },
    { name: "MySQL", color: "text-blue-600", icon: <SiMysql /> },
    { name: "Database Design", color: "text-orange-400", icon: <FaDatabase /> },

    { name: "Git", color: "text-orange-600", icon: <FaGitAlt /> },
    { name: "GitHub Actions", color: "text-gray-800", icon: <FaGitAlt /> },
    { name: "Docker", color: "text-blue-600", icon: <FaDocker /> },
    { name: "NPM", color: "text-red-500", icon: <FaNpm /> },
    { name: "Vite", color: "text-pink-500", icon: <SiVite /> },
    { name: "AWS", color: "text-orange-400", icon: <FaAws /> },
    { name: "Ubuntu", color: "text-orange-500", icon: <FaUbuntu /> },
    { name: "Figma", color: "text-pink-500", icon: <FaFigma /> },

    { name: "Jest", color: "text-red-400", icon: <SiJest /> },
  ];
  return (
    <ul className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 text-6xl">
      {skills.map((skill) => (
        <li
          key={skill.name}
          className={`h-24 bg-background flex justify-center items-center flex-col rounded-lg p-1 ${skill.color}`}
        >
          {skill.icon}
          <span className="text-center text-sm">{skill.name}</span>
        </li>
      ))}
    </ul>
  );
}
