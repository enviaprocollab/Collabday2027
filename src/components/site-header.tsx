import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { event, navigation } from '@/config/event';
import { Button, buttonClasses } from '@/components/ui/button';

export function Brand({ light = false }: { light?: boolean }) {
  return (
    <a href="/" aria-label="Collab Day 2027 — início" className={`inline-flex shrink-0 items-center gap-3 ${light ? 'text-white' : 'text-foreground'}`}>
      {event.logo ? (
        <img src={event.logo.src} alt={event.logo.alt} width={event.logo.width} height={event.logo.height} className="h-10 w-auto max-w-44 object-contain" />
      ) : (
        <span className="font-display text-2xl font-bold tracking-[-0.07em]">collab<span className={light ? 'text-mint' : 'text-foreground'}> day</span><span className="ml-2 align-top text-[10px] font-medium tracking-normal">2027</span></span>
      )}
    </a>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false);
        toggle.current?.focus();
      }
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur-md">
      <div className="shell flex h-20 items-center justify-between gap-6">
        <Brand />
        <nav aria-label="Navegação principal" className="hidden items-center gap-6 lg:flex">
          {navigation.map((item) => <a key={item.href} href={item.href} className="text-xs font-bold text-muted-foreground transition-colors hover:text-foreground">{item.label}</a>)}
        </nav>
        <a href="#ingressos" className={buttonClasses('primary', 'hidden sm:inline-flex')}>Quero meu ingresso <ArrowUpRight size={17} aria-hidden="true" /></a>
        <button ref={toggle} type="button" onClick={() => setOpen(!open)} aria-label={open ? 'Fechar menu' : 'Abrir menu'} aria-expanded={open} aria-controls="mobile-navigation" className="flex size-12 items-center justify-center rounded-xl border border-border text-foreground hover:bg-muted lg:hidden">
          {open ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
        </button>
      </div>
      <nav id="mobile-navigation" aria-label="Navegação mobile" hidden={!open} className="border-t border-border bg-background px-5 py-5 lg:hidden">
        <div className="mx-auto flex max-w-xl flex-col gap-1">
          {navigation.map((item) => <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="rounded-lg px-4 py-3 text-sm font-bold hover:bg-muted">{item.label}</a>)}
          <a href="#ingressos" onClick={() => setOpen(false)} className={buttonClasses('primary', 'mt-3')}>Quero meu ingresso <ArrowUpRight size={18} aria-hidden="true" /></a>
        </div>
      </nav>
    </header>
  );
}
