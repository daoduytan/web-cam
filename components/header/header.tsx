import { useEffect, useState } from 'react';
import { Container } from '../grid';
import { LogoHeader } from './logo-header';
import { Navigation } from './navigation';
import { useTheme } from '../../context'
import styles from './header.module.css'

const TOP_HEIGHT = 100;

function Header() {
  const [isFixed, setIsFixed] = useState<boolean>(false)
  const { theme } = useTheme()

  useEffect(() => {
    function handleScroll() {
      setIsFixed(document.documentElement.scrollTop > TOP_HEIGHT)
    }

    document.addEventListener('scroll', handleScroll)
    return () => {
      document.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const classNameBg = theme === 'dark' ? 'bg-black' : 'bg-white'

  const className = isFixed ? `fixed w-full top-0 transition-all duration-150 ease-out ${classNameBg} z-40` : '';

  return (
    <header className={className}>
      <Container>
        <div className="flex h-16 md:h-20 justify-between items-center">
          <LogoHeader />

          <Navigation />
        </div>
      </Container>
    </header>
  );
}

export { Header };
