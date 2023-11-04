interface Props {
  id: string;
  text?: string;
}

export function TechIcon({ id, text }: Props) {
  return (
    <div className="group">
      <div className="relative inline-block opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
        <span className="absolute bottom-0 left-[50%] -ml-[60px] w-[120px] rounded-2xl bg-black py-2 text-center font-medium capitalize text-white dark:bg-white dark:text-black">
          {text ?? id}
        </span>
      </div>
      <img src={`https://skillicons.dev/icons?i=${id}`} alt={id} />
    </div>
  );
}
