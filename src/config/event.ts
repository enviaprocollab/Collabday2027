// Conteúdo editorial do site. Campos vazios não geram informações fictícias.
// Use /uploads/nome-do-arquivo para imagens reais adicionadas ao projeto.
// Os links de compra são independentes e devem apontar para o checkout oficial.
export interface EventImage {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface Speaker {
  id: string;
  name: string;
  specialty: string;
  topic?: string;
  biography: string;
  photo?: EventImage;
  instagramUrl?: string;
}

export interface Partner {
  id: string;
  name: string;
  description: string;
  logo?: EventImage;
  websiteUrl?: string;
  instagramUrl?: string;
}

export interface Ticket {
  id: string;
  name: string;
  people: number;
  price: number;
  perPerson?: number;
  saving?: number;
  recommended: boolean;
  purchaseUrl: string;
  benefits: string[];
}

export interface FaqItem {
  question: string;
  answer: string;
}

export const event = {
  name: 'Collab Day',
  year: 2027,
  organizer: 'Vamos Crescer',
  positioning: 'O congresso mais humanizado do Brasil',
  slogan: 'Nossa paixão além da fotografia é colaborar',
  signature: 'Juntos somos especiais!',
  dateLabel: '16 e 17 de fevereiro de 2027',
  shortDate: '16 e 17 FEV · 2027',
  capacity: 120,
  // Referência para o início da data, não para o horário de abertura do evento.
  countdownTarget: '2027-02-16T00:00:00-03:00',
  logo: null as EventImage | null,
  instagramUrl: 'https://www.instagram.com/collab.day/',
  about: {
    // Insira os parágrafos oficiais completos, sem alterar sua redação.
    paragraphs: [] as string[],
  },
  tickets: [
    {
      id: 'individual',
      name: 'Individual',
      people: 1,
      price: 298,
      recommended: false,
      purchaseUrl: '',
      benefits: [],
    },
    {
      id: 'duplo',
      name: 'Duplo',
      people: 2,
      price: 556,
      perPerson: 278,
      saving: 40,
      recommended: true,
      purchaseUrl: '',
      benefits: [],
    },
  ] satisfies Ticket[] as Ticket[],
  speakers: [] as Speaker[],
  sponsors: [] as Partner[],
  exhibitors: [] as Partner[],
  supporters: [] as Partner[],
  gallery: [] as EventImage[],
  location: {
    name: 'AEMFLO e CDL',
    city: 'São José/SC',
    fullAddress: '',
    // URL oficial do mapa incorporável e link de rotas, quando fornecidos.
    mapEmbedUrl: '',
    directionsUrl: '',
    hours: [] as { label: string; value: string }[],
    accessNotes: [] as string[],
  },
  faq: [
    {
      question: 'Quando acontece o Collab Day 2027?',
      answer: 'O evento acontece nos dias 16 e 17 de fevereiro de 2027.',
    },
    {
      question: 'Onde será realizado o congresso?',
      answer: 'Na AEMFLO e CDL, em São José/SC. O endereço completo e as orientações de acesso serão disponibilizados nesta página.',
    },
    {
      question: 'Quais são os valores dos ingressos?',
      answer: 'O ingresso individual custa R$ 298,00. O ingresso duplo custa R$ 556,00: R$ 278,00 por pessoa, com economia total de R$ 40,00 em relação a dois individuais.',
    },
    {
      question: 'Qual é a capacidade do evento?',
      answer: 'O congresso tem capacidade para 120 pessoas. Esse número representa a capacidade total, não a quantidade de ingressos disponíveis.',
    },
  ] as FaqItem[],
  finalCall: {
    title: 'Juntos somos especiais!',
    paragraphs: [] as string[],
  },
  contacts: [] as { label: string; href: string }[],
};

export const navigation = [
  { href: '#evento', label: 'O evento' },
  { href: '#ingressos', label: 'Ingressos' },
  { href: '#palestrantes', label: 'Palestrantes' },
  { href: '#parceiros', label: 'Parceiros' },
  { href: '#localizacao', label: 'Localização' },
];

export const formatPrice = (value: number) =>
  new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value);
