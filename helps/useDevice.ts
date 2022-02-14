import { useEffect, useState } from 'react';

export type TDevice = 'mobile' | 'table' | 'desktop';

export const useDevice = () => {
  const [device, setIsMobile] = useState<TDevice>('desktop');

  useEffect(() => {
    const value =
      window.innerWidth < 768
        ? 'mobile'
        : window.innerWidth >= 768 && window.innerWidth < 1080
        ? 'table'
        : 'desktop';
    setIsMobile(value);
  }, []);

  return device;
};
