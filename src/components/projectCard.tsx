import { useState } from 'react';
import { BsGithub, BsBoxArrowUpRight } from 'react-icons/bs';

export function ProjectCard({
  image,
  title,
  description,
  techs,
  liveURL,
  repoURL,
}: IProject) {
  return (
    <div className="flex w-full flex-col items-center justify-between gap-4 rounded-lg bg-white p-4 shadow-md dark:bg-gray-800 dark:shadow-none md:flex-row md:even:flex-row-reverse">
      <ProjectImage image={image} title={title} href={liveURL || repoURL} />

      <div className="flex w-full max-w-xs flex-col items-center gap-4 text-center text-white md:content-between">
        <h3 className="text-lg font-semibold text-black dark:text-white">
          {title}
        </h3>

        <p className="text-stone-600 dark:text-white">{description}</p>

        <div className="flex items-center gap-2">
          {techs.map((i) => (
            <span className="bg-slate-600 px-4 py-2 dark:bg-gray-700" key={i}>
              {i}
            </span>
          ))}
        </div>

        <div className="flex gap-4 text-neutral-600 dark:text-white">
          {repoURL && (
            <a
              className="flex items-center gap-2 hover:text-black dark:hover:text-cyan-500"
              href={repoURL}
              target="_blank"
              rel="noreferrer"
            >
              Source
              <BsGithub />
            </a>
          )}
          {liveURL && (
            <a
              className="flex items-center gap-2 hover:text-black dark:hover:text-cyan-500"
              href={liveURL}
              target="_blank"
              rel="noreferrer"
            >
              Clique para visitar
              <BsBoxArrowUpRight />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

function ProjectImage({
  image,
  title,
  href,
}: {
  image?: string;
  title: string;
  href?: string;
}) {
  const [showUnknown, setShowUnknown] = useState(!image);

  return (
    <a
      className="flex h-full w-full max-w-lg md:max-w-sm"
      href={href}
      target="_blank"
      rel="noreferrer"
    >
      {showUnknown ? (
        <div className="flex h-56 w-full items-center rounded-lg bg-white text-center">
          <span className="w-full whitespace-pre text-3xl font-medium">
            - NO PREVIEW - {'\n'} :c
          </span>
        </div>
      ) : (
        <img
          className="w-full rounded-lg md:max-h-56 md:object-fill"
          src={image}
          alt={`${title} screenshot preview`}
          onError={(e) => {
            console.log(e);
            setShowUnknown(true);
          }}
        />
      )}
    </a>
  );
}
