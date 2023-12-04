const RadioInput = ({ name, onChange, value, checked}) => {
  return (
    <section className="py-2 ">
        <input
          className="accent-wheat-field-dark"
          type="radio"
          name={name}
          onChange={onChange}
          value={value}
          checked={checked}
          />
      <label 
        className="[&[dark=true]]:text-wheat-field-dark text-gray-choice px-2"
        dark={checked.toString()}
      >
          {value}
      </label>
    </section>
  )
}

export default RadioInput;