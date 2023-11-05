import { TechIcon } from '../components/techIcon';
import { TECH_ICONS } from '../constants';

export function MainPage() {
  return (
    <section className="-mt-3 flex h-min flex-col items-center gap-2 overflow-y-auto overflow-x-hidden px-5">
      <div className="flex w-auto max-w-5xl flex-col gap-2 text-center">
        <h3 className="text-2xl font-bold text-rose-800 dark:text-cyan-500 md:text-3xl">
          Lucas Emanuel
        </h3>

        <h1 className="whitespace-break-spaces text-3xl font-bold tracking-tight dark:text-white md:text-7xl md:leading-tight">
          Desenvolvedor Frontend {'\n'}& Mobile
        </h1>

        <span className="text-base font-medium text-neutral-600 dark:text-stone-300">
          Sou um desenvolver frontend atualmente morando no Brasil.
        </span>

        <div className="mt-8 grid w-full grid-cols-4 justify-items-center gap-y-4  lg:flex lg:justify-between lg:gap-0">
          {TECH_ICONS.map(({ id, text }) => (
            <TechIcon key={id} id={id} text={text} />
          ))}
        </div>
      </div>
    </section>
  );
}
