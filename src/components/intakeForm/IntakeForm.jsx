import TextInput from "../reusables/TextInput";
import PhoneInput from "../PhoneInput";
import EmailInput from "../EmailInput";
import RadioSection from "../reusables/RadioSection";
import TextArea from "../TextArea";

const IntakeForm = ({
  submitHandler,
  changeHandler,
  errorSignal,
  setErrorSignal,
  formState,
  setFormState,
  isEmailValid,
  setIsEmailValid,
}) => {
  return (
    <form className="flex flex-col w-11/12" onSubmit={submitHandler}>
      <h2 className="font-patua lg:text-2xl md:pt-8">
        Step 1: Contact Information
      </h2>
      <section className="xl:flex justify-between pt-4 md:pt-6">
        <TextInput
          label="First Name"
          type="text"
          name="firstName"
          onChange={changeHandler}
          errorSignal={errorSignal.firstName}
        />
        <TextInput
          label="Last Name"
          type="text"
          name="lastName"
          onChange={changeHandler}
          errorSignal={errorSignal.lastName}
        />
      </section>
      <section className="xl:flex justify-between">
        <EmailInput
          label="Email"
          name="email"
          onChange={changeHandler}
          errorSignal={errorSignal.email}
          setErrorSignal={setErrorSignal}
          setFormState={setFormState}
          isEmailValid={isEmailValid}
          setIsEmailValid={setIsEmailValid}
        />
        <PhoneInput
          label="Phone"
          type="text"
          name="phone"
          onChange={changeHandler}
          formState={formState}
          errorSignal={errorSignal.phone}
        />
      </section>
      <h2 className="font-patua lg:text-2xl pt-12 md:pt-20">
        Step 2: Intake Form
      </h2>
      <section className="flex">
        <section>
          <RadioSection
            changeHandler={changeHandler}
            formState={formState}
            errorSignal={errorSignal}
            name="concern"
            title="What is Your Main Area of Concern"
            firstOption="Expressive Language (What child says)"
            secondOption="Receptive Language (What child understands)"
            thirdOption="Articulation (Sound Pronunciation)"
            fourthOption="Combination"
          />
          <RadioSection
            changeHandler={changeHandler}
            formState={formState}
            errorSignal={errorSignal}
            name="interest"
            title="I am Interested In"
            firstOption="In-home Services"
            secondOption="Consultative Services"
            thirdOption="Daycare / Preschool Services"
            fourthOption="Other (Specify in text box below)"
          />
          <RadioSection
            changeHandler={changeHandler}
            formState={formState}
            errorSignal={errorSignal}
            name="diagnoses"
            title="Diagnoses"
            firstOption="Autism Spectrum Disorder"
            secondOption="Phonological Disorder"
            thirdOption="Developmental Delay"
            fourthOption="Other (Specify in text box below)"
          />
          <TextArea
            name="message"
            label="Tell Me About Your Child"
            errorSignal={errorSignal.message}
            onChange={changeHandler}
          />
        </section>
        <section className="xl:h-full xl:w-2/12"></section>
      </section>
      <section className="pt-4 pb-8">
        <button
          type="submit"
          className="font-prata bg-wheat-field-middle py-3 px-4 rounded-[10px]"
        >
          Let's Work Together
        </button>
      </section>
    </form>
  );
};

export default IntakeForm;
