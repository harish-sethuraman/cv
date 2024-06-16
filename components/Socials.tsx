import { Github, Globe, Linkedin, MailIcon, Twitter } from "lucide-react";
import { ReactNode } from "react";

const Icons = {
  github: Github,
  web: Globe,
  linkedin: Linkedin,
  twitter: Twitter,
  email: MailIcon,
};

const Socials = ({
  children,
  href,
  type = "web",
}: {
  children: ReactNode;
  href: string;
  type: keyof typeof Icons;
}) => {
  const Icon = Icons[type] ?? Globe;
  return (
    <div className="justify-center inline-flex gap-2 text-sm font-thin items-center">
      <a
        href={href}
        target="_blank"
        title={type === "web" ? `open ${href}` : `open ${type} profile`}
        rel="noopener noreferrer"
        className="flex items-center border p-1 rounded-[9999px] sm:border-0"
      >
        <Icon height="16px" />
        <span className="hidden sm:block">{children}</span>
      </a>
    </div>
  );
};

export default Socials;
