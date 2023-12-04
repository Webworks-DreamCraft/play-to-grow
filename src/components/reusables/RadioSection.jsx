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
      className="[&[empty=true]]:bg-error-light font-prata flex flex-col text-xs my-4"
    >
      <section className="flex">
      <p className="pb-2">{title}</p>
        <p 
          className="px-1 text-xs [&[empty=true]]:text-base text-error-dark"
          empty={isEmpty.toString()}
        >*</p>
      </section>
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
      <p 
        className="[&[empty=false]]:hidden py-2 text-error-dark text-xs"
        empty={isEmpty.toString()}
      >Please choose at least one option</p>
    </section>
  );
};

export default RadioSection;
