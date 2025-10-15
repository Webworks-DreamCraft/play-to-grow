import { HashLink } from "react-router-hash-link";

const About = () => (
  <section className="md:bg-aboutBackground bg-auto md:bg-bottom">
    <section className="flex justify-center text-center bg-aboutHeader bg-cover bg-center text-palm-leaf px-3 py-14">
      <section className="max-w-3xl">
        <h1 className="font-patua text-[68px] pb-6">About Us</h1>
        <p className="font-prata text-lg text-center">
          We are committed to fostering an inclusive and supportive environment
          where all individuals, regardless of their neurological differences,
          feel valued, understood, and empowered.
        </p>
      </section>
    </section>
    <section className="lg:flex lg:items-center lg:text-left px-8 md:px-16 text-center pt-14 xl:pb-24 md:pt-16">
      <section className="">
        <h2 className="font-patua text-[34px] md:text-6xl">
          Meet Your Care Providers
        </h2>
        <p className="font-prata text-lg py-6 lg:pr-28">
          Hello! I'm Katie Gonzalez, the owner of Play to Grow and practicing
          Speech-Language Pathologist. I'm incredibly passionate about making a
          meaningful difference in the lives of children with communication
          challenges. My educational journey began at the University of Florida,
          where I earned my undergraduate degree in Communication Sciences and
          Disorders. Building on this foundation, I pursued my Master of Science
          degree at the University of South Florida, further honing my skills
          and knowledge in the field. It was during this time that I developed a
          deep appreciation for the complexity of communication and the profound
          impact it has on individuals' lives.
        </p>
      </section>
      <section className="flex justify-center lg:pl-2">
        <img className="rounded-lg max-w-[480px]" src="/katie.jpeg" />
      </section>
    </section>
    <section className="text-wheat-field-dark md:container mx-auto">
      <section className="lg:flex lg:items-center lg:text-left px-8 md:px-16 text-center pt-4 xl:pb-24">
        <section className="">
          <p className="font-prata text-lg py-6 lg:pr-28">
            I'm Erin! I was raised in Gainesville, received my undergraduate
            degree from the University of Florida, and my master’s degree from
            Florida State University. I have worked in a variety of settings,
            including schools and outpatient clinics, and have extensive
            experience supporting children with diverse communication profiles,
            including those with complex communication needs. With specialized
            training in AAC and gestalt language processing, my approach is
            rooted in compassionate collaboration, total communication, and
            neurodiversity-affirming practices. I am passionate about empowering
            caregivers to build confidence in supporting their child’s
            communication growth, celebrating each child’s unique strengths, and
            helping children express themselves in meaningful ways.
          </p>
        </section>
        <section className="flex justify-center lg:pl-2">
          <img className="rounded-lg max-w-[480px]" src="/erin.png" />
        </section>
      </section>
      <section className="lg:flex lg:items-center lg:text-left px-8 md:px-16 text-center pt-4 xl:pb-24">
        <section className="">
          <p className="font-prata text-lg py-6 lg:pr-28">
            Hi! I’m Sabrina, one of the Speech-Language Pathologists at Play to
            Grow.
            <br />
            <br />I received my undergraduate degree from the University of
            South Florida and my master’s degree from Florida State University.
            From starting as a Speech-Language Pathologist Assistant to now, I
            have worked in the field for a total of 5 years. I have a special
            passion for working with non-speaking and minimally speaking
            Autistic children, and I’m a strong advocate for using AAC to
            support meaningful, authentic communication.
          </p>
        </section>
        <section className="flex justify-center lg:pl-2">
          <img className="rounded-lg max-w-[480px]" src="/Sabrina.jpg" />
        </section>
      </section>
      <section className="lg:flex lg:items-center lg:text-left px-8 md:px-16 text-center pt-4 xl:pb-24">
        <section className="">
          <p className="font-prata text-lg py-6 lg:pr-28">
            Hey! I’m Amy Bouchard, I’m a Speech Language Pathology Assistant
            (SLPA) here at Play to Grow. I graduated from the University of
            Florida (go gators!) with my bachelor’s in Communication Sciences
            and Disorders. I am passionate about and have experience working
            with high-tech AAC, kids with ASD, and the Natural Language
            Acquisition (NLA/GLP) frame-work. One of my priorities is
            incorporating neurodiversity-affirming practices, and I am always
            seeking to learn more. I look forward to growing with you!
          </p>
        </section>
        <section className="flex justify-center lg:pl-2">
          <img className="rounded-lg max-w-[480px]" src="/Amy.jpg" />
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
