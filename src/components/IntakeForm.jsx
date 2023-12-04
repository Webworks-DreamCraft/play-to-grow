import { useState, useEffect } from "react";
import TextInput from "./reusables/TextInput";
import RadioSection from "./reusables/RadioSection";
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
    <section className="flex flex-col w-11/12 justify-center text-wheat-field-dark">
      <h2 className="font-patua text-4xl text-center pt-16 pb-3">Reach Out To Us</h2>
      <p className="font-prata text-center text-lg pb-9">
        Once you fill out the intake and contact form, I will reach out to you
        via email within 3-to-5 business days. From there, we can decide if Play
        to Grow is the right fit for your child.
      </p>
      <section className="flex justify-center bg-white border-[0.5px] rounded-[10px]">

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
            fourthOption="Other"
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
            fourthOption="Other"
          />
            <TextArea
              name="message"
              label="Tell Me About Your Child"
              errorSignal={errorSignal.message}
              onChange={changeHandler}
            />
          <button 
            type="submit"
            className="font-prata"
          >Let's Work Together</button>
        </form>
      </section>
    </section>
  );
};

export default IntakeForm;
