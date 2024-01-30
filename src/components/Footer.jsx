import { Link } from "react-router-dom";

const Footer = () => (
  <section className="flex flex-col lg:bg-footerBackground bg-cover bg-center font-prata bg-palm-leaf">
    <section className="flex justify-center mt-8">
      <img src="logo.png" width="232" height="238"/>
    </section>
    <section className="flex justify-center py-8 text-lg">
      <nav className="flex justify-around w-11/12 xxs:w-9/12 sm:w-[276px]">
        <Link to="/">Home</Link>
        <Link to="/services">Services</Link>
        <Link to="/about">About Us</Link>
      </nav>
    </section>
    <section className="w-full flex justify-center">
      <section className="flex justify-center w-11/12 xs:w-10/12 border-b-[1px] border-solid border-wheat-field-dark"></section>
    </section>
    <section className="flex justify-center pb-4 pt-8">
      <p className="text-sm">© 2023 Play To Grow. All rights reserved.</p>
    </section>
  </section>
);

export default Footer;
