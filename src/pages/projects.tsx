import Project from '../components/project';
import { SectionHeader } from '../components/sectionHeader';
import { SectionSubtitle } from '../components/sectionSubtitle';
import { ProjectCard } from '../components/projectCard';
import { PROJECTS } from '../constants';

export function Projects() {
  return (
    <main
      className="flex h-full flex-col items-center overflow-y-scroll px-5 pt-7
    md:px-14"
    >
      <div className="flex w-full max-w-3xl flex-col items-center gap-3">
        <SectionHeader>Projetos</SectionHeader>

        <SectionSubtitle>
          Aqui estão alguns projetos pessoais que desenvolvi
        </SectionSubtitle>

        {PROJECTS.map((i) => (
          <ProjectCard
            key={i.title}
            image={i.image}
            title={i.title}
            description={i.description}
            techs={i.techs}
            liveURL={i.liveURL}
            repoURL={i.repoURL}
          />
        ))}

        <div className="flex w-full flex-col gap-4 pb-7">
          <SectionHeader>Outros</SectionHeader>

          <Project.Group title="Jogos">
            <Project.Item
              title="Maze Game"
              href="https://github.com/Lucas8x/Maze-Game"
              description="Jogo de labirinto no terminal."
            />
            <Project.Item
              title="Vortex Store"
              href="https://github.com/Lucas8x/vortex-store"
              description="Loja fictícia de venda de jogos online."
            />
          </Project.Group>
          <Project.Group title="CLI">
            <Project.Item
              title="MVP Scraper CLI"
              href="https://github.com/Lucas8x/mvp-scraper-cli"
              description="Interface javascript para buscar e baixar informações e fotos de uma API sobre os monstros do jogo Ragnarok."
            />
            <Project.Item
              title="Luscious Downloader"
              href="https://github.com/Lucas8x/luscious-downloader"
              description="Era uma CLI onde usuário poderia procurar/baixar diversos albums de imagens/gifs."
            />
          </Project.Group>
          <Project.Group title="Outros">
            <Project.Item
              title="Payroll"
              href="https://github.com/Lucas8x/payroll"
              description="Sistema para gerenciar funcionários/cargos da empresa."
            />
            <Project.Item
              title="MVP Scraper"
              href="https://github.com/RagnarokMvpTimer/mvp-scraper"
              description="Script python para buscar e baixar informações e fotos de uma API sobre os monstros do jogo Ragnarok."
            />
            <Project.Item
              title="MAL Plain List"
              href="https://github.com/Lucas8x/mal-plain-list"
              description="Script para extrair a lista do usuário do site MyAnimeList e converte-la em um arquivo de texto."
            />
            <Project.Item
              title="Insomnia pink theme"
              href="https://github.com/Lucas8x/insomnia-plugin-pink-theme"
              description="Tema rosa para o insomnia."
            />
          </Project.Group>
        </div>
      </div>
    </main>
  );
}
