'use client';
import Image from 'next/image';
import { useState } from 'react';
import homeIcon from '../../../public/img/icon/home-icon.svg';
import homeIconBlue from '../../../public/img/icon/home-icon-blue.svg';
import Link from 'next/link';

const Menu = () => {
  const [select, setSelect] = useState(false);

  return (
    <>
      <nav>
        <Link href={'/dashboard/home'}>
          <Image
            src={select ? homeIconBlue : homeIcon}
            width={24}
            height={24}
            alt="icon-home"
          />
          Home
        </Link>
      </nav>
    </>
  );
};

export default Menu;
