import { HashLink } from "react-router-hash-link";

const Services = () => (
    <section className="md:bg-servicesBackground bg-auto md:bg-bottom">
      <section className="text-wheat-field-dark md:container mx-auto">
        <section className="flex justify-center text-center bg-servicesHeader bg-cover bg-center text-palm-leaf px-3 py-14">
          <section className="max-w-3xl">
            <h1 className="font-patua text-[68px] pb-6">Our Services</h1>
            <p className="font-prata text-lg text-center">
              Your child’s goals and objectives will be addressed in a safe and
              supportive environment where they can freely express themselves
              through movement, art, toys, and other creative activities.
            </p>
          </section>
        </section>
        <section>
          <section className="lg:grid-cols-2 lg:grid lg:items-center lg:text-left px-8 md:px-16 text-center pt-14 xl:pb-24 md:pt-16">
            <section className="">
              <h2 className="font-patua text-[34px] md:text-6xl">
                Play-based child-led therapy
              </h2>
              <p className="font-prata text-lg py-6 lg:pr-28">
                ​Play-based child-led therapy is a specialized approach I follow
                to address various emotional, behavioral, and developmental
                differences in children. This approach centers around the
                child's natural inclination to play and uses it as a medium for
                therapeutic intervention.
                <br />
                <br /> Through play, children can explore their thoughts and
                feelings, develop problem-solving skills, and gain insight into
                their experiences. Your child’s strengths and interests will be
                the driving force to build on the intrinsic motivation to
                communicate with others and learn novel skills. 
              </p>
              <section className="text-center mx-auto">
                <HashLink to="/#form">
                  <p className="font-prata mx-auto lg:mx-0 w-[250px] sm:block bg-wheat-field-middle hover:bg-wheat-field-light text-wheat-field-dark rounded-xl py-3 px-4">
                    Schedule Consultation
                  </p>
                </HashLink>
              </section>
            </section>
            <section className="hidden lg:flex justify-center max-w-[675px] h-[600px] lg:pl-2">
              <img className="rounded-lg object-cover" src="/katie_top.jpeg" />
            </section>
          </section>
        </section>
        <section>
          <section className="lg:flex lg:items-center lg:text-left px-8 md:px-16 text-center pt-14 xl:pb-24 md:pt-16">
            <section className="hidden md:flex justify-center lg:pr-2">
              <img
                className="rounded-lg max-w-[480px]"
                src="/katie_bottom.jpeg"
              />
            </section>
            <section className="lg:pl-12">
              <h2 className="font-patua text-[34px] md:text-[42px]">
                Total Communication Approach
              </h2>
              <p className="font-prata text-lg py-6">
                A total communication approach is an inclusive and flexible
                communication strategy used to support individuals with various
                communication needs, including those with speech and language
                difficulties, hearing impairments, and other communication
                challenges.
                <br />
                <br /> This approach recognizes that communication is a
                fundamental human right and seeks to provide, reinforce, and
                honor multiple means of communication. This includes, but is not
                limited to: verbalizations (words), vocalizations, gestures,
                sign language, augmentative and alternative communication (AAC),
                body language, and facial expressions.
              </p>
              <h3 className="font-patua text-[24px] pb-4">Specialties</h3>
              <section className="flex flex-col md:grid-cols-2 md:grid px-12 md:px-0 text-left font-prata text-base">
                <section>
                  <ul className="list-disc pb-4 md:pb-0">
                    <li className="pb-2">Augmentative and Alternative Communication (AAC)</li>
                    <li>Autism Spectrum Disorder (ASD)</li>
                  </ul>
                </section>
                <section>
                  <ul className="list-disc">
                    <li className="pb-2">Early Intervention</li>
                    <li className="pb-2">Emotional Regulation</li>
                    <li>Gestalt Language Processing</li>
                  </ul>
                </section>
              </section>
            </section>
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

export default Services;
