import { TECH_ICONS } from '../constants';

export function MainPage() {
  return (
    <section className="-mt-3 flex h-min flex-col items-center gap-2 px-5">
      <div className="flex w-auto max-w-5xl flex-col gap-2 text-center">
        <h3 className=" text-2xl font-bold text-rose-800 md:text-3xl">
          Lucas Emanuel.
        </h3>

        <h1 className="whitespace-break-spaces text-3xl font-bold tracking-tight md:text-7xl md:leading-tight">
          Desenvolvedor Frontend {'\n'}& Mobile
        </h1>

        <span className="text-base font-medium text-neutral-600">
          Sou um desenvolver frontend atualmente morando no Brasil.
        </span>

        <div className="mt-8 grid w-full grid-cols-4 justify-items-center gap-y-4 md:flex md:justify-between md:gap-0">
          {TECH_ICONS.map((i) => (
            <img key={i} src={`https://skillicons.dev/icons?i=${i}`} alt="" />
          ))}
        </div>
      </div>
    </section>
  );
}
