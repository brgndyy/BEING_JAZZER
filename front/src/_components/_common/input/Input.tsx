import type { InputHTMLAttributes } from 'react';
import { myFontClass } from '@/app/font.css';
import { background, baseInputStyle } from './input.css';
import { myStyle } from '@/_styles/vars.css';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  variant: keyof typeof background;
}

export default function Input({ variant, className, ...props }: Props) {
  const classNames = ` ${background[variant]} ${myStyle} ${className || ''} ${myFontClass} ${baseInputStyle}`;

  return <input className={classNames} {...props} />;
}
