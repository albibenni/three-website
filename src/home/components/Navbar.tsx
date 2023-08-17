import { useState } from 'react';
import { Link } from 'react-router-dom';
import { styles } from '../../styles.ts';
import { logo, menu, close } from '../assets';
import { navLinks } from '../constants/recap.ts';

export default function Navbar() {
  const [active, setActive] = useState<string>('');
  const [toggle, setToggle] = useState<boolean>(true);
  // const router = useRouter();

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        {/* eslint-disable-next-line react/jsx-no-undef */}
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive('');
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
          <p className="text-white text-[18px] font-bold object-contain cursor-pointer flex">
            Alberto &nbsp;
            <span className="sm:block hidden">| Software Engineer</span>
          </p>
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map(link => (
            <li
              key={link.id}
              className={`${
                active === link.title ? 'text-white' : 'text-secondary'
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => {
                setActive(link.title);
                // router.push(`#${link.id}`);
              }}
            >
              <a> {link.title} </a>
            </li>
          ))}
        </ul>
        {/*MOBILE*/}
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? menu : close}
            alt="menu"
            className="w-[29px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(prevState => !prevState)}
          />
        </div>
        <div
          className={`${
            toggle ? 'hidden' : 'flex'
          } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
        >
          <ul className="list-none flex justify-end items-start flex-col gap-4">
            {navLinks.map(link => (
              <li
                key={link.id}
                className={`${
                  active === link.title ? 'text-white' : 'text-secondary'
                } font-poppins font-medium text-[16px] cursor-pointer`}
                onClick={() => {
                  setToggle(prevState => !prevState);
                  setActive(link.title);
                  // router.push(`#${link.id}`);
                }}
              >
                <a> {link.title} </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
