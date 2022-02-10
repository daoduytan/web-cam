import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

function Text({ children, ...props }: Props) {
  return (
    <span {...props} className="text-dark dark:text-white">
      {children}
    </span>
  );
}

export { Text };
