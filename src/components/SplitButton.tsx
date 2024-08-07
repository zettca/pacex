import { useEffect, useRef, useState } from "react";
import { ArrowDropDown } from "@mui/icons-material";
import { Button, Menu, MenuItem } from "@mui/material";

export interface SplitButtonProps {
  index?: number;
  options?: string[];
  onChange?: (
    event: React.MouseEvent<HTMLLIElement> | null,
    value: string,
  ) => void;
}

export const SplitButton = ({
  index = 0,
  options = [],
  onChange,
}: SplitButtonProps) => {
  const [open, setOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(index);
  const ref = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    setSelectedIndex(index);
  }, [index]);

  useEffect(() => {
    setOpen(false);
    onChange?.(null, options[selectedIndex]!);
  }, [selectedIndex, options, onChange]);

  return (
    <>
      <Button
        ref={ref}
        onClick={() => setOpen((prevOpen) => !prevOpen)}
        endIcon={<ArrowDropDown />}
      >
        {options[selectedIndex]}
      </Button>
      <Menu anchorEl={ref.current} open={open} onClose={() => setOpen(false)}>
        {options.map((option, idx) => (
          <MenuItem
            key={option}
            selected={idx === selectedIndex}
            onClick={() => setSelectedIndex(idx)}
          >
            {option}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};
