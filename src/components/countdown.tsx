import { useEffect, useState } from 'react';
import { event } from '@/config/event';

export function Countdown() {
  const [remaining, setRemaining] = useState<number | null>(null);
  useEffect(() => {
    const update = () => setRemaining(Math.max(0, new Date(event.countdownTarget).getTime() - Date.now()));
    update();
    const interval = window.setInterval(update, 1000);
    return () => window.clearInterval(interval);
  }, []);

  if (remaining === 0) {
    return <p className="rounded-2xl border border-white/20 px-5 py-4 font-display text-sm text-mint">A data do Collab Day 2027 chegou. Juntos somos especiais!</p>;
  }

  const seconds = remaining === null ? null : Math.floor(remaining / 1000);
  const values = [
    { label: 'Dias', value: seconds === null ? null : Math.floor(seconds / 86400) },
    { label: 'Horas', value: seconds === null ? null : Math.floor(seconds / 3600) % 24 },
    { label: 'Min', value: seconds === null ? null : Math.floor(seconds / 60) % 60 },
    { label: 'Seg', value: seconds === null ? null : seconds % 60 },
  ];

  return (
    <div className="max-w-sm">
      <p className="mb-3 text-xs text-white/75">Contagem para 16 de fevereiro de 2027</p>
      <div role="timer" aria-live="off" aria-label="Contagem regressiva para a data do congresso" className="grid grid-cols-4 gap-3">
        {values.map(({ label, value }) => (
          <div key={label} className="rounded-xl border border-white/15 bg-white/5 px-2 py-3 text-center">
            <span className="block font-display text-2xl font-medium tabular-nums sm:text-3xl">{value === null ? '—' : String(value).padStart(2, '0')}</span>
            <span className="mt-1 block text-[10px] font-semibold uppercase tracking-widest text-white/65">{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
