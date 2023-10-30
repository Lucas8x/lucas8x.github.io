import { SocialIconsLink } from './socialIcons';

export function Footer() {
  return (
    <footer className="flex w-full items-center justify-between border-t border-dashed border-stone-600 px-5 py-5 md:px-10">
      <span id="thanksMessage" className="text-sm font-bold text-stone-600">
        Obrigado pela visita :D
      </span>

      <SocialIconsLink />
    </footer>
  );
}
