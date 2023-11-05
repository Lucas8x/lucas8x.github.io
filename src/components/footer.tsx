import { SocialIconsLink } from './socialIcons';
import { ThemeSwitcher } from './themeSwitcher';

export function Footer() {
  return (
    <footer className="flex w-full items-center justify-between border-t border-dashed border-stone-600 px-5 py-5 md:px-10">
      <div className="flex items-center gap-4">
        <ThemeSwitcher />

        <span
          id="thanksMessage"
          className="hidden text-sm font-bold text-stone-600 dark:text-white min-[425px]:block"
        >
          Obrigado pela visita :D
        </span>
      </div>

      <SocialIconsLink />
    </footer>
  );
}
