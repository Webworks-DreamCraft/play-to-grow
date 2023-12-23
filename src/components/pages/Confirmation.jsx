const Confirmation = () => {
  return(
    <section className="text-wheat-field-dark text-center md:container mx-auto">
      <p className="font-patua text-4xl md:text-[120px] py-10">Thank You!</p>
      <p className="font-prata text-base md:text-2xl pb-8 md:pb-20">I have received your documentation and will get back to you within three to five business days to discuss additional details. I look forward to speaking with you!</p>
      <button
          type="submit"
          className="font-prata text-lg bg-wheat-field-middle md:mb-12 py-3 px-8 rounded-[10px]"
        >
          Home
        </button>
    </section>
  )
}

export default Confirmation;