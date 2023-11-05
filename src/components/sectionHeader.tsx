import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export function SectionHeader({ children }: Props) {
  return (
    <div className="flex w-full items-center">
      <div className="inline-block h-[2px] w-full bg-zinc-500"></div>
      <span className="mx-3 text-2xl font-bold dark:text-white">
        {children}
      </span>
      <div className="inline-block h-[2px] w-full bg-zinc-500"></div>
    </div>
  );
}
