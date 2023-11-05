import { SectionHeader } from '../components/sectionHeader';
import { SectionSubtitle } from '../components/sectionSubtitle';

export function Contact() {
  return (
    <main
      className="flex h-full flex-col items-center px-5 pt-7
    md:px-14"
    >
      <section className="flex flex-col gap-3">
        <SectionHeader>Contato</SectionHeader>

        <SectionSubtitle>
          Você pode usar esses meios para entrar em contato comigo:
        </SectionSubtitle>

        <ul className="list-disc pl-6 text-neutral-600 dark:text-white">
          <li>
            Email:{' '}
            <a
              className="font-medium text-rose-800 dark:text-cyan-500"
              href="mailto:lucasemanuel8x@gmail.com"
            >
              lucasemanuel8x@gmail.com
            </a>
          </li>

          <li>
            <a
              className="font-medium text-rose-800 dark:text-cyan-500"
              href="https://www.linkedin.com/in/lucasemanuel8x/"
            >
              Linkedin
            </a>
          </li>
        </ul>
      </section>
    </main>
  );
}
