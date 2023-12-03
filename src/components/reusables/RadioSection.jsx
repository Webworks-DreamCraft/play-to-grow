import RadioInput from "./RadioInput";
import { useState, useEffect } from "react";

const RadioSection = ({
  formState,
  errorSignal,
  changeHandler,
  name,
  title,
  firstOption,
  secondOption,
  thirdOption,
  fourthOption,
}) => {

  const [isEmpty, setIsEmpty] = useState(false);

  useEffect(() => {
    if (errorSignal[name] === false) {
      setIsEmpty(false);
    } else {
      setIsEmpty(true);
    }
  }, [errorSignal]);

  return (
    <section 
      empty={isEmpty.toString()}
      className="[&[empty=true]]:bg-red-400 font-prata flex flex-col text-xs"
    >
      <p>{title}</p>
      <RadioInput
        name={name}
        value={firstOption}
        checked={formState[name] === firstOption ? true : false}
        onChange={changeHandler}
      />
      <RadioInput
        name={name}
        value={secondOption}
        checked={formState[name] === secondOption ? true : false}
        onChange={changeHandler}
      />
      <RadioInput
        name={name}
        value={thirdOption}
        checked={formState[name] === thirdOption ? true : false}
        onChange={changeHandler}
      />
      <RadioInput
        name={name}
        value={fourthOption}
        checked={formState[name] === fourthOption ? true : false}
        onChange={changeHandler}
      />
    </section>
  );
};

export default RadioSection;
