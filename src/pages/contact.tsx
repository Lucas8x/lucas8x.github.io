import { BsLinkedin, BsEnvelopeFill, BsGeoAltFill } from 'react-icons/bs';

import { SectionHeader } from '../components/sectionHeader';
import { SectionSubtitle } from '../components/sectionSubtitle';
import { InfoCard } from '../components/infoCard';

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

        <InfoCard
          Icon={BsLinkedin}
          title="Linkedin"
          value="lucasemanuel8x"
          href="https://www.linkedin.com/in/lucasemanuel8x/"
        />

        <InfoCard
          Icon={BsEnvelopeFill}
          title="Envie-me um email"
          value="lucasemanuel8x@gmail.com"
          href="mailto:lucasemanuel8x@gmail.com"
        />

        <InfoCard
          Icon={BsGeoAltFill}
          title="Localização"
          value="Brazil - Alagoas, Maceió"
        />
      </section>
    </main>
  );
}
