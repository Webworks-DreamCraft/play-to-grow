import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import "./Home.css";

const Home = () => {
  const fadeImages = [
    {
      fileName: "slide1.jpg",
      caption: "Katie Gonzales outside with several of her patients",
    },
    {
      fileName: "slide2.jpg",
      caption: "Several children doing an outdoor activity with plants",
    },
    {
      fileName: "slide3.jpg",
      caption: "Several children coloring outside on a blue table",
    },
    {
      fileName: "slide4.jpg",
      caption: "Several children doing a plant activity with Katie Gonzales",
    },
    {
      fileName: "slide5.png",
      caption:
        "Several children doing a plant activity sitting at a blue table",
    },
  ];

  return (
    <section className="bg-palm-leaf">
      <section className="p-3 md:container mx-auto md:flex md:pt-16 md:pb-28">
        <section className="md:w-1/2 md:p-2 xl:pr-8">
          <h1 className="font-patua font-normal text-4xl text-center leading-snug text-wheat-field-dark xs:text-[44px] sm:text-5xl sm:mb-8 sm:mt-8 lg:text-6xl md:text-left lg:mt-4 xl:mt-12 xl:text-7xl">
            Play to Grow Speech Therapy
          </h1>
          <p className="font-prata text-wheat-field-dark text-center text-lg mt-4 md:text-sm md:text-left">
            Play to Grow’s mission is to provide care that recognizes and
            celebrates the unique strengths, perspectives, and needs of children
            across the neurodivergent spectrum.
          </p>
          <p className="font-prata text-wheat-field-dark text-center text-lg mt-4 sm:mb-8 md:text-sm md:text-left">
            We aim to reduce communication barriers and ensure that
            neurodivergent individuals can participate fully in all aspects of
            life!
          </p>
          <a href="#form">
            <p className="hidden bg-wheat-field-middle hover:bg-wheat-field-light text-wheat-field-dark text-center font-prata text-sm rounded-lg py-2 px-3 border-2 border-wheat-field-middle sm:inline-block">
              Schedule Consultation
            </p>
          </a>
          <a href="#expertise">
            <p className="hidden bg-palm-leaf hover:bg-wheat-field-light text-wheat-field-dark text-center font-prata text-sm rounded-lg py-2 px-3 border-2 border-wheat-field-middle sm:inline-block ml-8">
              Learn More
            </p>
          </a>
        </section>

        <section id="slideshow" className="my-8 md:w-1/2 md:pt-8 lg:pt-0">
          <Fade>
            {fadeImages.map((fadeImage, index) => (
              <div key={index}>
                <img
                  style={{ width: "100%" }}
                  src={`../../../public/slide_images/${fadeImage.fileName}`}
                  className="rounded-md"
                />
              </div>
            ))}
          </Fade>
        </section>
        <a href="#form">
          <p className="bg-wheat-field-middle hover:bg-wheat-field-light text-wheat-field-dark text-center font-prata text-lg rounded-lg py-3 mx-auto w-[250px] sm:hidden">
            Schedule Consultation
          </p>
        </a>
      </section>
    </section>
  );
};

export default Home;
