import { useState, useEffect } from "react";

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
    <section>
      <h2>Reach Out To Us</h2>
      <p>
        Once you fill out the intake and contact form, I will reach out to you
        via email within 3-to-5 business days. From there, we can decide if Play
        to Grow is the right fit for your child.
      </p>
      <form onSubmit={submitHandler}>
        <h2>Step 1: Contact Information</h2>
        <label htmlFor="firstName">
          First Name
          <input
            type="text"
            id="firstName"
            name="firstName"
            onChange={changeHandler}
          />
        </label>
        <label htmlFor="lastName">
          Last Name
          <input
            type="text"
            id="lastName"
            name="lastName"
            onChange={changeHandler}
          />
        </label>
        <label htmlFor="email">
          Email
          <input
            type="email"
            id="email"
            name="email"
            onChange={changeHandler}
          />
        </label>
        <label htmlFor="phone">
          Phone
          <input
            type="text"
            id="phone"
            name="phone"
            onChange={changeHandler}
            onKeyDown={validatePhone}
          />
        </label>
        <h2>Step 2: Intake Form</h2>
        <p>What is Your Main Area of Concern *</p>
        <label htmlFor="expressiveLanguage">
          Expressive Language (What child says)
          <input
            name="concern"
            value="expressiveLanguage"
            type="checkbox"
            checked={formState.concern === "expressiveLanguage" ? true : false}
            onChange={changeHandler}
          />
        </label>
        <label>
          Receptive Language (What child understands)
          <input
            name="concern"
            value="receptiveLanguage"
            type="checkbox"
            checked={formState.concern === "receptiveLanguage" ? true : false}
            onChange={changeHandler}
          />
        </label>
        <label>
          Articulation (Sound Pronunciation)
          <input
            name="concern"
            value="articulation"
            type="checkbox"
            checked={formState.concern === "articulation" ? true : false}
            onChange={changeHandler}
          />
        </label>
        <label>
          Combination
          <input
            name="concern"
            value="combination"
            type="checkbox"
            checked={formState.concern === "combination" ? true : false}
            onChange={changeHandler}
          />
        </label>
        <p>I am Interested In * </p>
        <label>
          In-home Services
          <input
            name="interest"
            value="In-home Services"
            type="checkbox"
            checked={formState.interest === "In-home Services" ? true : false}
            onChange={changeHandler}
          />
        </label>
        <label>
          Consultative Services
          <input
            name="interest"
            value="Consultative Services"
            type="checkbox"
            checked={
              formState.interest === "Consultative Services" ? true : false
            }
            onChange={changeHandler}
          />
        </label>
        <label>
          Daycare / Preschool Services
          <input
            name="interest"
            value="Daycare / Preschool Services"
            type="checkbox"
            checked={
              formState.interest === "Daycare / Preschool Services"
                ? true
                : false
            }
            onChange={changeHandler}
          />
        </label>
        <label>
          Other (Specify in text box below)
          <input
            name="interest"
            value="Other"
            type="checkbox"
            checked={formState.interest === "Other" ? true : false}
            onChange={changeHandler}
          />
        </label>
        <p>Diagnoses *</p>
        <label>
          Autism Spectrum Disorder
          <input
            name="diagnoses"
            value="Autism Spectrum Disorder"
            type="checkbox"
            checked={formState.diagnoses === "Autism Spectrum Disorder" ? true : false}
            onChange={changeHandler}
          />
        </label>
        <label>
          Phonological Disorder
          <input
            name="diagnoses"
            value="Phonological Disorder"
            type="checkbox"
            checked={formState.diagnoses === "Phonological Disorder" ? true : false}
            onChange={changeHandler}
          />
        </label>
        <label>
          Developmental Delay
          <input
            name="diagnoses"
            value="Developmental Delay"
            type="checkbox"
            checked={formState.diagnoses === "Developmental Delay" ? true : false}
            onChange={changeHandler}
          />
        </label>
        <label>
          Other (Specify in text box below)
          <input
            name="diagnoses"
            value="Other"
            type="checkbox"
            checked={formState.diagnoses === "Other" ? true : false}
            onChange={changeHandler}
          />
        </label>
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
