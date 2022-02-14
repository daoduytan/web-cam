import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  className?: string
}

function Paragraph({ children, className, ...props }: Props) {
  let classNames = 'text-dark dark:text-white';

  if (className) {
    classNames = `${classNames} ${className}`;
  }

  return (
    <p {...props} className={classNames}>
      {children}
    </p>
  );
}

export { Paragraph };
