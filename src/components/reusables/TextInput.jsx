import { useState, useEffect } from "react"

const TextInput = ({ label, type, name, onChange, errorSignal }) => {

  const [focused, setFocused] = useState(false);

  useEffect(() => {
    if (errorSignal === false) {
      setFocused(false)
    } else {
      setFocused(true)
    }
  }, [errorSignal])

  const handleFocus = (e) => {
    setFocused(true);
  }

  return (
    <section focused={focused.toString()}>
      <label className="">{label}</label>
      <input
        className="[&[focused=true]]:bg-red-400"
        type={type}
        name={name}
        onChange={onChange}
        // onBlur={handleFocus}
        focused={focused.toString()}
        // required={true}
      />
    </section>
  );
};

export default TextInput;
