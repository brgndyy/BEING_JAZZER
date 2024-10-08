import { ButtonHTMLAttributes, PropsWithChildren } from 'react';
import { background, baseButtonStyle } from './button.css';
import { myStyle } from '@/_styles/vars.css';
import { myFontClass } from '@/app/font.css';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: keyof typeof background;
}

export default function Button({
  variant,
  children,
  className,
  ...props
}: PropsWithChildren<ButtonProps>) {
  const classNames = ` ${background[variant]} ${myStyle} ${myFontClass} ${className ?? ''} ${baseButtonStyle}`;

  return (
    <button className={classNames} {...props}>
      {children}
    </button>
  );
}
