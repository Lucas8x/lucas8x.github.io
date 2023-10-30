export function MainPage() {
  return (
    <main className="-mt-3 flex h-min flex-col items-center gap-2 px-5">
      {/* <img class="photo" src="https://picsum.photos/200" /> */}
      <div className=" flex w-auto max-w-4xl flex-col gap-2 md:w-full">
        <span className="ml-1 text-sm font-medium ">Bem vindo, eu sou</span>

        <h3 className="text-3xl font-bold md:text-5xl">Lucas Emanuel.</h3>

        <h3 className="text-3xl font-bold text-rose-800 md:text-5xl">
          Desenvolvedor frontend
        </h3>

        <span className="max-w-lg text-sm font-medium text-neutral-600">
          Sou um desenvolver frontend atualmente morando no Brasil.
        </span>
      </div>
    </main>
  );
}
