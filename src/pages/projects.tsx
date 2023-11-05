import Project from '../components/project';
import { SectionHeader } from '../components/sectionHeader';
import { SectionSubtitle } from '../components/sectionSubtitle';

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

        <div className="flex w-full flex-col gap-4 pb-7">
          <Project.Group title="Ferramentas para jogos">
            <Project.Item
              title="Ragnarok MVP Timer"
              href="https://github.com/RagnarokMvpTimer/frontend"
              description={
                <>
                  Site para auxiliar o usuário no registro e monitoração das
                  próximas aparições dos monstros chefes do jogo.{' '}
                  <a
                    className="font-medium text-rose-800 dark:text-cyan-500"
                    href="https://ragnarok-mvp-timer.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Clique aqui para visitar
                  </a>
                </>
              }
            />

            <Project.Item
              title="Ragnarok Ticket Calculator"
              href="https://github.com/Lucas8x/ragnarok-ticket-calculator"
              description={
                <>
                  Site para calcular quanto o usuário irá ganhar ou gastar em
                  moeda do jogo ou dinheiro real comprando ou vendendo um
                  determinado item do jogo.{' '}
                  <a
                    className="font-medium text-rose-800 dark:text-cyan-500"
                    href="https://ragnarok-ticket-calculator.vercel.app"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Clique aqui para visitar
                  </a>
                </>
              }
            />

            <Project.Item
              title="Dont Starve Together Server Setup"
              href="https://github.com/Lucas8x/dont-starve-together-server-setup"
              description={
                <>
                  {`Site para auxiliar na criação de um servidor de Don't Starve
                  Together. `}
                  <a
                    className="font-medium text-rose-800 dark:text-cyan-500"
                    href="https://lucas8x.github.io/dont-starve-together-server-setup/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Clique aqui para visitar
                  </a>
                </>
              }
            />
          </Project.Group>

          <Project.Group title="BOTs">
            <Project.Item
              title="Stopots bot"
              href="https://github.com/Lucas8x/stopots-bot"
              description="BOT para jogar StopotS, um jogo de adedonha online."
            />
          </Project.Group>

          <Project.Group title="Rede Social">
            <Project.Item
              title="Voran"
              href="https://github.com/Lucas8x/proj-mobile"
              description="Aplicativo móvel de rede social onde usuários podem enviar, visualizar, comentar fotos."
            />
          </Project.Group>

          <Project.Group title="Desktop">
            <Project.Item
              title="Photo Organizer"
              href="https://github.com/Lucas8x/photo-organizer"
              description="Aplicativo que mostra as fotos de uma pasta e com botões
              configurados pelo usuário pode copiar ou mover essas fotos para
              pastas diferentes vinculados a cada botão."
            />
          </Project.Group>

          <Project.Group title="Jogos">
            <Project.Item
              title="Pong Game Multiplayer"
              href="https://github.com/Lucas8x/pong-game-multiplayer"
              description="Jogo multiplayer online de Pong."
            />
            <Project.Item
              title="Maze Game"
              href="https://github.com/Lucas8x/Maze-Game"
              description="Jogo de labirinto no terminal."
            />
          </Project.Group>

          <Project.Group title="CLI">
            <Project.Item
              title="Luscious Downloader"
              href="https://github.com/Lucas8x/luscious-downloader"
              description="Era uma CLI onde usuário poderia procurar/baixar diversos albums de imagens/gifs."
            />
          </Project.Group>

          <Project.Group title="Outros">
            <Project.Item
              title="MVP Scraper"
              href="https://github.com/RagnarokMvpTimer/mvp-scraper"
              description="Script para buscar e baixar informações e fotos de uma API sobre os monstros do jogo Ragnarok."
            />
            <Project.Item
              title="MAL Plain List"
              href="https://github.com/Lucas8x/mal-plain-list"
              description="Script para extrair a lista do usuário do site MyAnimeList e converte-la em um arquivo de texto."
            />
          </Project.Group>
        </div>
      </div>
    </main>
  );
}
