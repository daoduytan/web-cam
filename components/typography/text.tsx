import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  className?: string;
}

function Text({ children, className, ...props }: Props) {
  let classNames = 'text-dark dark:text-white';
  if (className) {
    classNames = `${classNames} ${className}`;
  }

  return (
    <span {...props} className={classNames}>
      {children}
    </span>
  );
}

export { Text };
