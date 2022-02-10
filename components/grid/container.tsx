import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}
function Container({ children }: Props) {
  return <div className="container pl-2 pr-2 mx-auto">{children}</div>;
}

export { Container };
