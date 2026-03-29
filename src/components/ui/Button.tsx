import { motion } from 'framer-motion';
import type { ComponentProps, MouseEvent } from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'chrome';

interface ButtonProps extends ComponentProps<'a'> {
  variant?: ButtonVariant;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    'bg-brand-primary text-surface-base hover:bg-brand-light font-semibold shadow-lg shadow-brand-primary/20',
  secondary:
    'glass text-text-primary hover:bg-white/10 font-medium',
  outline:
    'glass text-text-primary hover:bg-white/10 font-medium',
  chrome:
    'btn-chrome font-semibold',
};

function handleChromeMouseMove(e: MouseEvent<HTMLAnchorElement>) {
  const rect = e.currentTarget.getBoundingClientRect();
  const x = ((e.clientX - rect.left) / rect.width) * 100;
  const y = ((e.clientY - rect.top) / rect.height) * 100;
  e.currentTarget.style.setProperty('--mouse-x', `${x}%`);
  e.currentTarget.style.setProperty('--mouse-y', `${y}%`);
}

export function Button({
  variant = 'primary',
  className = '',
  children,
  ...props
}: ButtonProps) {
  return (
    <motion.a
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      onMouseMove={variant === 'chrome' ? handleChromeMouseMove : undefined}
      className={`inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-sm tracking-wide transition-all duration-300 cursor-pointer ${variantClasses[variant]} ${className}`}
      {...props}
    >
      {children}
    </motion.a>
  );
}
