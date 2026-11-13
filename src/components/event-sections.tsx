import type { ReactNode } from 'react';
import { ArrowUpRight, Check, ImageIcon, Instagram, Plus, Ticket as TicketIcon, Users } from 'lucide-react';
import { event, formatPrice, type Partner, type Ticket } from '@/config/event';
import { Button, buttonClasses } from '@/components/ui/button';

export function SectionTitle({ label, title, description, light = false }: { label: string; title: string; description?: string; light?: boolean }) {
  return (
    <div className="max-w-2xl">
      <p className={`eyebrow mb-4 ${light ? 'text-mint' : 'text-muted-foreground'}`}>{label}</p>
      <h2 className={`font-display text-3xl font-semibold leading-[1.12] tracking-[-0.045em] sm:text-4xl lg:text-5xl ${light ? 'text-white' : 'text-foreground'}`}>{title}</h2>
      {description && <p className={`mt-5 max-w-xl text-sm leading-7 sm:text-base ${light ? 'text-white/75' : 'text-muted-foreground'}`}>{description}</p>}
    </div>
  );
}

export function EmptyState({ icon, title, description, className = '' }: { icon: ReactNode; title: string; description: string; className?: string }) {
  return (
    <div className={`flex flex-col items-center justify-center rounded-3xl border border-dashed border-border bg-muted/60 px-6 py-12 text-center ${className}`}>
      <span className="mb-5 flex size-12 items-center justify-center rounded-2xl bg-background text-foreground" aria-hidden="true">{icon}</span>
      <h3 className="font-display text-lg font-semibold text-foreground">{title}</h3>
      <p className="mt-2 max-w-md text-sm leading-6 text-muted-foreground">{description}</p>
    </div>
  );
}

function PurchaseLink({ ticket }: { ticket: Ticket }) {
  if (!ticket.purchaseUrl.trim()) {
    return <Button disabled className="w-full border border-border" aria-label={`Compra do ingresso ${ticket.name}: em breve`}>COMPRA EM BREVE</Button>;
  }
  return <a href={ticket.purchaseUrl} target="_blank" rel="noopener noreferrer" className={buttonClasses(ticket.recommended ? 'mint' : 'primary', 'w-full')}>Comprar {ticket.name.toLowerCase()} <ArrowUpRight size={18} aria-hidden="true" /><span className="sr-only"> (abre em nova aba)</span></a>;
}

export function TicketsSection() {
  return (
    <section id="ingressos" aria-labelledby="tickets-heading" className="section-space bg-muted">
      <div className="shell">
        <div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="eyebrow mb-4 text-muted-foreground">01 / Ingressos</p>
            <h2 id="tickets-heading" className="font-display text-3xl font-semibold tracking-[-0.045em] sm:text-4xl lg:text-5xl">Seu próximo encontro<br />começa aqui.</h2>
          </div>
          <p className="max-w-xs text-sm leading-6 text-muted-foreground">{event.dateLabel}<br />{event.location.name} — {event.location.city}<br /><span className="font-bold text-foreground">Capacidade do evento: {event.capacity} pessoas.</span></p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {event.tickets.map((ticket) => (
            <article key={ticket.id} className={`relative flex flex-col overflow-hidden rounded-3xl border bg-background ${ticket.recommended ? 'border-primary shadow-xl shadow-primary/5' : 'border-border'}`}>
              <div className={`flex min-h-12 items-center gap-2 px-6 py-3 text-xs font-extrabold sm:px-8 ${ticket.recommended ? 'bg-primary text-mint' : 'bg-background text-muted-foreground'}`}>
                {ticket.recommended ? <><Users size={16} aria-hidden="true" /> MELHOR OPÇÃO PARA IR ACOMPANHADO</> : <><TicketIcon size={16} aria-hidden="true" /> UMA EXPERIÊNCIA PARA VOCÊ</>}
              </div>
              <div className="flex flex-1 flex-col p-6 sm:p-8">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-display text-2xl font-semibold">{ticket.name}</h3>
                  <span className="rounded-full bg-muted px-3 py-1 text-xs font-semibold">{ticket.people} {ticket.people === 1 ? 'pessoa' : 'pessoas'}</span>
                </div>
                <p className="mt-6 font-display text-4xl font-semibold tracking-[-0.05em] sm:text-5xl">{formatPrice(ticket.price)}</p>
                <div className="mt-3 min-h-16">
                  {ticket.perPerson ? <p className="text-sm text-muted-foreground"><strong className="text-foreground">{formatPrice(ticket.perPerson)}</strong> por pessoa</p> : <p className="text-sm text-muted-foreground">Valor do ingresso individual</p>}
                  {ticket.saving && <p className="mt-2 inline-flex rounded-md bg-mint/25 px-2.5 py-1 text-xs font-extrabold text-primary">Economia de {formatPrice(ticket.saving)}</p>}
                </div>
                <div className="my-6 flex-1 border-t border-border pt-6">
                  {ticket.benefits.length > 0 ? (
                    <ul className="space-y-3">
                      {ticket.benefits.map((benefit, index) => <li key={index} className="flex items-start gap-3 text-sm leading-6"><Check className="mt-1 shrink-0 text-primary" size={17} aria-hidden="true" /><span>{benefit}</span></li>)}
                    </ul>
                  ) : <p className="text-sm leading-6 text-muted-foreground">Os benefícios e detalhes deste ingresso serão divulgados aqui.</p>}
                </div>
                <PurchaseLink ticket={ticket} />
              </div>
            </article>
          ))}
        </div>
        <p className="mt-6 text-center text-xs leading-5 text-muted-foreground">{event.tickets.some((ticket) => ticket.purchaseUrl.trim()) ? 'A compra é realizada na plataforma oficial de ingressos, em uma nova aba.' : 'Os links oficiais de compra serão disponibilizados nesta página.'}</p>
      </div>
    </section>
  );
}

export function SpeakersSection() {
  return (
    <section id="palestrantes" className="section-space bg-background" aria-label="Palestrantes">
      <div className="shell">
        <SectionTitle label="03 / Palestrantes" title="Vozes que aproximam." description="Fotografia, histórias e colaboração no mesmo encontro." />
        <div className="mt-10">
          {event.speakers.length ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {event.speakers.map((speaker) => (
                <article key={speaker.id} className="overflow-hidden rounded-3xl border border-border bg-background">
                  {speaker.photo ? <img src={speaker.photo.src} alt={speaker.photo.alt} width={speaker.photo.width} height={speaker.photo.height} loading="lazy" decoding="async" className="aspect-[4/5] w-full object-cover" /> : <div className="flex aspect-[4/5] items-center justify-center bg-muted text-sm text-muted-foreground"><ImageIcon size={28} className="mr-3" aria-hidden="true" /> Foto em breve</div>}
                  <div className="p-6">
                    <h3 className="font-display text-xl font-semibold">{speaker.name}</h3>
                    {speaker.specialty && <p className="mt-2 text-sm font-bold text-muted-foreground">{speaker.specialty}</p>}
                    {speaker.topic && <p className="mt-4 rounded-lg bg-muted px-3 py-2 text-sm font-semibold">{speaker.topic}</p>}
                    {speaker.biography && <p className="mt-4 whitespace-pre-line text-sm leading-7 text-muted-foreground">{speaker.biography}</p>}
                    {speaker.instagramUrl && <a href={speaker.instagramUrl} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex min-h-11 items-center gap-2 text-sm font-bold"><Instagram size={17} aria-hidden="true" /> Instagram<span className="sr-only"> de {speaker.name} (nova aba)</span><ArrowUpRight size={15} aria-hidden="true" /></a>}
                  </div>
                </article>
              ))}
            </div>
          ) : <EmptyState icon={<Users size={24} />} title="Palestrantes em breve" description="Conheça por aqui os nomes, temas e histórias que farão parte do Collab Day 2027." />}
        </div>
      </div>
    </section>
  );
}

export function PartnerSection({ id, label, title, partners, emptyTitle, emptyDescription }: { id: string; label: string; title: string; partners: Partner[]; emptyTitle: string; emptyDescription: string }) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="border-b border-border py-16 last:border-b-0">
      <div className="shell">
        <p className="eyebrow mb-3 text-muted-foreground">{label}</p>
        <h3 id={`${id}-title`} className="font-display text-3xl font-semibold tracking-tight">{title}</h3>
        {partners.length ? (
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {partners.map((partner) => (
              <article key={partner.id} className="rounded-2xl border border-border bg-background p-6">
                {partner.logo && <div className="mb-6 flex h-24 items-center justify-center"><img src={partner.logo.src} alt={partner.logo.alt} width={partner.logo.width} height={partner.logo.height} loading="lazy" decoding="async" className="max-h-24 max-w-full object-contain" /></div>}
                <h4 className="font-display text-lg font-semibold">{partner.name}</h4>
                {partner.description && <p className="mt-3 whitespace-pre-line text-sm leading-6 text-muted-foreground">{partner.description}</p>}
                <div className="mt-4 flex flex-wrap gap-4">
                  {partner.websiteUrl && <a href={partner.websiteUrl} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center gap-2 text-sm font-bold">Site <ArrowUpRight size={16} aria-hidden="true" /><span className="sr-only"> de {partner.name} (nova aba)</span></a>}
                  {partner.instagramUrl && <a href={partner.instagramUrl} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center gap-2 text-sm font-bold"><Instagram size={16} aria-hidden="true" /> Instagram<span className="sr-only"> de {partner.name} (nova aba)</span></a>}
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="mt-8 flex flex-col gap-4 rounded-2xl border border-dashed border-border bg-background/70 px-6 py-7 sm:flex-row sm:items-center">
            <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-muted" aria-hidden="true"><Plus size={21} /></span>
            <div><p className="font-display font-semibold">{emptyTitle}</p><p className="mt-1 text-sm leading-6 text-muted-foreground">{emptyDescription}</p></div>
          </div>
        )}
      </div>
    </section>
  );
}
