import { useState } from "react";
import emailjs, { init } from "@emailjs/browser";
import IntakeFormInfo from "./IntakeFormInfo";
import IntakeForm from "./IntakeForm";

const IntakeFormContainer = () => {
  const [errorSignal, setErrorSignal] = useState({
    firstName: null,
    lastName: null,
    email: null,
    phone: null,
    concern: null,
    interest: null,
    diagnoses: null,
    message: null,
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

  const [isEmailValid, setIsEmailValid] = useState();
  const [errorMessage, setErrorMessage] = useState();

  // this key needs to change when accounts change
  emailjs.init(import.meta.env.VITE_PUBLIC_KEY);

  const sendEmail = async () => {
    try {
      const response = await emailjs.send("GMAIL", "contact", formState);
      if (response.status === 200) {
        setErrorMessage(null);
        // useNavigate here when react-router is setup
      } else {
        setErrorMessage("Something went wrong. Try again another time or email me directly: katiegonzalez@playtogrowgainesville.com")
      }
    } catch (err) {
      setErrorMessage("Something went wrong. Try again another time or email me directly: katiegonzalez@playtogrowgainesville.com")
    }
  };

  const changeHandler = (event) => {
    const { name, value } = event.target;
    setFormState((prevState) => ({ ...prevState, [name]: value }));
    if (value.length === 0) {
      setErrorSignal((prevState) => ({ ...prevState, [name]: true }));
    } else {
      setErrorSignal((prevState) => ({ ...prevState, [name]: false }));
    }
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

    const errorArray = Object.values(errorSignal);
    if (errorArray.includes(true) || errorArray.includes(null)) {
      return;
    }
    if (formState.phone.length < 10) {
      setErrorSignal((prevState) => ({ ...prevState, phone: true }));
      return;
    }
    if (!isEmailValid) {
      return
    }

    sendEmail();
  };

  return (
    <section className="flex flex-col md:flex-row w-11/12 justify-center md:justify-between text-wheat-field-dark">
      <IntakeFormInfo />
      <section className="flex justify-center w-full bg-white border-[0.5px] md:w-[1377px] md:mt-16 rounded-[10px]">
        <IntakeForm
          submitHandler={submitHandler}
          changeHandler={changeHandler}
          errorSignal={errorSignal}
          setErrorSignal={setErrorSignal}
          setFormState={setFormState}
          formState={formState}
          isEmailValid={isEmailValid}
          setIsEmailValid={setIsEmailValid}
          errorMessage={errorMessage}
        />
      </section>
    </section>
  );
};

export default IntakeFormContainer;
