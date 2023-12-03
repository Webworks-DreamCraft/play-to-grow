import { useState, useEffect } from "react"

const TextInput = ({ label, name, onChange, errorSignal, formState }) => {

  const [focused, setFocused] = useState(false);

  useEffect(() => {
    if (errorSignal === false) {
      setFocused(false)
    } else {
      setFocused(true)
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
      focused={focused.toString()}
      className="flex flex-col font-prata py-3"
    >
      <label className="text-xs pb-2">{label}</label>
      <input
        className="[&[focused=true]]:bg-red-400 p-3 rounded-lg border-[1px] border-sage"
        type="text"
        name={name}
        onChange={onChange}
        focused={focused.toString()}
        onKeyDown={validatePhone}
      />
    </section>
  );
};

export default TextInput;
