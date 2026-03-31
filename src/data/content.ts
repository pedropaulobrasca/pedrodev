import { Globe, Server, MessageSquare } from 'lucide-react';

export const siteContent = {
  nav: {
    logo: 'pedrodev',
    links: [
      { label: 'Servicos', href: '#servicos' },
      { label: 'Projetos', href: '#portfolio' },
      { label: 'Sobre', href: '#sobre' },
      { label: 'Contato', href: '#contato' },
    ],
  },

  hero: {
    label: 'Desenvolvedor FullStack Freelancer',
    headline: 'Transformo ideias em produtos digitais de alto impacto',
    subheadline:
      'Desenvolvimento web, APIs robustas e consultoria tecnica para levar seu projeto do conceito ao resultado.',
    cta: {
      text: 'Solicitar orcamento',
      href: 'https://wa.me/5512997183660?text=Ola%20Pedro%2C%20gostaria%20de%20solicitar%20um%20orcamento%20para%20um%20projeto.',
    },
    ctaSecondary: {
      text: 'Ver projetos',
      href: '#portfolio',
    },
  },

  marquee: [
    'React',
    'Node.js',
    'TypeScript',
    'Next.js',
    'NestJS',
    'PostgreSQL',
    'Docker',
    'Prisma',
    'Express',
    'Fastify',
    'Tailwind CSS',
    'Git',
  ],

  services: {
    title: 'O que eu ofereco',
    items: [
      {
        icon: Globe,
        title: 'Desenvolvimento Web',
        description:
          'Sites, landing pages e plataformas web completas. Do design a implementacao, com foco em performance e conversao.',
      },
      {
        icon: Server,
        title: 'APIs & Back-end',
        description:
          'APIs REST, microsservicos e integracoes. Arquiteturas escalaveis com Node.js, NestJS e bancos relacionais.',
      },
      {
        icon: MessageSquare,
        title: 'Consultoria Tecnica',
        description:
          'Arquitetura de software, code review e mentoria. Ajudo sua equipe a tomar as melhores decisoes tecnicas.',
      },
    ],
  },

  process: {
    title: 'Como funciona',
    steps: [
      {
        number: '01',
        title: 'Descoberta',
        description:
          'Entendo seu problema, suas necessidades e os objetivos do projeto. Definimos escopo e prazo juntos.',
      },
      {
        number: '02',
        title: 'Desenvolvimento',
        description:
          'Construcao iterativa com entregas parciais. Voce acompanha o progresso e valida a cada etapa.',
      },
      {
        number: '03',
        title: 'Entrega & Suporte',
        description:
          'Deploy, documentacao e monitoramento. Suporte continuo para garantir que tudo funcione perfeitamente.',
      },
    ],
  },

  socialProof: {
    metrics: [
      { value: '6+', label: 'Anos de experiencia' },
      { value: '3', label: 'Empresas atendidas' },
      { value: '19', label: 'Tecnologias dominadas' },
    ],
    companies: ['Tinnova', 'B2ML Sistemas', 'Thompson Management Horizons'],
  },

  portfolio: {
    title: 'Projetos selecionados',
    projects: [
      {
        title: 'Calculadora de Jobs Freela',
        description:
          'Ferramenta para calcular valores de trabalhos freelance com precisao. Interface intuitiva e calculos automatizados.',
        tech: ['Next.js', 'TypeScript', 'Tailwind CSS'],
        live: 'https://freela-calc.pedrodev.com.br/',
        github: 'https://github.com/pedropaulobrasca/freela-calc',
      },
      {
        title: 'Meus Gastos',
        description:
          'Plataforma de controle financeiro pessoal com autenticacao, dashboard e categorizacao de despesas.',
        tech: ['Vite', 'TypeScript', 'Supabase'],
        live: 'https://gastos.pedrodev.com.br/',
        github: 'https://github.com/pedropaulobrasca/meus-gastos',
      },
      {
        title: 'Pedro Dev',
        description:
          'Este site. Landing page moderna com fundo animado, parallax e foco em conversao.',
        tech: ['React', 'TypeScript', 'Framer Motion', 'Tailwind CSS'],
        live: 'https://www.pedrodev.com.br/',
        github: 'https://github.com/pedropaulobrasca/pedrodev',
      },
    ],
  },

  about: {
    title: 'Sobre mim',
    bio: 'Sou Pedro Paulo, desenvolvedor FullStack com mais de 5 anos de experiencia construindo produtos digitais. Ja atuei em empresas como Tinnova, B2ML Sistemas e Thompson Management Horizons, trabalhando com Node.js, React, TypeScript e bancos de dados relacionais. Moro em Taubate - SP e agora estou focado em ajudar empresas e empreendedores a tirarem suas ideias do papel com solucoes sob medida.',
  },

  ctaBanner: {
    headline: 'Vamos construir algo juntos?',
    subheadline:
      'Entre em contato e vamos discutir como posso ajudar no seu proximo projeto.',
    cta: {
      text: 'Chamar no WhatsApp',
      href: 'https://wa.me/5512997183660?text=Ola%20Pedro%2C%20gostaria%20de%20conversar%20sobre%20um%20projeto.',
    },
  },

  footer: {
    tagline: 'Desenvolvendo solucoes digitais de alto impacto.',
    contact: {
      whatsapp: {
        label: '(12) 99718-3660',
        href: 'https://wa.me/5512997183660',
      },
      email: {
        label: 'pedropaulobrasca@gmail.com',
        href: 'mailto:pedropaulobrasca@gmail.com',
      },
      location: 'Taubate - SP',
    },
    social: {
      github: 'https://github.com/pedropaulobrasca',
      linkedin: 'https://www.linkedin.com/in/pedropaulobrasca/',
    },
  },
};
