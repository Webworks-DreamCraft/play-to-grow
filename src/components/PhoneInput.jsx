import { useState, useEffect } from "react"

const TextInput = ({ label, name, onChange, errorSignal, formState }) => {

  const [isEmpty, setIsEmpty] = useState(false);

  useEffect(() => {
    if (errorSignal === false) {
      setIsEmpty(false)
    } else {
      setIsEmpty(true)
    }
  }, [errorSignal])

  const validatePhone = (event) => {
    if (event.key === "Backspace") {
    } else if (formState.phone.length >= 10) {
      event.preventDefault();
    } else if (!/[0-9]/.test(event.key)) {
      event.preventDefault();
    }
  };

  return (
    <section 
      empty={isEmpty.toString()}
      className="flex flex-col font-prata py-3 rounded-[10px] [&[empty=true]]:mb-3 [&[empty=true]]:bg-error-light"
    >
      <section className="flex">
        <label className="pb-2 text-xs">{label}</label>
        <p 
          className="px-1 text-xs [&[empty=true]]:text-base text-error-dark"
          empty={isEmpty.toString()}
        >*</p>
      </section>
      <input
        className="p-3 rounded-lg border-[1px] border-sage"
        type="text"
        name={name}
        onChange={onChange}
        onKeyDown={validatePhone}
      />
      <p 
        className="[&[empty=false]]:hidden pt-2 text-error-dark text-xs"
        empty={isEmpty.toString()}
      >Please enter required information</p>
    </section>
  );
};

export default TextInput;
