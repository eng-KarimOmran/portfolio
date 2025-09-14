import { FaRegFileAlt } from "react-icons/fa";
import Image from "next/image";
import Icon from "@/components/common/Icon";

type SocialLink = {
  path: string;
  icon: string;
};

export default function Hero() {
  const links: SocialLink[] = [
    { icon: "FaGithub", path: "https://github.com/eng-KarimOmran" },
    { icon: "FaLinkedin", path: "https://www.linkedin.com/in/karim-omran" },
    { icon: "FaEnvelope", path: "mailto:eng.karimomran@gmail.com" },
    { icon: "FaWhatsapp", path: "https://wa.me/201277913201" },
  ];

  return (
    <section className="flex flex-col-reverse md:flex-row justify-between items-center gap-4 py-10 overflow-x-hidden">
      <div className="flex flex-col items-center md:items-start gap-6 sm:gap-6 md:gap-8">
        <h3 className="scroll-m-20 text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight">
          Full Stack Developer
        </h3>
        <span className="scroll-m-20 text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-balance text-center md:text-left">
          Hi, I'm
        </span>
        <h2 className="scroll-m-20 text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-balance text-(--main) text-center md:text-left">
          Karim Omran
        </h2>
        <p className="max-w-md text-center md:text-left text-sm md:text-base">
          A passionate Full Stack Developer who loves creating digital solutions
          and building complete web applications. Always eager to learn and
          grow, with a goal of delivering simple and valuable user experiences,
          whether working independently or as part of a team.
        </p>
        <ul className="flex flex-wrap justify-between items-center gap-4 ">
          <li className="w-full lg:w-auto">
            <a
              href="https://drive.google.com/file/d/1xFH4CDr2aGo4piHmtTNZNnOSNvKl6YxG/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-center items-center border-2 border-(--main) px-6 py-2 text-sm md:text-base rounded-2xl hover:bg-(--main)/50 transition-all duration-300"
            >
              <FaRegFileAlt className="mr-2" />
              View CV
            </a>
          </li>
          {links.map((link) => (
            <li key={link.path}>
              <a
                href={link.path}
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-center items-center size-8 md:size-10 rounded-full border-2 border-(--main) hover:bg-(--main)/50 transition-all duration-300"
              >
                <Icon name={link.icon} />
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="relative aspect-[3/4] w-10/12 sm:w-9/12 md:w-6/12 lg:w-3/12 rounded-2xl border-2 border-primary">
        <Image
          src="https://res.cloudinary.com/djh0tsi3i/image/upload/v1757599882/hero_zw0xan.png"
          alt="Karim Omran Full Stack Developer Avatar"
          className="object-cover rounded-2xl"
          fill
          priority
        />
      </div>
    </section>
  );
}
