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
    <section>
      <label className="font-prata">{label}</label>
      <textarea
        className="[&[empty=true]]:bg-red-400"
        name={name}
        onChange={onChange}
        empty={isEmpty.toString()}
      />
    </section>
  );
};

export default TextArea;