import { ButtonHTMLAttributes, PropsWithChildren } from 'react';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {}

export default function Button({ children, ...props }: PropsWithChildren<Props>) {
  return <button {...props}>{children}</button>;
}
