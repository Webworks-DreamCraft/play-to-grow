import Logo from "./reusables/Logo"

const Footer = () => {
  return (
    <section className="flex flex-col justify-center font-prata">
      <section className="flex justify-center">
        <Logo width="232" height="238"/>
      </section>
      <section className="flex justify-center my-8 text-lg">
        <nav className="flex justify-between w-9/12">
          <a>Home</a>
          <a>Services</a>
          <a>About Us</a>
        </nav>
      </section>
      <section className="flex justify-center mt-8">
        <p className="text-sm">© 2023 Play To Grow. All rights reserved.</p>
      </section>
    </section>
  )
}

export default Footer