import { useState } from 'react';
import { Link } from 'react-router-dom';
import { BsList, BsX } from 'react-icons/bs';

import { NAVBAR_LINKS } from '../constants';

import { NavbarItem } from './navbarItem';
import { SocialIconsLink } from './socialIcons';

export function Navbar() {
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);

  const renderedLinks = NAVBAR_LINKS.map((i) => (
    <NavbarItem
      key={i.path}
      href={i.path}
      onClick={() => setIsOverlayOpen(false)}
    >
      {i.text}
    </NavbarItem>
  ));

  return (
    <nav className="flex items-center justify-between bg-neutral-50 px-5 py-5 shadow-md dark:bg-gray-800 md:px-10 md:py-5">
      <Link
        className="whitespace-nowrap text-xl font-bold uppercase text-stone-600 no-underline dark:text-white"
        to="/"
      >
        Lucas
      </Link>

      <ul className="hidden list-none gap-5 md:inline-flex">{renderedLinks}</ul>

      <button
        data-isopen={isOverlayOpen}
        className="text-3xl data-[isopen=true]:fixed data-[isopen=true]:right-6 data-[isopen=true]:top-6 data-[isopen=true]:z-[2] dark:text-white md:hidden"
        onClick={() => setIsOverlayOpen((s) => !s)}
      >
        {isOverlayOpen ? <BsX /> : <BsList />}
      </button>

      <div
        data-isopen={isOverlayOpen}
        className="z-1 fixed -top-full right-0 flex h-full w-full content-center items-center overflow-y-scroll bg-white transition-all duration-500 ease-in-out data-[isopen=true]:top-0 dark:bg-gray-800"
      >
        <div className="flex h-[75vh] w-full flex-col items-center justify-between gap-4">
          <Link
            className="whitespace-nowrap text-xl font-bold uppercase text-stone-600 no-underline dark:text-white"
            to="/"
            onClick={() => setIsOverlayOpen(false)}
          >
            Lucas
          </Link>

          <ul className="flex list-none flex-col items-center gap-5 text-xl">
            {renderedLinks}
          </ul>

          <SocialIconsLink />

          <span className="text-sm font-bold text-stone-600 dark:text-white">
            Obrigado pela visita :D
          </span>
        </div>
      </div>
    </nav>
  );
}
