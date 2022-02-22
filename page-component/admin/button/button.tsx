import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

interface Props extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {

}

const Button = ({ children, ...props }: Props) => {
  const className = 'inline-block px-4 py-2 border rounded text-sm bg-white';

  return <button className={className} {...props} >{children}</button>;
};

export { Button };
