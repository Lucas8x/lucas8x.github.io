import { IconType } from 'react-icons';

interface InfoCardProps {
  Icon: IconType;
  title: string;
  value: string;
  href?: string;
}

export function InfoCard({ Icon, title, value, href }: InfoCardProps) {
  return (
    <div className="flex flex-col items-center gap-6 rounded-lg bg-white px-4 py-6 dark:bg-gray-800 max-[375px]:text-center min-[375px]:flex-row">
      <Icon className="text-3xl dark:text-cyan-500" />
      <div className="flex flex-col gap-2 text-neutral-600 dark:text-white">
        <h3 className="text-xl font-semibold text-black dark:text-white">
          {title}
        </h3>
        <a
          className="text-lg text-stone-600 hover:text-black dark:text-white dark:hover:text-cyan-500"
          target="_blank"
          rel="noreferrer"
          href={href}
        >
          {value}
        </a>
      </div>
    </div>
  );
}
