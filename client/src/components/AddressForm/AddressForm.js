import React from "react";
import "./AddressForm.css";
import { FormControl } from "@material-ui/core";
import InputField from "../InputField/InputField";

function AddressForm({
  onChange,
  formState,
  displayErrorMessages,
  serverSideError
}) {
  return (
    <div className="address-form">
      <FormControl>
        <InputField
          label="Address"
          id="line_1"
          onChange={onChange}
          required={true}
        />
        {displayErrorMessages("line_1", formState)}
      </FormControl>
      {}
      <FormControl>
        <InputField
          label="Line 2"
          id="line_2"
          onChange={onChange}
          required={false}
        />
        {displayErrorMessages("line_2", formState)}
      </FormControl>
      <FormControl>
        <InputField
          label="City"
          id="city"
          onChange={onChange}
          required={true}
        />
        {displayErrorMessages("city", formState)}
      </FormControl>
      <FormControl>
        <InputField
          label="Region"
          id="region"
          onChange={onChange}
          required={true}
        />
        {displayErrorMessages("region", formState)}
      </FormControl>
      <FormControl>
        {/* another option to teh way I implemented was doing a throttle
         and checking for validation as the user types but that would be 
         expensive in terms of network requests */}
        <InputField
          label="Postal"
          id="postal"
          onChange={onChange}
          required={true}
        />
        {displayErrorMessages("postal", formState, serverSideError)}
      </FormControl>
    </div>
  );
}

export default AddressForm;
