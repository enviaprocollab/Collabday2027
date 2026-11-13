import { createRootRoute, HeadContent, Outlet } from '@tanstack/react-router';
import { event } from '@/config/event';
import { buttonClasses } from '@/components/ui/button';

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { title: 'Collab Day 2027 | O congresso mais humanizado do Brasil' },
      { name: 'description', content: 'Collab Day 2027: congresso de fotografia do grupo Vamos Crescer. 16 e 17 de fevereiro, na AEMFLO e CDL, São José/SC. Conheça os ingressos individual e duplo.' },
      { property: 'og:title', content: 'Collab Day 2027 — Juntos somos especiais!' },
      { property: 'og:description', content: `${event.positioning}. ${event.dateLabel}. ${event.location.name} — ${event.location.city}.` },
      { property: 'og:type', content: 'website' },
      { property: 'og:locale', content: 'pt_BR' },
      { name: 'twitter:card', content: 'summary' },
    ],
  }),
  component: RootLayout,
  notFoundComponent: () => (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 bg-background px-6 text-center text-foreground">
      <p className="eyebrow text-muted-foreground">Collab Day 2027 · 404</p>
      <h1 className="font-display text-4xl font-semibold tracking-tight">Página não encontrada</h1>
      <a href="/" className={buttonClasses()}>Voltar ao evento</a>
    </main>
  ),
});

function RootLayout() {
  return <><HeadContent /><Outlet /></>;
}
