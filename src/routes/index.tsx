import { createFileRoute } from '@tanstack/react-router';
import { ArrowDown, ArrowUpRight, CalendarDays, Camera, Check, ChevronDown, Clock3, Heart, Instagram, MapPin, Navigation, Sparkles, Users } from 'lucide-react';
import { event, navigation } from '@/config/event';
import { SiteHeader, Brand } from '@/components/site-header';
import { Countdown } from '@/components/countdown';
import { EmptyState, PartnerSection, SectionTitle, SpeakersSection, TicketsSection } from '@/components/event-sections';
import { buttonClasses } from '@/components/ui/button';

export const Route = createFileRoute('/')({ component: HomePage });

function Hero() {
  return (
    <section className="hero-grid relative isolate overflow-hidden bg-primary text-white" aria-labelledby="hero-title">
      <div aria-hidden="true" className="pointer-events-none absolute -right-48 -top-36 -z-10 size-[650px] rounded-full bg-cyan/15 blur-[100px]" />
      <div className="shell grid items-center gap-12 pb-14 pt-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-8 lg:pb-20 lg:pt-20">
        <div className="enter relative z-10">
          <p className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.13em] sm:text-xs"><span className="size-1.5 rounded-full bg-mint" aria-hidden="true" /> Congresso de fotografia · Vamos Crescer</p>
          <h1 id="hero-title" className="max-w-2xl font-display text-[clamp(2.7rem,5.6vw,5rem)] font-medium leading-[1.04] tracking-[-0.065em]">O congresso mais <span className="text-mint">humanizado</span> do Brasil<span className="text-cyan">.</span></h1>
          <p className="mt-6 max-w-md text-base leading-7 text-white/80 sm:text-lg">{event.slogan}</p>
          <div className="mt-8 flex flex-col gap-3 text-sm font-semibold text-white/90">
            <p className="flex items-center gap-3"><CalendarDays size={18} className="shrink-0 text-mint" aria-hidden="true" /><span>{event.dateLabel}</span></p>
            <p className="flex items-center gap-3"><MapPin size={18} className="shrink-0 text-mint" aria-hidden="true" /><span>{event.location.name} — {event.location.city}</span></p>
          </div>
          <div className="mb-9 mt-8 flex flex-col items-stretch gap-4 sm:flex-row sm:items-center">
            <a href="#ingressos" className={buttonClasses('mint', 'min-h-14')}>Quero meu ingresso <ArrowUpRight size={20} aria-hidden="true" /></a>
            <a href="#evento" className="inline-flex min-h-12 items-center justify-center gap-2 px-3 text-sm font-semibold text-white/85 hover:text-white">Conheça o Collab Day <ArrowDown size={16} aria-hidden="true" /></a>
          </div>
          <Countdown />
        </div>
        <div className="relative mx-auto flex aspect-square w-full max-w-[470px] items-center justify-center lg:w-[110%]" aria-label="Collab Day 2027, 16 e 17 de fevereiro">
          <div aria-hidden="true" className="absolute inset-6 rounded-full border border-white/10" />
          <div aria-hidden="true" className="absolute inset-16 rounded-full border border-white/10" />
          <div aria-hidden="true" className="float-art absolute inset-x-5 inset-y-16 rounded-[100px] bg-gradient-to-br from-cyan via-mint to-violet opacity-95 shadow-2xl shadow-black/15" />
          <div aria-hidden="true" className="absolute right-5 top-12 flex size-16 items-center justify-center rounded-full bg-violet text-primary sm:size-20"><Sparkles className="size-8" strokeWidth={1.3} /></div>
          <div className="relative -rotate-6 rounded-[28px] border border-white/30 bg-primary/90 px-10 py-9 shadow-2xl backdrop-blur-xl sm:px-14 sm:py-11">
            <p className="font-display text-3xl font-semibold tracking-[-0.06em] sm:text-4xl">collab day<span className="text-mint">.</span></p>
            <p className="mt-5 font-display text-[86px] font-medium leading-[0.83] tracking-[-0.1em] text-white sm:text-[108px]">20<br /><span className="text-mint">27</span></p>
            <div className="mt-7 flex items-center justify-between gap-5 border-t border-white/20 pt-4 text-[10px] font-bold uppercase tracking-widest"><span>16—17 FEV</span><span>São José / SC</span></div>
          </div>
          <p className="absolute bottom-6 left-0 flex items-center gap-2 rounded-full border border-white/20 bg-primary px-5 py-3 text-xs font-bold shadow-lg sm:left-2"><Heart size={15} className="text-mint" aria-hidden="true" /> {event.signature}</p>
        </div>
      </div>
      <div className="border-t border-white/15">
        <div className="shell flex flex-wrap items-center justify-between gap-x-8 gap-y-4 py-5 text-[10px] font-semibold uppercase tracking-[0.12em] text-white/75 sm:text-xs">
          <span className="flex items-center gap-2"><Camera size={15} aria-hidden="true" /> Fotografia</span><span className="flex items-center gap-2"><Heart size={15} aria-hidden="true" /> Colaboração</span><span className="flex items-center gap-2"><Users size={15} aria-hidden="true" /> Capacidade: 120 pessoas</span><span className="hidden sm:block">Uma realização Vamos Crescer</span>
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section id="evento" className="section-space bg-background" aria-label="O evento">
      <div className="shell grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <div className="relative overflow-hidden rounded-[32px] bg-muted p-8 sm:p-12">
          <div aria-hidden="true" className="absolute -right-16 -top-16 size-56 rounded-full bg-violet/20" />
          <p className="eyebrow relative text-muted-foreground">Collab Day / 2027</p>
          <div aria-hidden="true" className="relative my-12 flex h-36 items-center justify-center">
            <div className="absolute -translate-x-12 -rotate-12 size-36 rounded-[36px] bg-cyan mix-blend-multiply" />
            <div className="absolute translate-x-12 rotate-12 size-36 rounded-full bg-mint mix-blend-multiply" />
            <Heart className="relative size-14 text-primary" strokeWidth={1.2} />
          </div>
          <p className="relative max-w-sm font-display text-3xl font-medium leading-tight tracking-[-0.04em] sm:text-4xl">Nossa paixão além da fotografia é <span className="underline decoration-violet decoration-4 underline-offset-8">colaborar.</span></p>
          <p className="mt-8 text-xs font-bold uppercase tracking-widest text-muted-foreground">Grupo Vamos Crescer</p>
        </div>
        <div>
          <SectionTitle label="02 / O evento" title="Fotografia nos conecta. Colaborar nos aproxima." />
          <div className="mt-6 space-y-4 text-base leading-8 text-muted-foreground">
            {event.about.paragraphs.length ? event.about.paragraphs.map((paragraph, index) => <p key={index} className="whitespace-pre-line">{paragraph}</p>) : <p>O Collab Day 2027 é o congresso de fotografia do grupo Vamos Crescer. Nos dias 16 e 17 de fevereiro de 2027, o encontro acontece na AEMFLO e CDL, em São José/SC, com capacidade para 120 pessoas.</p>}
          </div>
          <div className="mt-8 grid grid-cols-2 gap-5 border-t border-border pt-7">
            <div><p className="font-display text-4xl font-semibold">02<span className="text-cyan">.</span></p><p className="mt-2 text-xs font-semibold text-muted-foreground">Dias de congresso</p></div>
            <div><p className="font-display text-4xl font-semibold">120<span className="text-violet">.</span></p><p className="mt-2 text-xs font-semibold text-muted-foreground">Pessoas de capacidade</p></div>
          </div>
          <a href="#ingressos" className="mt-8 inline-flex min-h-12 items-center gap-3 text-sm font-extrabold">Quero fazer parte <ArrowUpRight size={19} aria-hidden="true" /></a>
        </div>
      </div>
    </section>
  );
}

function PartnersSection() {
  return (
    <div id="parceiros" className="bg-muted">
      <div className="shell pt-20 sm:pt-24">
        <SectionTitle label="04 / Parceiros" title="Crescer é um movimento coletivo." description="Marcas e iniciativas que fazem parte do Collab Day, cada uma em seu espaço." />
      </div>
      <PartnerSection id="patrocinadores" label="Patrocínio" title="Patrocinadores" partners={event.sponsors} emptyTitle="Patrocinadores em breve" emptyDescription="As marcas patrocinadoras serão apresentadas neste espaço." />
      <PartnerSection id="expositores" label="Exposição" title="Expositores" partners={event.exhibitors} emptyTitle="Expositores em breve" emptyDescription="Conheça aqui as marcas e os expositores que estarão no congresso." />
      <PartnerSection id="apoiadores" label="Apoio" title="Apoiadores" partners={event.supporters} emptyTitle="Apoiadores em breve" emptyDescription="Um espaço dedicado às iniciativas que apoiam o Collab Day 2027." />
    </div>
  );
}

function GallerySection() {
  return (
    <section id="experiencia" className="section-space overflow-hidden bg-primary text-white" aria-label="Galeria da experiência">
      <div className="shell">
        <div className="flex flex-col justify-between gap-8 sm:flex-row sm:items-end">
          <SectionTitle light label="05 / A experiência" title="Encontros que ficam na memória." description="Um espaço para os registros reais das edições anteriores." />
          <Camera size={48} strokeWidth={1} className="shrink-0 text-mint" aria-hidden="true" />
        </div>
        {event.gallery.length ? (
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {event.gallery.map((photo, index) => <figure key={`${photo.src}-${index}`} className="overflow-hidden rounded-2xl bg-white/5"><img src={photo.src} alt={photo.alt} width={photo.width} height={photo.height} loading="lazy" decoding="async" className="aspect-[4/3] w-full object-cover transition-transform duration-500 hover:scale-[1.03]" /></figure>)}
          </div>
        ) : (
          <div className="relative mt-10 flex min-h-64 flex-col items-center justify-center overflow-hidden rounded-3xl border border-white/15 bg-white/5 p-8 text-center">
            <div aria-hidden="true" className="absolute -right-8 -top-16 size-56 rounded-full border-[36px] border-mint/10" />
            <div aria-hidden="true" className="absolute -bottom-16 -left-14 size-48 rounded-full border-[32px] border-violet/15" />
            <Camera size={30} className="relative mb-4 text-mint" strokeWidth={1.5} aria-hidden="true" />
            <h3 className="relative font-display text-xl font-medium">Nossas histórias, em imagens.</h3>
            <p className="relative mt-3 max-w-md text-sm leading-7 text-white/70">A galeria receberá fotografias reais das edições anteriores. Acompanhe também o Instagram oficial.</p>
            <a href={event.instagramUrl} target="_blank" rel="noopener noreferrer" className="relative mt-5 inline-flex min-h-11 items-center gap-2 text-sm font-bold text-mint"><Instagram size={17} aria-hidden="true" /> @collab.day <ArrowUpRight size={16} aria-hidden="true" /><span className="sr-only"> (nova aba)</span></a>
          </div>
        )}
      </div>
    </section>
  );
}

function LocationSection() {
  return (
    <section id="localizacao" className="section-space bg-background" aria-label="Localização">
      <div className="shell">
        <SectionTitle label="06 / Localização" title="Nosso ponto de encontro." />
        <div className="mt-10 grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="rounded-3xl border border-border p-6 sm:p-8">
            <span className="mb-6 inline-flex size-12 items-center justify-center rounded-2xl bg-mint/25"><MapPin size={24} aria-hidden="true" /></span>
            <h3 className="font-display text-2xl font-semibold">{event.location.name}</h3>
            <p className="mt-2 text-base text-muted-foreground">{event.location.city}</p>
            <address className="mt-4 text-sm not-italic leading-7 text-muted-foreground">{event.location.fullAddress || 'Endereço completo e orientações de chegada em breve.'}</address>
            <div className="mt-7 space-y-5 border-t border-border pt-7">
              <div className="flex gap-3"><CalendarDays size={19} className="mt-0.5 shrink-0" aria-hidden="true" /><div><p className="text-sm font-bold">{event.dateLabel}</p><p className="mt-1 text-xs text-muted-foreground">Collab Day 2027</p></div></div>
              <div className="flex gap-3"><Clock3 size={19} className="mt-0.5 shrink-0" aria-hidden="true" /><div><p className="text-sm font-bold">Horários</p>{event.location.hours.length ? <dl className="mt-2 space-y-2 text-sm text-muted-foreground">{event.location.hours.map((hour, index) => <div key={index}><dt className="font-semibold">{hour.label}</dt><dd>{hour.value}</dd></div>)}</dl> : <p className="mt-1 text-sm text-muted-foreground">A programação de horários será divulgada.</p>}</div></div>
              {event.location.accessNotes.length > 0 && <div className="flex gap-3"><Navigation size={19} className="mt-0.5 shrink-0" aria-hidden="true" /><div><p className="text-sm font-bold">Acesso ao local</p><ul className="mt-2 space-y-2 text-sm leading-6 text-muted-foreground">{event.location.accessNotes.map((note, index) => <li key={index}>{note}</li>)}</ul></div></div>}
            </div>
            {event.location.directionsUrl && <a href={event.location.directionsUrl} target="_blank" rel="noopener noreferrer" className={buttonClasses('outline', 'mt-7 w-full')}>Como chegar <ArrowUpRight size={17} aria-hidden="true" /><span className="sr-only"> (nova aba)</span></a>}
          </div>
          {event.location.mapEmbedUrl ? <iframe title="Mapa da localização do Collab Day 2027" src={event.location.mapEmbedUrl} loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen className="min-h-80 h-full w-full rounded-3xl border border-border" /> : <div className="relative flex min-h-80 items-center justify-center overflow-hidden rounded-3xl bg-muted p-8"><div aria-hidden="true" className="absolute size-72 rounded-full border border-primary/10" /><div aria-hidden="true" className="absolute size-48 rounded-full border border-primary/10" /><div className="relative max-w-xs rounded-2xl border border-border bg-background p-7 text-center shadow-lg shadow-primary/5"><MapPin size={30} className="mx-auto mb-4 text-primary" aria-hidden="true" /><p className="font-display text-xl font-semibold">São José, Santa Catarina</p><p className="mt-3 text-sm leading-6 text-muted-foreground">O mapa será disponibilizado com a confirmação do endereço completo.</p></div></div>}
        </div>
      </div>
    </section>
  );
}

function FaqSection() {
  return (
    <section id="faq" className="section-space bg-muted" aria-label="Perguntas frequentes">
      <div className="shell grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
        <div><SectionTitle label="07 / FAQ" title="Vamos tirar suas dúvidas?" /><p className="mt-6 text-sm leading-7 text-muted-foreground">Informações para você se preparar para o encontro.</p><a href={event.instagramUrl} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex min-h-11 items-center gap-2 text-sm font-bold"><Instagram size={18} aria-hidden="true" /> Instagram oficial <ArrowUpRight size={16} aria-hidden="true" /><span className="sr-only"> (nova aba)</span></a></div>
        <div className="space-y-3">
          {event.faq.length ? event.faq.map((item, index) => (
            <details key={index} className="group rounded-2xl border border-border bg-background open:border-primary/30">
              <summary className="flex min-h-18 list-none items-center justify-between gap-5 rounded-2xl px-5 py-6 text-sm font-bold sm:px-6"><span>{item.question}</span><ChevronDown size={18} className="shrink-0 transition-transform group-open:rotate-180" aria-hidden="true" /></summary>
              <p className="whitespace-pre-line px-5 pb-6 text-sm leading-7 text-muted-foreground sm:px-6">{item.answer}</p>
            </details>
          )) : <EmptyState icon={<Check size={24} />} title="Informações em breve" description="As perguntas e respostas sobre o evento serão publicadas neste espaço." />}
        </div>
      </div>
    </section>
  );
}

function FinalCall() {
  return (
    <section className="relative isolate overflow-hidden bg-mint py-20 text-primary sm:py-24" aria-labelledby="final-title">
      <div aria-hidden="true" className="pointer-events-none absolute -left-28 -top-28 -z-10 size-96 rounded-full border-[60px] border-white/15" />
      <div aria-hidden="true" className="pointer-events-none absolute -bottom-40 -right-20 -z-10 size-[440px] rounded-full bg-gradient-to-br from-cyan/40 to-violet/30" />
      <div className="shell text-center">
        <p className="eyebrow">Collab Day 2027 · Vamos Crescer</p>
        <h2 id="final-title" className="mx-auto mt-6 max-w-3xl font-display text-4xl font-semibold leading-[1.05] tracking-[-0.055em] sm:text-6xl lg:text-7xl">{event.finalCall.title}</h2>
        <p className="mx-auto mt-6 max-w-xl text-base font-medium leading-7">{event.slogan}</p>
        {event.finalCall.paragraphs.map((paragraph, index) => <p key={index} className="mx-auto mt-4 max-w-2xl whitespace-pre-line text-base leading-7">{paragraph}</p>)}
        <a href="#ingressos" className={buttonClasses('primary', 'mt-8 min-h-14')}>Escolha seu ingresso <ArrowUpRight size={19} aria-hidden="true" /></a>
        <p className="mt-6 text-xs font-bold leading-6">{event.dateLabel} · {event.location.name} — {event.location.city}</p>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-primary pb-8 pt-14 text-white">
      <div className="shell">
        <div className="grid gap-10 border-b border-white/15 pb-12 sm:grid-cols-2 lg:grid-cols-[1.4fr_0.8fr_1fr]">
          <div><Brand light /><p className="mt-5 max-w-xs text-sm leading-7 text-white/75">{event.slogan}</p><p className="mt-5 text-xs font-semibold text-mint">{event.signature}</p></div>
          <nav aria-label="Navegação do rodapé"><p className="eyebrow mb-4 text-white/55">Explore</p><ul className="space-y-1">{navigation.map((item) => <li key={item.href}><a href={item.href} className="inline-flex min-h-9 items-center text-sm text-white/80 hover:text-mint">{item.label}</a></li>)}</ul></nav>
          <div><p className="eyebrow mb-4 text-white/55">Nos encontramos lá</p><p className="text-sm leading-7 text-white/80">{event.dateLabel}<br />{event.location.name}<br />{event.location.city}</p><a href={event.instagramUrl} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex min-h-11 items-center gap-2 text-sm font-bold text-mint"><Instagram size={18} aria-hidden="true" /> @collab.day <ArrowUpRight size={15} aria-hidden="true" /><span className="sr-only"> (nova aba)</span></a>{event.contacts.length > 0 && <ul className="mt-3 space-y-2">{event.contacts.map((contact, index) => <li key={index}><a href={contact.href} className="inline-flex min-h-11 items-center text-sm text-white/80 underline underline-offset-4 hover:text-mint">{contact.label}</a></li>)}</ul>}</div>
        </div>
        <div className="flex flex-col justify-between gap-3 pt-7 text-xs text-white/60 sm:flex-row"><p>© {event.year} Collab Day. Uma realização {event.organizer}.</p><p>Fotografia. Colaboração. Conexão.</p></div>
      </div>
    </footer>
  );
}

function HomePage() {
  return (
    <>
      <a href="#conteudo" className="fixed left-4 top-4 z-[100] -translate-y-32 rounded-lg bg-white px-5 py-3 font-bold text-primary shadow-lg focus:translate-y-0">Pular para o conteúdo</a>
      <SiteHeader />
      <main id="conteudo" className="min-h-screen bg-background text-foreground">
        <Hero />
        <TicketsSection />
        <AboutSection />
        <SpeakersSection />
        <PartnersSection />
        <GallerySection />
        <LocationSection />
        <FaqSection />
        <FinalCall />
      </main>
      <Footer />
    </>
  );
}
