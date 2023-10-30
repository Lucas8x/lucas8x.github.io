import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export function SectionSubtitle({ children }: Props) {
  return <p className="text-sm text-neutral-600">{children}</p>;
}
