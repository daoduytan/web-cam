import { Button } from '../button';

function Socials() {
  return (
    <>
      <Button>
        <a href="#">bycamtran@gmail.com</a>
      </Button>
      <span className='flex gap-4'>
        <Button>
          <a href="#">Behance</a>
        </Button>
        <Button>
          <a href="#">Linkedin</a>
        </Button>
      </span>
    </>
  );
}

export { Socials };
