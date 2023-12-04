import { useState, useEffect } from "react";
import TextInput from "./reusables/TextInput";
import RadioSection from "./reusables/RadioSection";
import Logo from "./reusables/Logo"
import PhoneInput from "./PhoneInput";
import EmailInput from "./EmailInput";
import TextArea from "./TextArea";

const IntakeForm = () => {
  const [errorSignal, setErrorSignal] = useState({
    firstName: false,
    lastName: false,
    email: false,
    phone: false,
    concern: false,
    interest: false,
    diagnoses: false,
    message: false,
  });
  const [formState, setFormState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    concern: "",
    interest: "",
    diagnoses: "",
    message: "",
  });

  const changeHandler = (event) => {
    const { name, value } = event.target;
    setFormState((prevState) => ({ ...prevState, [name]: value }));
    setErrorSignal((prevState) => ({ ...prevState, [name]: false }));
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const formArray = Object.entries(formState);
    formArray.forEach((entry) => {
      if (entry[1].length === 0) {
        setErrorSignal((prevState) => ({ ...prevState, [entry[0]]: true }));
      } else {
        setErrorSignal((prevState) => ({ ...prevState, [entry[0]]: false }));
      }
    });
    console.log(errorSignal);
  };

  return (
    <section className="flex flex-col md:flex-row w-11/12 justify-center md:justify-between text-wheat-field-dark">
      <section className="md:pr-8 text-lg font-prata">
        <h2 className="font-patua text-4xl text-center md:text-6xl md:text-start pt-16 pb-3">
          Reach Out To Us
        </h2>
        <p className="text-center md:text-start pb-9">
          Once you fill out the intake and contact form, I will reach out to you
          via email within 3-to-5 business days. From there, we can decide if
          Play to Grow is the right fit for your child.
        </p>
        <section className="hidden md:block">
          <section className="flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
              <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
            </svg>

            <p className="pl-4 pb-4">katiegonzalez@playtogrowgainesville.com</p>
          </section>
          <section className="flex">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.0002 1.99951C8.00619 1.99951 4.7569 5.24881 4.7569 9.24271C4.7569 14.1993 11.2389 21.4758 11.5149 21.7831C11.7741 22.0718 12.2267 22.0713 12.4855 21.7831C12.7614 21.4758 19.2434 14.1993 19.2434 9.24271C19.2433 5.24881 15.9941 1.99951 12.0002 1.99951ZM12.0002 12.887C9.99068 12.887 8.35592 11.2522 8.35592 9.24271C8.35592 7.23326 9.99072 5.59849 12.0002 5.59849C14.0096 5.59849 15.6444 7.2333 15.6444 9.24275C15.6444 11.2522 14.0096 12.887 12.0002 12.887Z"
                fill="#3D1B0B"
              />
            </svg>
            <p className="pl-4">Gainesville, Florida</p>
          </section>
        </section>
        <section className="hidden md:block pt-80">
          <Logo width="421" height="431"/>
        </section>
      </section>
      <section className="flex justify-center w-full bg-white border-[0.5px] md:w-[1377px] md:mt-16 rounded-[10px]">
        <form className="flex flex-col w-11/12" onSubmit={submitHandler}>
          <h2 className="font-patua pt-4">Step 1: Contact Information</h2>
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
          <EmailInput
            label="Email"
            name="email"
            onChange={changeHandler}
            errorSignal={errorSignal.email}
            setErrorSignal={setErrorSignal}
            setFormState={setFormState}
          />
          <PhoneInput
            label="Phone"
            type="text"
            name="phone"
            onChange={changeHandler}
            formState={formState}
            errorSignal={errorSignal.phone}
          />
          <h2 className="font-patua">Step 2: Intake Form</h2>
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
          <section className="pt-4 pb-8">
            <button
              type="submit"
              className="font-prata bg-wheat-field-middle py-3 px-4 rounded-[10px]"
            >
              Let's Work Together
            </button>
          </section>
        </form>
      </section>
    </section>
  );
};

export default IntakeForm;
