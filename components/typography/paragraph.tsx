import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

function Paragraph({ children, ...props }: Props) {
  return (
    <p {...props} className="text-dark dark:text-white">
      {children}
    </p>
  );
}

export { Paragraph };
