import { ReactNode } from 'react';
import styles from './container.module.css'

interface Props {
  children: ReactNode;
}

function Container({ children }: Props) {
  return <div className={`${styles.container}  pl-4 pr-4 mx-auto`}>{children}</div>;
}

export { Container };
