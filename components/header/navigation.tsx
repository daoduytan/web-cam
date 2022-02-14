import { MenuIcon } from '@heroicons/react/solid';
import { useEffect, useRef, useState } from 'react';
import Media from 'react-media';
import { Text } from '..';
import { LogoHeader } from './logo-header';
import { Menu } from './menu';


const MenuMobile = () => {
  const ref = useRef<any>()
  const [visible, setVisible] = useState<boolean>(false)

  const toggle = () => {
    setVisible(v => !v)
  }

  useEffect(() => {
    function handleClickOutside(event: any) {
      if (ref.current && !ref.current.contains(event.target)) {
        setVisible(false)
      }
    }

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    }
  }, [])

  return (
    <div ref={ref}>
      <button onClick={toggle} >
        <Text>
          <MenuIcon className='w-8' />
        </Text>
      </button>

      <div className={`fixed z-40 bg-white dark:bg-black top-0 left-0 ${visible ? 'h-full' : 'h-0'} ${visible ? 'visible' : 'invisible'} w-full flex flex-col justify-between items-center`}>
        <div className="w-full flex px-4 items-center justify-between">
          <div className='h-16 flex items-center relative'>
            <LogoHeader />
          </div>
          <button onClick={toggle}>
            <Text>
              Close
            </Text>
          </button>
        </div>

        <Menu />

        <Text className='inline-block pb-4'>
          &copy; 2022
        </Text>
      </div>
    </div >
  )
}

function Navigation() {
  return (

    <Media query={{ maxWidth: 767 }}>
      {matches =>
        matches ? (
          <MenuMobile />
        ) : (
          <Menu />
        )
      }
    </Media>

  );
}

export { Navigation };
