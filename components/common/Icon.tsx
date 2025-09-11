import React, { ReactNode } from "react";
import { FaGithub, FaWhatsapp, FaLinkedin, FaEnvelope } from "react-icons/fa";

type IconProps = {
  name: string;
  className?: string;
};

export default function Icon({ name, className }: IconProps): ReactNode {
  switch (name) {
    case "FaLinkedin":
      return <FaLinkedin className={className} />;
    case "FaGithub":
      return <FaGithub className={className} />;
    case "FaWhatsapp":
      return <FaWhatsapp className={className} />;
    case "FaEnvelope":
      return <FaEnvelope className={className} />;
    default:
      return null;
  }
}
