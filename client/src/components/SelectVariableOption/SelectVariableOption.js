import { Select, MenuItem } from "@material-ui/core";
import React from "react";

export default function SelectVariableOption({
  deductibleValue,
  collisionValue,
  handleChange,
  option
}) {
  return (
    <Select
      className={`select-option`}
      value={
        option.title === "Deductible"
          ? deductibleValue || option.values[0]
          : collisionValue || option.values[0]
      }
      onChange={e => {
        handleChange(e, option.title);
      }}
    >
      {option.values.map((item, i) => {
        return (
          <MenuItem value={item} key={i}>
            {item}
          </MenuItem>
        );
      })}
    </Select>
  );
}
