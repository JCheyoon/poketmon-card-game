import { ButtonStyle } from "./Button.style";
type ButtonProp = {
  message: string;
  clickHandler: () => void;
};

const Button = ({ message, clickHandler }: ButtonProp) => {
  return (
    <ButtonStyle onClick={clickHandler}>
      <p>{message}</p>
    </ButtonStyle>
  );
};

export default Button;
