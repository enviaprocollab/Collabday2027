import type { ButtonHTMLAttributes } from 'react';

export function buttonClasses(variant: 'primary' | 'mint' | 'outline' = 'primary', className = '') {
  const variants = {
    primary: 'bg-primary text-primary-foreground hover:bg-primary/90',
    mint: 'bg-mint text-primary hover:bg-mint/85',
    outline: 'border border-border bg-background text-foreground hover:bg-muted',
  };
  return `inline-flex min-h-12 items-center justify-center gap-2 rounded-xl px-6 py-3 text-sm font-extrabold transition-colors disabled:cursor-not-allowed disabled:bg-muted disabled:text-muted-foreground disabled:shadow-none ${variants[variant]} ${className}`;
}

export function Button({ className = '', variant = 'primary', ...props }: ButtonHTMLAttributes<HTMLButtonElement> & { variant?: 'primary' | 'mint' | 'outline' }) {
  return <button className={buttonClasses(variant, className)} {...props} />;
}
