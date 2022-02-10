import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

function Background({ children }: Props) {
  return (
    <div className="pb-16 bg-white dark:bg-black min-h-screen">{children}</div>
  );
}

export { Background };
