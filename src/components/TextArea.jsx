import { useState, useEffect } from "react"

const TextArea = ({ label, name, onChange, errorSignal }) => {

  const [isEmpty, setIsEmpty] = useState(false);

  useEffect(() => {
    if (errorSignal === false) {
      setIsEmpty(false)
    } else {
      setIsEmpty(true)
    }
  }, [errorSignal])

  const handleFocus = (e) => {
    setIsEmpty(true);
  }

  return (
    <section 
    empty={isEmpty.toString()}
      className="flex flex-col text-xs rounded-[10px] [&[empty=true]]:py-2 font-prata [&[empty=true]]:bg-error-light"
    >
      <section className="flex">
        <label className="pb-2">{label}</label>
        <p 
          className="px-1 text-xs [&[empty=true]]:text-base text-error-dark"
          empty={isEmpty.toString()}
        >*</p>
      </section>
      <textarea
        className="rounded-lg p-4 border-[1px] border-sage h-64 resize-none"
        name={name}
        onChange={onChange}
        empty={isEmpty.toString()}
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

export default TextArea;