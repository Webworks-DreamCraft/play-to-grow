const RadioInput = ({ name, onChange, value, checked}) => {
  return (
    <label>
      <input
        type="radio"
        name={name}
        onChange={onChange}
        value={value}
        checked={checked}
        />
        {value}
    </label>
  )
}

export default RadioInput;