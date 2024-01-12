import testimonials from "./testimony";
import { Swiper, SwiperSlide } from "swiper/react";
import { useState, useEffect } from "react";

const Testimonials = () => {
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

  return (
    <section className="bg-testimonials bg-no-repeat bg-cover bg-center lg:bg-none lg:bg-wheat-field-very-light">
      <section className="bg-none bg-no-repeat bg-cover bg-center px-3 py-16 lg:bg-testimonials md:container mx-auto md:px-0 md:pt-16 md:pb-32">
        <h2 className="text-center font-patua text-3xl xs:text-4xl md:text-6xl pb-6 pt-6 xl:text-7xl">
          Testimonials
        </h2>
        <section className="mx-auto max-w-[760px]">
          <p className="text-center font-prata text-lg pb-6 md:text-left">
            My greatest areas of interest and experience lie in the following
            domains. Click the button below to view a more thorough description
            of my services.
          </p>
        </section>

        <Swiper
          spaceBetween={slideSpace}
          slidesPerView={slides}
          pagination={false}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          className="max-w-[1360px]"
        >
          {testimonials.map((testimony) => (
            <SwiperSlide key={testimony.testimony}>
              <div className="min-h-[450px] xs:min-h-[400px] p-8 rounded-xl bg-sage-light border-b-2 border-sage-border">
                <p className="font-prata text-sm">{testimony.testimony}</p>
                <section className="bottom-6 absolute">
                  <p className="font-prata font-bold">{testimony.client}</p>
                  <p className="font-prata">{testimony.description}</p>
                  <section className="pl-2"></section>
                </section>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </section>
  );
};

export default Testimonials;
