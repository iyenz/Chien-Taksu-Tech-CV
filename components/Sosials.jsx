'use client';
import { FaInstagram } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";

import {
  RiGithubFill,
} from 'react-icons/ri';

import Link from 'next/link';

const icons = [
  {
    path: 'https://github.com/iyenz',
    name: <RiGithubFill />,
  },
  {
    path: 'https://www.instagram.com/ig.chiient?igsh=bmRzbGh6MmU3d2E0',
    name: <FaInstagram />,
  },
]

const Sosials = ({ containerStyle, iconsStyle}) => {
  return (
    <div className={`${containerStyle}`}>
      {icons.map((icon, index) => {
          return (
          <Link href={icon.path} key={index}>
            <div className={`${iconsStyle}`}>{icon.name}</div>
          </Link>
      )
      })}
    </div>
  );
};

export default Sosials
