export function MainPage() {
  return (
    <section className="-mt-3 flex h-min flex-col items-center gap-2 px-5">
      {/* <img class="photo" src="https://picsum.photos/200" /> */}
      <div className="flex w-auto max-w-5xl flex-col gap-2 text-center">
        <h3 className="text-3xl font-bold text-rose-800">Lucas Emanuel.</h3>

        <h1 className="whitespace-break-spaces text-3xl font-bold tracking-tight md:text-7xl md:leading-tight">
          Desenvolvedor Frontend {'\n'}& Mobile
        </h1>

        <span className="text-base font-medium text-neutral-600">
          Sou um desenvolver frontend atualmente morando no Brasil.
        </span>
      </div>
    </section>
  );
}
