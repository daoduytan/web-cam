import Link from 'next/link';
import { Container } from '../grid';
import { Logo } from '../logo';
import { Navigation } from './navigation';

function Header() {
  return (
    <header>
      <Container>
        <div className="py-10 flex justify-between items-center">
          <div style={{ maxWidth: 300 }}>
            <Link href="/">
              <a>
                <Logo />
              </a>
            </Link>
          </div>
          <div>
            <Navigation />
          </div>
        </div>
      </Container>
    </header>
  );
}

export { Header };
