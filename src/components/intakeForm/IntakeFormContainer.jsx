import { useState } from "react";
import IntakeFormInfo from "./IntakeFormInfo"
import IntakeForm from "./IntakeForm";

const IntakeFormContainer = () => {
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
    if (formState.phone.length < 10) {
      setErrorSignal((prevState) => ({...prevState, phone: true}));
      return
    }
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
        />
      </section>
    </section>
  );
};

export default IntakeFormContainer;
