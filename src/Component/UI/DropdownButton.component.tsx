import { DropdownButtonStyle } from "./Button.style";
import { useState } from "react";
import DropdownCard from "./DropdownCard.component";
import { deckBtnAudio } from "../Data/Audio";
import { useMediaQuery } from "usehooks-ts";

interface Props {
  options: string[];
  onSelect: (option: string) => void;
  responsive?: boolean;
  icon?: string;
}

const DropdownButton = ({
  options,
  onSelect,
  responsive = false,
  icon,
}: Props) => {
  const matches = useMediaQuery("(min-width: 700px)");

  const [open, setOpen] = useState<boolean>(false);

  return (
    <DropdownButtonStyle
      onClick={() => {
        deckBtnAudio.play();
        setOpen((open) => !open);
      }}
    >
      <p>
        {responsive ? (
          matches ? (
            <span>DECK SIZE</span>
          ) : (
            <span className="material-icons">{icon}</span>
          )
        ) : (
          <span>DECK SIZE</span>
        )}

        <span className="material-symbols-outlined">arrow_drop_down</span>
      </p>
      {open && <DropdownCard options={options} onSelect={onSelect} />}
    </DropdownButtonStyle>
  );
};

export default DropdownButton;
