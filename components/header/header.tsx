import { Container } from '../grid';
import { LogoHeader } from './logo-header';
import { Navigation } from './navigation';

function Header() {
  return (
    <header>
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
