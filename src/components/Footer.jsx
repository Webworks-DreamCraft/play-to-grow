import Logo from "./reusables/Logo"

const Footer = () => {
  return (
    <section className="flex flex-col justify-center font-prata">
      <section className="flex justify-center">
        <Logo width="232" height="238"/>
      </section>
      <section className="flex justify-center text-lg">
        <nav className="flex justify-around w-full">
          <a>Home</a>
          <a>Services</a>
          <a>About Us</a>
        </nav>
      </section>
      <section>
        <p className="text-sm">© 2023 Play To Grow. All rights reserved.</p>
      </section>
    </section>
  )
}

export default Footer