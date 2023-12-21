import { useState, useEffect } from "react"

const TextInput = ({ label, type, name, onChange, errorSignal, pattern }) => {

  const [isEmpty, setIsEmpty] = useState(false);

  useEffect(() => {
    if (errorSignal === false || errorSignal === null) {
      setIsEmpty(false)
    } else {
      setIsEmpty(true)
    }
  }, [errorSignal])

  return (
    <section
      empty={isEmpty.toString()}
      className="flex flex-col xl:w-10/12 xl:mx-1 font-prata py-3 rounded-[10px] [&[empty=true]]:mb-3 [&[empty=true]]:bg-error-light"
     >
      <section className="flex">
        <label className="pb-2 text-xs lg:text-base">{label}</label>
        <p 
          className="px-1 text-xs [&[empty=true]]:text-base text-error-dark"
          empty={isEmpty.toString()}
        >*</p>
      </section>
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
