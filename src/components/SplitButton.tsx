import { useRef, useState } from "react";
import ArrowDropDown from "@mui/icons-material/ArrowDropDown";
import { IconButton, Menu, MenuItem } from "@mui/material";
import type { Mark } from "~/types";

export interface SplitButtonProps {
  options: Mark[];
  onChange: (value: number) => void;
}

export const SplitButton = ({ options = [], onChange }: SplitButtonProps) => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLButtonElement>(null);

  return (
    <>
      <IconButton
        ref={ref}
        color="primary"
        size="small"
        onClick={() => setOpen((prevOpen) => !prevOpen)}
      >
        <ArrowDropDown />
      </IconButton>
      <Menu anchorEl={ref.current} open={open} onClose={() => setOpen(false)}>
        {options.map(({ value, label }) => (
          <MenuItem
            key={label}
            value={value}
            onClick={() => {
              setOpen(false);
              onChange(value);
            }}
          >
            {label}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};
