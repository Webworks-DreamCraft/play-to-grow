import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { useState, useEffect } from "react";
import "swiper/css";

const Expertise = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const watchWidth = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", watchWidth);

    // Cleanup
    return () => {
      window.removeEventListener("resize", watchWidth);
    };
  }, []);

  // changes the amount of cards shown based on view width for stylistic reasons
  let slides;
  if (windowWidth <= 475) {
    slides = 1;
  } else if (windowWidth > 450 && windowWidth < 600) {
    slides = 1.2;
  } else if (windowWidth > 600 && windowWidth < 800) {
    slides = 1.5;
  } else if (windowWidth > 800 && windowWidth < 1024) {
    slides = 2.2;
  } else {
    slides = 3;
  }

  // increases space between slides at view width > 1280px
  let slideSpace = windowWidth <= 1280 ? 15 : 25;

  // stores the info inside of the 3 expertise cards
  const expertiseSlides = [
    {
      title: "Autism Spectrum Disorder (ASD)",
      paragraph:
        "I am deeply committed to understanding and supporting children with ASD. I believe that effective communication is a crucial element in enhancing their quality of life.",
      background: "Infinity_Card.png",
    },
    {
      title: "Gestalt Language Acquisition",
      paragraph:
        "Gestalt language processing is an echolalia-based way of understanding and expressing language that is rooted in context and emotion.  Acknowledging scripted language and identifying the underlying meanings of scripts is important in developing self-generated language",
      background: "Speech_Card.png",
    },
    {
      title: "Augmentative and Alternative Communication",
      paragraph:
        "AAC systems play a vital role in assisting individuals who struggle with traditional verbal communication. I have extensive experience and education in assessing and implementing AAC solutions to improve expressive and receptive communication.",
      background: "AAC_Card.png",
    },
  ];

  return (
    <section className="bg-expertise bg-no-repeat bg-cover bg-center lg:bg-none lg:bg-sage-light">
      <section className="bg-none bg-no-repeat bg-cover bg-center px-3 py-16 lg:bg-expertise md:container mx-auto md:px-0 md:pt-16 md:pb-32">
        <h2 className="text-center font-patua text-3xl xs:text-4xl md:text-6xl pb-6 pt-6 xl:text-7xl">
          Areas of Expertise
        </h2>
        <section className="mx-auto max-w-[760px]">
          <p className="text-center font-prata text-lg pb-6 md:text-left">
            My greatest areas of interest and experience lie in the following
            domains. Click the button below to view a more thorough description
            of my services.
          </p>
        </section>

        <section className="w-[200px] mx-auto">
          <Link to="/services">
            <p className="font-prata text-lg mb-8 rounded-xl p-3 bg-wheat-field-light hover:bg-wheat-field-middle text-center">
              View Our Services
            </p>
          </Link>
        </section>

        <Swiper
          spaceBetween={slideSpace}
          slidesPerView={slides}
          pagination={false}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          className="max-w-[1360px]"
        >
          {expertiseSlides.map((expertise) => (
            <SwiperSlide key={expertise.title}>
              <div
                style={{
                  backgroundImage: `url(/slide_images/${expertise.background})`,
                }}
                className="min-h-[450px] xs:min-h-[400px] pt-[100px] rounded-xl px-4 xs:px-8 border-b-2 border-wheat-field-light bg-cover bg-no-repeat"
              >
                <h3 className="font-patua mb-2 text-xl pt-4">
                  {expertise.title}
                </h3>
                <p className="font-prata text-sm">{expertise.paragraph}</p>
                <section className="bottom-6 absolute flex items-center">
                  <p className="font-prata text-wheat-field-middle mt-1">
                    Learn More
                  </p>
                  <section className="pl-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                      />
                    </svg>
                  </section>
                </section>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </section>
  );
};

export default Expertise;
