import { BsGithub, BsLinkedin } from 'react-icons/bs';

export function SocialIconsLink() {
  return (
    <div className="flex gap-5 text-3xl text-stone-600">
      <a
        className="no-underline hover:text-black"
        aria-label="Access my github for more information"
        href="https://github.com/Lucas8x"
        target="_blank"
        rel="noreferrer"
      >
        <BsGithub />
      </a>

      <a
        className="no-underline hover:text-black"
        aria-label="Access my linkedin for more information"
        href="https://www.linkedin.com/in/lucasemanuel8x/"
        target="_blank"
        rel="noreferrer"
      >
        <BsLinkedin />
      </a>
    </div>
  );
}