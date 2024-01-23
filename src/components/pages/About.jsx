import { HashLink } from "react-router-hash-link";

const About = () => (
    <section className="md:bg-aboutBackground bg-auto md:bg-bottom">
      <section className="text-wheat-field-dark md:container mx-auto">
        <section className="flex justify-center text-center bg-aboutHeader bg-cover bg-center text-palm-leaf px-3 py-14">
          <section className="max-w-3xl">
            <h1 className="font-patua text-[68px] pb-6">About Us</h1>
            <p className="font-prata text-lg text-center">
              I am committed to fostering an inclusive and supportive
              environment where all individuals, regardless of their
              neurological differences, feel valued, understood, and empowered.
            </p>
          </section>
        </section>
        <section className="lg:flex lg:items-center lg:text-left px-8 md:px-16 text-center pt-14 xl:pb-24 md:pt-16">
          <section className="">
            <h2 className="font-patua text-[34px] md:text-6xl">
              Meet Your Care Provider
            </h2>
            <p className="font-prata text-lg py-6 lg:pr-28">
              ​​Hello! I'm Katie Gonzalez, and I'm passionate about making a
              meaningful difference in the lives of children with communication
              challenges. My educational journey began at the University of
              Florida, where I earned my undergraduate degree in Communication
              Sciences and Disorders. Building on this foundation, I pursued my
              Master of Science degree at the University of South Florida,
              further honing my skills and knowledge in the field. It was during
              this time that I developed a deep appreciation for the complexity
              of communication and the profound impact it has on individuals'
              lives.
            </p>
          </section>
          <section className="flex justify-center lg:pl-2">
            <img className="rounded-lg max-w-[480px]" src="/katie.jpeg" />
          </section>
        </section>
        <section className="flex flex-col justify-center text-center px-7 pb-8 md:py-28">
          <h2 className="py-8 font-patua text-[34px] md:text-[56px]">
            Let’s Start Working Together !
          </h2>
          <section className="mx-auto">
            <HashLink to="/#form">
              <p className="font-prata w-[250px] sm:block bg-wheat-field-middle hover:bg-wheat-field-light text-wheat-field-dark rounded-xl py-3 px-4">
                Schedule Consultation
              </p>
            </HashLink>
          </section>
        </section>
      </section>
    </section>
  );

export default About;
