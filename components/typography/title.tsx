import { ReactNode } from 'react';

interface TagProps {
  className: string;
  level?: '1' | '2' | '3' | '4' | '5' | '6';
  children: ReactNode;
}

const TitleTag = ({ children, level, ...props }: TagProps) => {
  if (level === '2') {
    return <h2 {...props}>{children}</h2>;
  }
  return <h1 {...props}>{children}</h1>;
};

interface Props {
  level?: '1' | '2' | '3' | '4' | '5' | '6';
  children: ReactNode;
  className?: string;
}

function Title({ level, children, className, ...props }: Props) {
  let classNames = 'text-dark dark:text-white';
  if (className) {
    classNames = `${classNames} ${className}`;
  }
  return (
    <TitleTag {...props} className={classNames}>
      {children}
    </TitleTag>
  );
}

export { Title };
