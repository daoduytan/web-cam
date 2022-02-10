import { cloneElement, ReactElement } from 'react';

interface Props {
  children: ReactElement;
}
function Button({ children, ...rest }: Props) {
  return cloneElement(children, {
    ...rest,
    className:
      'cursor-pointer inline-block border rounded-3xl px-5 py-2 text-dark dark:text-white border-black dark:border-white',
  });
}

export { Button };
