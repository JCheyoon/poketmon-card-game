import { DropdownButtonStyle } from "./Button.style";
import { useState } from "react";
import DropdownCard from "./DropdownCard.component";
import { deckBtnAudio } from "../Data/Audio";

interface Props {
  options: string[];
  onSelect: (option: string) => void;
}

const DropdownButton = ({ options, onSelect }: Props) => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <DropdownButtonStyle
      onClick={() => {
        deckBtnAudio.play();
        setOpen((open) => !open);
      }}
    >
      <p>
        <span>DECK SIZE</span>
        <span className="material-symbols-outlined">arrow_drop_down</span>
      </p>
      {open && <DropdownCard options={options} onSelect={onSelect} />}
    </DropdownButtonStyle>
  );
};

export default DropdownButton;
