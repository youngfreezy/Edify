import React from "react";
import "./InputField.css";

import { TextField } from "@material-ui/core";

function InputField({ label, id, onChange, required }) {
  return (
    <div className="input-field">
      <TextField
        id={id}
        onChange={onChange}
        label={label}
        required={required}
      />
    </div>
  );
}

export default InputField;
