import Link from 'next/link';
import { Text } from '../text';
import { ToggleTheme } from '../toggle-theme';

function Navigation() {
  return (
    <ul className="list-none inline-flex">
      <li>
        <Link href="/projects">
          <a>
            <Text>My projects</Text>
          </a>
        </Link>
      </li>
      <li className="mx-10">
        <Link href="/about">
          <a>
            <Text>It is all me</Text>
          </a>
        </Link>
      </li>
      <li>
        <ToggleTheme>
          <span className="cursor-pointer">
            <Text>( Light it )</Text>
          </span>
        </ToggleTheme>
      </li>
    </ul>
  );
}

export { Navigation };
