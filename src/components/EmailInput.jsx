import { useState, useEffect } from "react";

const EmailInput = ({
  label,
  name,
  errorSignal,
  setFormState,
  setErrorSignal,
  isEmailValid,
  setIsEmailValid
}) => {
  const [isEmpty, setIsEmpty] = useState(false);

  const emailPattern =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

  const emailValidate = (event) => {
    setIsEmailValid(emailPattern.test(event.target.value));
  };

  const changeHandler = (event) => {
    emailValidate(event);
    const { name, value } = event.target;
    setFormState((prevState) => ({ ...prevState, [name]: value }));
    setErrorSignal((prevState) => ({ ...prevState, [name]: false }));
  };

  useEffect(() => {
    if (errorSignal === false || errorSignal === null) {
      setIsEmpty(false);
    } else {
      setIsEmpty(true);
    }
  }, [errorSignal]);

  return (
    <section
      empty={isEmpty.toString()}
      className="flex flex-col font-prata py-3 xl:w-10/12 xl:mx-1 rounded-[10px] [&[empty=true]]:mb-3 [&[empty=true]]:bg-error-light"
    >
      <section className="flex">
        <label className="pb-2 text-xs lg:text-base">{label}</label>
        <p 
          className="px-1 text-xs [&[empty=true]]:text-base text-error-dark"
          empty={isEmpty.toString()}
        >*</p>
      </section>
      <i className="flex justify-end">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="[&[valid=true]]:flex w-6 h-6 hidden absolute m-3 fill-success "
          valid={
            isEmailValid || isEmailValid === false
              ? isEmailValid.toString()
              : null
          }
        >
          <path
            fillRule="evenodd"
            d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
            clipRule="evenodd"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="[&[valid=false]]:flex w-6 h-6 hidden absolute m-3 fill-error-dark"
          valid={
            isEmailValid || isEmailValid === false
              ? isEmailValid.toString()
              : null
          }
        >
          <path
            fillRule="evenodd"
            d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z"
            clipRule="evenodd"
          />
        </svg>
      </i>
      <input
        className=" 
          [&[valid=false]]:border-error-dark
          [&[valid=true]]:border-success 
          bg-white 
          p-3 
          rounded-lg 
          border-[1px] 
          border-sage
        "
        type="text"
        name={name}
        onChange={changeHandler}
        pattern={emailPattern}
        valid={
          isEmailValid || isEmailValid === false
            ? isEmailValid.toString()
            : null
        }
      />
      <p
        className="[&[empty=false]]:hidden pt-2 text-error-dark text-xs"
        empty={isEmpty.toString()}
      >
        Please enter required information
      </p>
    </section>
  );
};

export default EmailInput;
