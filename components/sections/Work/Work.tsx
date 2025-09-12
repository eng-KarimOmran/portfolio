import Title from "@/components/common/Title";
import { Button } from "@/components/ui/button";
import Image from "next/image";

type Project = {
  title: string;
  img: string;
  demo: string;
  code: string;
  description: string;
  skills: string[];
};

export default function Work() {
  const projects: Project[] = [
    {
      title: "Games",
      description:
        "Games is an interactive platform that offers a wide range of games for all interests in one place.",
      img: "https://res.cloudinary.com/djh0tsi3i/image/upload/v1757642756/Screenshot_2025-09-12_050239_corfpw.png",
      demo: "https://games-online-nu.vercel.app/",
      code: "https://github.com/eng-KarimOmran/Games",
      skills: ["Javascript", "Html5", "Css", "Bootstrap"],
    },
  ];
  return (
    <section id="work" className="py-10">
      <Title title="Work" />
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((project) => (
          <li
            key={project.title}
            className="min-h-96 bg-primary-foreground rounded-lg overflow-hidden shadow-sm"
          >
            <Image
              width={1200}
              height={600}
              alt={project.title}
              src={project.img}
            />
            <div className="flex flex-col flex-1 p-4 gap-2 justify-between">
              <span className="text-lg font-semibold">{project.title}</span>
              <span className="text-muted-foreground text-sm">
                {project.description}
              </span>

              <ul className="flex flex-wrap gap-2 mt-2">
                {project.skills.map((skill) => (
                  <li key={skill} className="bg-muted p-1 rounded-md text-xs">
                    {skill}
                  </li>
                ))}
              </ul>

              <div className="flex justify-between items-center mt-4">
                <Button asChild variant="secondary">
                  <a
                    href={project.code}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Code
                  </a>
                </Button>
                <Button asChild variant="secondary">
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Demo
                  </a>
                </Button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
