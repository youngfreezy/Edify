import React, { useState, useEffect } from "react";
import {
  FormControl,
  Button,
  FormHelperText,
  TextField
} from "@material-ui/core";
import AddressForm from "../AddressForm/AddressForm";
import { useHistory } from "react-router-dom";
import "./RatingInformationForm.css";
import {
  hasAllRequiredProperties,
  displayErrorMessages
} from "../../utils/utils";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import TitleSection from "../TitleSection/TitleSection";

function RatingInformationForm({
  onChange,
  formState,
  handleSubmit,
  loading,
  serverSideError
}) {
  const history = useHistory();
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    if (hasAllRequiredProperties(formState)) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [formState]);
  return (
    <div>
      {loading && <LoadingSpinner />}

      <form
        onSubmit={e => {
          e.preventDefault();
          handleSubmit(e, history);
        }}
      >
        <TitleSection
          text={
            "Enter the Information Below to Receive a Quote for Your Rocket!"
          }
          emoji={[{ val: "🚀", name: "rocket" }]}
        />

        <div className="rating-form">
          <FormControl>
            <TextField
              label="First Name"
              id="first_name"
              onChange={onChange}
              required
            />
            {displayErrorMessages("first_name", formState)}
          </FormControl>
          <FormControl>
            <TextField
              label="Last Name"
              id="last_name"
              onChange={onChange}
              required
            />
            {displayErrorMessages("last_name", formState)}
          </FormControl>
          <AddressForm
            onChange={onChange}
            formState={formState}
            displayErrorMessages={displayErrorMessages}
            serverSideError={serverSideError.err}
          />
          <FormHelperText id="helper-text">
            We'll never share your personal information.
          </FormHelperText>
        </div>
        <Button id="submit" type="submit" color="primary" disabled={disabled}>
          Submit
        </Button>
      </form>
    </div>
  );
}

export default RatingInformationForm;
