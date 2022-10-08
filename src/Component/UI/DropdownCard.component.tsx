import { DropdownCardStyle } from "./Button.style";

interface Props {
  options: string[];
  onSelect: (option: string) => void;
}

const DropdownCard = ({ options, onSelect }: Props) => {
  return (
    <DropdownCardStyle>
      <ul>
        {options.map((item, i) => (
          <li key={i} onClick={() => onSelect(item)}>
            {item}
          </li>
        ))}
      </ul>
    </DropdownCardStyle>
  );
};

export default DropdownCard;
