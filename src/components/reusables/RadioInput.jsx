const RadioInput = ({ name, onChange, value, checked}) => (
    <section 
      className="py-2 xl:py-4"
    >
        <input
          className="accent-wheat-field-dark"
          type="radio"
          name={name}
          onChange={onChange}
          value={value}
          checked={checked}
          id={value}
          />
      <label 
        htmlFor={value}
        className="inline text-gray-choice px-2 [&[dark=true]]:text-wheat-field-dark"
        dark={checked.toString()}
      >
          {value}
      </label>
    </section>
  )

export default RadioInput;