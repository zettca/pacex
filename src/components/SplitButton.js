import React, { useState, useRef } from "react";
import { ArrowDropDown } from "@material-ui/icons";
import { Button, Menu, MenuItem } from "@material-ui/core";

/* eslint-disable react/prop-types */
const SplitButton = ({ options, onChange }) => {
  const [open, setOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const ref = useRef(null);

  const handleOptionClick = (event, index) => {
    setSelectedIndex(index);
    setOpen(false);
    onChange?.(options[index]);
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
        {options.map((option, index) => (
          <MenuItem
            key={option}
            selected={index === selectedIndex}
            onClick={(event) => handleOptionClick(event, index)}
          >
            {option}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

export default SplitButton;
