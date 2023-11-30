import { useState, useEffect } from "react";
import TextInput from "./reusables/TextInput"
import RadioInput from "./reusables/RadioInput";

const IntakeForm = () => {
  const [formState, setFormState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    concern: "",
    interest: "",
    diagnoses: "",
    message: ""
  });

  const validatePhone = (event) => {
    if (event.key === "Backspace") {
    } else if (formState.phone.length >= 10) {
      event.preventDefault();
    } else if (!/[0-9]/.test(event.key)) {
      event.preventDefault();
    }
  };

  const changeHandler = (event) => {
    const { name, value } = event.target;
    setFormState((prevState) => ({ ...prevState, [name]: value }));
  };

  const submitHandler = (event) => {
    event.preventDefault();
    console.log(formState);
  };

  return (
    <section className="flex flex-col">
      <h2>Reach Out To Us</h2>
      <p>
        Once you fill out the intake and contact form, I will reach out to you
        via email within 3-to-5 business days. From there, we can decide if Play
        to Grow is the right fit for your child.
      </p>
      <form 
        className="flex flex-col"
        onSubmit={submitHandler}
      >
        <h2>Step 1: Contact Information</h2>
        <TextInput 
          label="First Name"
          type="text"
          name="firstName"
          onChange={changeHandler}
        />
        <TextInput
          label="Last Name"
          type="text"
          name="lastName"
          onChange={changeHandler}
        />
        <TextInput
          label="Email"
          type="email"
          name="email"
          onChange={changeHandler}
        />
        <label htmlFor="phone">
          Phone
          <input
            type="text"
            name="phone"
            onChange={changeHandler}
            onKeyDown={validatePhone}
          />
        </label>
        <h2>Step 2: Intake Form</h2>
        <p>What is Your Main Area of Concern *</p>
        <RadioInput
          name="concern"
          value="Expressive Language (What child says)"
          checked={formState.concern === "Expressive Language (What child says)" ? true : false}
          onChange={changeHandler}
        />
          <RadioInput
            name="concern"
            value="Receptive Language (What child understands)"
            checked={formState.concern === "Receptive Language (What child understands)" ? true : false}
            onChange={changeHandler}
          />
          <RadioInput
            name="concern"
            value="Articulation (Sound Pronunciation)"
            checked={formState.concern === "Articulation (Sound Pronunciation)" ? true : false}
            onChange={changeHandler}
          />
          <RadioInput
            name="concern"
            value="Combination"
            checked={formState.concern === "Combination" ? true : false}
            onChange={changeHandler}
          />
        <p>I am Interested In * </p>
          <RadioInput
            name="interest"
            value="In-home Services"
            checked={formState.interest === "In-home Services" ? true : false}
            onChange={changeHandler}
          />
          <RadioInput
            name="interest"
            value="Consultative Services"
            checked={
              formState.interest === "Consultative Services" ? true : false
            }
            onChange={changeHandler}
          />
          <RadioInput
            name="interest"
            value="Daycare / Preschool Services"
            checked={
              formState.interest === "Daycare / Preschool Services"
                ? true
                : false
            }
            onChange={changeHandler}
          />
          <RadioInput
            name="interest"
            value="Other"
            checked={formState.interest === "Other" ? true : false}
            onChange={changeHandler}
          />
        <p>Diagnoses *</p>
          <RadioInput
            name="diagnoses"
            value="Autism Spectrum Disorder"
            checked={formState.diagnoses === "Autism Spectrum Disorder" ? true : false}
            onChange={changeHandler}
          />
          <RadioInput
            name="diagnoses"
            value="Phonological Disorder"
            checked={formState.diagnoses === "Phonological Disorder" ? true : false}
            onChange={changeHandler}
          />
          <RadioInput
            name="diagnoses"
            value="Developmental Delay"
            type="checkbox"
            checked={formState.diagnoses === "Developmental Delay" ? true : false}
            onChange={changeHandler}
          />
          <RadioInput
            name="diagnoses"
            value="Other"
            type="checkbox"
            checked={formState.diagnoses === "Other" ? true : false}
            onChange={changeHandler}
          />
        <label>
          Tell Me About Your Child *
          <textarea 
            name="message"
            value={formState.message}
            onChange={changeHandler}
          />
        </label>
        <button type="submit">Let's Work Together</button>
      </form>
    </section>
  );
};

export default IntakeForm;
