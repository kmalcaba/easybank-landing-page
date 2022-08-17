import "../css/Dice.css";
import { ReactComponent as DiceSvg } from "../img/icon-dice.svg";

const Dice = ({ handleClick }) => {
  return (
    <button className='Dice' onClick={handleClick}>
      <DiceSvg />
    </button>
  );
};

export default Dice;
