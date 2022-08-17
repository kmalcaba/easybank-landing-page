import "../css/AdviceBox.css";
import AdviceNumber from "./AdviceNumber";
import Advice from "./Advice";
import Dice from "./Dice";
import Divider from "./Divider";
import { useState } from "react";

const AdviceBox = () => {
  const [advice, setAdvice] = useState({
    advice:
      "It is easy to sit up and take notice, what's difficult is getting up and taking action.",
    id: 117,
  });

  const getAdvice = async () => {
    const advice = await fetchAdvice();

    setAdvice(advice.slip);
  };

  const fetchAdvice = async () => {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();

    return data;
  };

  return (
    <div className='AdviceBox'>
      <AdviceNumber adviceId={advice.id} />
      <Advice advice={advice.advice} />
      <Divider />
      <Dice handleClick={getAdvice} />
    </div>
  );
};

export default AdviceBox;
