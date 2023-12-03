import { useState, useEffect } from "react"

const EmailInput = ({ label, type, name, errorSignal, setFormState, setErrorSignal }) => {

  const [isEmpty, setIsEmpty] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState()

  const emailPattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/

  const emailValidate = (event) => {
    setIsEmailValid(emailPattern.test(event.target.value))
    console.log(isEmailValid)
  }

  const changeHandler = (event) => {
    emailValidate(event);
    const { name, value } = event.target;
    setFormState((prevState) => ({ ...prevState, [name]: value }));
    setErrorSignal((prevState) => ({ ...prevState, [name]: false }));
  };

  useEffect(() => {
    if (errorSignal === false) {
      setIsEmpty(false)
    } else {
      setIsEmpty(true)
    }
  }, [errorSignal])

  return (
    <section 
      valid={isEmailValid || isEmailValid === false ? isEmailValid.toString() : null}
      className="
      [&[valid=false]]:bg-red-400
      [&[valid=true]]:bg-green-400
      flex
      flex-col
      font-prata
      py-3
      
      "
    >
      <label className="pb-2 text-xs">{label}</label>
      <input
        className="[&[empty=true]]:bg-red-400 bg-white p-3 rounded-lg border-[1px] border-sage"
        type={type}
        name={name}
        onChange={changeHandler}
        empty={isEmpty.toString()}
        pattern={emailPattern}
      />
    </section>
  );
};

export default EmailInput;