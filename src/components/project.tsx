import { ReactNode } from 'react';

interface GroupProps {
  children: ReactNode;
  title: string;
}

const ProjectsGroup = ({ children, title }: GroupProps) => (
  <div className="flex flex-col gap-1">
    <span className="text-lg text-black/80 dark:text-white">{title}</span>
    <ul className="flex list-disc flex-col gap-4 pl-7 dark:text-white">
      {children}
    </ul>
  </div>
);

interface ProjectProps {
  title: string;
  href: string;
  description: string | ReactNode;
}

const Project = ({ title, href, description }: ProjectProps) => (
  <li>
    <a
      className="font-medium text-rose-800 dark:text-cyan-500"
      href={href}
      target="_blank"
      rel="noreferrer"
    >
      {title}
    </a>
    <span className="text-neutral-600 dark:text-white">: {description}</span>
  </li>
);

export default {
  Group: ProjectsGroup,
  Item: Project,
};
