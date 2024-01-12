import { Link } from "react-router-dom";
import Logo from "../../public/logo_large.png";
import { HashLink } from "react-router-hash-link";

const Navbar = ({ openModal }) => (
  <section className="bg-palm-leaf sticky top-0 z-50">
    <section className="md:container mx-auto">
      <nav className="flex p-2 font-prata sm:text-sm">
        <Link to="/" className="max-w-[70px] mr-auto">
          <img src={Logo} alt="Play to Grow Logo" />
        </Link>
        <svg
          onClick={openModal}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="sm:hidden fill-wheat-field-middle w-12"
        >
          <path d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z" />
        </svg>
        <ul className="hidden sm:flex sm:flex-row mx-10 list-outside items-center sm:mx-0">
          <HashLink
            to="/#home"
            className="mr-7 py-2 w-[65px] text-center hover:border-wheat-field-dark hover:border-b-2"
          >
            Home
          </HashLink>
          <Link
            to="/services"
            className="mr-8 py-2 w-[65px] text-center hover:border-wheat-field-dark hover:border-b-2"
          >
            Services
          </Link>
          <Link
            to="/about"
            className="mr-8 py-2 w-[65px] text-center hover:border-wheat-field-dark hover:border-b-2"
          >
            About Us
          </Link>
        </ul>
        <section className="hidden sm:flex sm:items-center sm:mr-8">
          {/* Hashlink allows navigation to #form in Home page */}
          <HashLink to="/#form">
            <p className="hidden sm:block bg-wheat-field-middle hover:bg-wheat-field-light text-wheat-field-dark rounded-xl py-3 px-4">
              Schedule Consultation
            </p>
          </HashLink>
        </section>
      </nav>
    </section>
  </section>
);

export default Navbar;
