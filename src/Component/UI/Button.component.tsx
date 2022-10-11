import { ButtonStyle } from "./Button.style";
import { useMediaQuery } from "usehooks-ts";
type ButtonProp = {
  message: string;
  icon?: string;
  responsive?: boolean;
  clickHandler: () => void | undefined;
};

const Button = ({
  message,
  icon,
  responsive = false,
  clickHandler,
}: ButtonProp) => {
  const matches = useMediaQuery("(min-width: 700px)");

  return (
    <ButtonStyle onClick={clickHandler}>
      {responsive ? (
        matches ? (
          <p>{message}</p>
        ) : (
          <span className="material-icons">{icon}</span>
        )
      ) : (
        <p>{message}</p>
      )}
    </ButtonStyle>
  );
};

export default Button;
