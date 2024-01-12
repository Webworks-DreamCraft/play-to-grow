import { HashLink } from "react-router-hash-link";

const Services = () => {
  return (
    <section className="md:bg-aboutBackground bg-auto md:bg-bottom">
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
          <section className="lg:flex lg:items-center lg:text-left px-8 md:px-16 text-center pt-14 xl:pb-24 md:pt-16">
            <section className="">
              <h2 className="font-patua text-[34px] md:text-6xl">
                Play-based child-led therapy
              </h2>
              <p className="font-prata text-lg py-6 lg:pr-28">
                ​Play-based child-led therapy is a specialized approach I follow
                to address various emotional, behavioral, and developmental
                differences in children. This approach centers around the
                child's natural inclination to play and uses it as a medium for
                therapeutic intervention. Through play, children can explore
                their thoughts and feelings, develop problem-solving skills, and
                gain insight into their experiences. Your child’s strengths and
                interests will be the driving force to build on the intrinsic
                motivation to communicate with others and learn novel skills. 
              </p>
              <section className="mx-auto">
                <HashLink to="/#form">
                  <p className="font-prata w-[250px] sm:block bg-wheat-field-middle hover:bg-wheat-field-light text-wheat-field-dark rounded-xl py-3 px-4">
                    Schedule Consultation
                  </p>
                </HashLink>
              </section>
            </section>
            <section className="flex justify-center lg:pl-2">
              <img className="rounded-lg max-w-[480px]" src="/katie.jpeg" />
            </section>
          </section>
        </section>
        <section>
          <section className="lg:flex lg:items-center lg:text-left px-8 md:px-16 text-center pt-14 xl:pb-24 md:pt-16">
            <section className="flex justify-center lg:pl-2">
              <img className="rounded-lg max-w-[480px]" src="/katie.jpeg" />
            </section>
            <section className="">
              <h2 className="font-patua text-[34px] md:text-6xl">
                Play-based child-led therapy
              </h2>
              <p className="font-prata text-lg py-6 lg:pr-28">
                ​Play-based child-led therapy is a specialized approach I follow
                to address various emotional, behavioral, and developmental
                differences in children. This approach centers around the
                child's natural inclination to play and uses it as a medium for
                therapeutic intervention. Through play, children can explore
                their thoughts and feelings, develop problem-solving skills, and
                gain insight into their experiences. Your child’s strengths and
                interests will be the driving force to build on the intrinsic
                motivation to communicate with others and learn novel skills. 
              </p>
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
};

export default Services;
