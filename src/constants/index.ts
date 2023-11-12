export const NAVBAR_LINKS = [
  {
    text: 'Inicio',
    path: '/',
  },
  {
    text: 'Projetos',
    path: 'projects',
  },
  {
    text: 'Contato',
    path: 'contact',
  },
];

export const TECH_ICONS = [
  { id: 'html', text: 'HTML' },
  { id: 'css', text: 'CSS' },
  { id: 'js', text: 'JavaScript' },
  { id: 'ts', text: 'TypeScript' },
  { id: 'react', text: 'React' },
  { id: 'tailwind', text: 'Tailwind CSS' },
  { id: 'sass', text: 'SASS' },
  { id: 'styledcomponents', text: 'Styled Components' },
];

export const PROJECTS: IProject[] = [
  {
    image:
      'https://raw.githubusercontent.com/RagnarokMvpTimer/frontend/main/.repo/site-screenshot.webp',
    title: 'Ragnarok MVP Timer',
    description:
      'Site para auxiliar o usuário no registro e monitoração das próximas aparições dos monstros chefes do jogo.',
    techs: ['React', 'Styled Components'],
    liveURL: 'https://ragnarok-mvp-timer.com',
    repoURL: 'https://github.com/RagnarokMvpTimer/frontend',
  },
  {
    image:
      'https://raw.githubusercontent.com/Lucas8x/proj-mobile/main/.repo/app-screenshot.png',
    title: 'Voran',
    description:
      'Aplicativo móvel de rede social onde usuários podem enviar, visualizar, comentar fotos.',
    techs: ['Expo', 'Firebase'],
    repoURL: 'https://github.com/Lucas8x/proj-mobile',
  },

  {
    image:
      'https://raw.githubusercontent.com/Lucas8x/pong-game-multiplayer/main/.repo/site-screenshot.webp',
    title: 'Pong Game Multiplayer',
    description: 'Jogo multiplayer online de Pong.',
    techs: ['Socket.IO', 'Express'],
    repoURL: 'https://github.com/Lucas8x/pong-game-multiplayer',
  },
  {
    image:
      'https://raw.githubusercontent.com/Lucas8x/stopots-bot/gh-pages/assets/answer.gif',
    title: 'StopotS bot',
    description: 'BOT para jogar StopotS, um jogo de adedonha online.',
    techs: ['Python', 'Selenium'],
    repoURL: 'https://github.com/Lucas8x/stopots-bot',
  },
  {
    image:
      'https://raw.githubusercontent.com/Lucas8x/photo-organizer/main/.repo/app-screenshot.webp',
    title: 'Photo Organizer',
    description:
      'Aplicativo que mostra as fotos de uma pasta e com botões configurados pelo usuário pode copiar ou mover essas fotos para pastas diferentes vinculados a cada botão.',
    techs: ['Electron', 'React'],
    repoURL: 'https://github.com/Lucas8x/photo-organizer',
  },
  {
    image:
      'https://raw.githubusercontent.com/Lucas8x/ragnarok-ticket-calculator/main/.repo/site-screenshot.webp',
    title: 'Ragnarok Ticket Calculator',
    description:
      'Site para calcular quanto o usuário irá ganhar ou gastar em moeda do jogo ou dinheiro real comprando ou vendendo um determinado item do jogo.',
    techs: ['NextJS', 'Styled Components'],
    repoURL: 'https://github.com/Lucas8x/ragnarok-ticket-calculator',
    liveURL: 'https://ragnarok-ticket-calculator.vercel.app',
  },
  {
    title: 'Twitch Plays Stopots',
    description:
      'Script que permite os espectadores de uma live na twitch enviar respostas para o jogo StopotS.',
    techs: ['Puppeteer', 'Twitch'],
    repoURL: 'https://github.com/Lucas8x/twitch-plays-stopots',
  },
  {
    title: "Don't Starve Together Server Setup",
    description:
      "Site para auxiliar na criação de um servidor para o jogo Don't Starve Together.",
    techs: ['HTML', 'JavaScript'],
    repoURL: 'https://github.com/Lucas8x/dont-starve-together-server-setup',
    liveURL: 'https://lucas8x.github.io/dont-starve-together-server-setup',
  },
];
