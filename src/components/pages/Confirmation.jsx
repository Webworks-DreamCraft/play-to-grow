import { useNavigate } from "react-router-dom"

const Confirmation = () => {
  const navigate = useNavigate();
  return (
    <section className="pt-24 md:bg-confirmation bg-no-repeat bg-origin-padding bg-cover bg-top lg:bg-palm-leaf text-wheat-field-dark text-center">
      <section className="px-3 md:container mx-auto">
        <p className="font-patua text-6xl md:text-[120px] pb-10">Thank You!</p>
        <p className="font-prata text-base md:text-2xl pb-8 md:pb-20">
          I have received your documentation and will get back to you within
          three to five business days to discuss additional details. I look
          forward to speaking with you!
        </p>
        <button
          type="submit"
          onClick={() => navigate("/")}
          className="font-prata text-lg bg-wheat-field-middle md:mb-12 py-3 px-8 rounded-[10px]"
        >
          Home
        </button>
      </section>
    </section>
  );
};

export default Confirmation;
