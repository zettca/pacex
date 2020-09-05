import React, { useState, useRef, useEffect } from "react";
import { ArrowDropDown } from "@material-ui/icons";
import { Button, Menu, MenuItem } from "@material-ui/core";

const SplitButton = ({ index = 0, options = [], onChange }) => {
  const [open, setOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(index);
  const ref = useRef(null);

  useEffect(() => {
    setSelectedIndex(index);
  }, [index]);

  useEffect(() => {
    setOpen(false);
    onChange?.(null, options[selectedIndex]);
  }, [selectedIndex, options, onChange]);

  const handleOptionClick = (event, idx) => {
    setSelectedIndex(idx);
  };

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button ref={ref} onClick={handleToggle} endIcon={<ArrowDropDown />}>
        {options[selectedIndex]}
      </Button>
      <Menu anchorEl={ref.current} open={open} onClose={handleClose}>
        {options.map((option, idx) => (
          <MenuItem
            key={option}
            selected={idx === selectedIndex}
            onClick={(event) => handleOptionClick(event, idx)}
          >
            {option}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

export default SplitButton;
