import { useState, useEffect } from "react"

const TextInput = ({ label, type, name, onChange, errorSignal, pattern }) => {

  const [isEmpty, setIsEmpty] = useState(false);

  useEffect(() => {
    if (errorSignal === false) {
      setIsEmpty(false)
    } else {
      setIsEmpty(true)
    }
  }, [errorSignal])

  return (
    <section
      empty={isEmpty.toString()}
      className="flex flex-col font-prata py-3 rounded-[10px] [&[empty=true]]:mb-3 [&[empty=true]]:bg-error-light"
     >
      <label className="pb-2 text-xs">{label}</label>
      <input
        className="p-3 rounded-lg border-[1px] border-sage"
        type={type}
        name={name}
        onChange={onChange}
      />
      <p 
        className="[&[empty=false]]:hidden pt-2 text-error-dark text-xs"
        empty={isEmpty.toString()}
      >Please enter required information</p>
    </section>
  );
};

export default TextInput;
