import { useState } from "react"

const TextInput = ({ label, type, name, onChange }) => {

  const [focused, setFocused] = useState(false);

  const handleFocus = (e) => {
    setFocused(true);
  }

  return (
    <section focused={focused.toString()}>
      <label className="">{label}</label>
      <input
        className="invalid:border-pink-500 invalid:text-pink-600 invalid:[&[focused=true]]:bg-red-400"
        type={type}
        name={name}
        onChange={onChange}
        onBlur={handleFocus}
        focused={focused.toString()}
        required={true}
      />
    </section>
  );
};

export default TextInput;
