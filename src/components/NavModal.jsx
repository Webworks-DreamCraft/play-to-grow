import { Transition } from "@headlessui/react";
import { Fragment } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import Logo from "../../public/logo_large.png";

const NavModal = ({ isModalShowing, closeModal }) => (
  <Transition.Root show={isModalShowing}>
    <SlideOverLayer>
      <section className="flex flex-row text-wheat-field-middle justify-end py-4 items-center">
        {/* X */}
        <svg
          onClick={closeModal}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="hover:wheat-field-dark w-14 mx-6 my-1"
        >
          <path d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" />
        </svg>
      </section>
      {/* Mobile Menu Items */}
      <section className="flex flex-col items-center font-prata">
        <section className="flex flex-col w-10/12 text-wheat-field-dark">
          <ul className="flex flex-col w-full my-2 xs:my-4 text-2xl list-inside pl-2 xs:pl-4">
            <li onClick={closeModal} className="mx-2 my-6 py-1">
              <HashLink to="/#">Home</HashLink>
            </li>
            <li onClick={closeModal} className="mx-2 my-6 py-1">
              <Link to="/services">Services</Link>
            </li>
            <li onClick={closeModal} className="mx-2 my-6 py-1">
              <Link to="/about">About Us</Link>
            </li>
          </ul>
          {/* Schedule Consultation Button */}
          <a className="mx-auto">
            <button
              className="bg-wheat-field-middle hover:bg-wheat-field-light text-wheat-field-dark rounded-lg py-3 px-4 max-w-[275px] text-md"
              onClick={closeModal}
            >
              Schedule Consultation
            </button>
          </a>
        </section>
        {/* Logo image */}
        <section className="flex justify-center mt-6 xs:mt-12">
          <a href="#" onClick={closeModal}>
            <img src={Logo}></img>
          </a>
        </section>
      </section>
    </SlideOverLayer>
  </Transition.Root>
);

export default NavModal;

const SlideOverLayer = ({ children }) => (
  <Transition.Child
    as={Fragment}
    enter="transform transition ease-in-out duration-500"
    enterFrom="translate-x-full"
    enterTo="translate-x-0"
    leave="transform transition ease-in-out duration-500 delay-100"
    leaveFrom="translate-x-0"
    leaveTo="translate-x-full"
  >
    <section className="fixed flex flex-col h-screen inset-0 z-10 overscroll-contain overflow-hidden bg-palm-leaf">
      {children}
    </section>
  </Transition.Child>
);
