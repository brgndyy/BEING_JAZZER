import type { InputHTMLAttributes } from 'react';
import { myFont } from '@/assets/fonts/font';
import { background } from './input.css';
import { myStyle } from '@/_styles/vars.css';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  variant: keyof typeof background;
}

export default function Input({ variant, className, ...props }: Props) {
  const classNames = ` ${background[variant]} ${myStyle} ${className || ''} ${myFont.className}`;

  return <input className={classNames} {...props} />;
}
