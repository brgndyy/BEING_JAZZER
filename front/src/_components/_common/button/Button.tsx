import { ButtonHTMLAttributes, PropsWithChildren } from 'react';
import { background } from './button.css';
import { myStyle } from '@/_styles/vars.css';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: keyof typeof background;
}

export default function Button({
  variant,
  children,
  className,
  ...props
}: PropsWithChildren<ButtonProps>) {
  const classNames = ` ${background[variant]} ${myStyle} ${className || ''}`;

  return (
    <button className={classNames} {...props}>
      {children}
    </button>
  );
}
