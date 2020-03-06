import React, { useState } from "react";
import { Button } from "@material-ui/core";
import get from "lodash/get";
import PremiumInformation from "../PremiumInformation/PremiumInformation";
import SelectVariableOption from "../SelectVariableOption/SelectVariableOption"
import "./QuoteOverViewVariableOptions.css";
function QuoteOverViewVariableOptions({
  quote,
  makeChangesButtonClicked,
  handleClick
}) {
  const [deductibleValue, setDeductibleValue] = useState("");
  const [collisionValue, setCollisionValue] = useState("");
  const [userSelectedValue, setUserSelectedValue] = useState(false);

  const handleChange = (event, title) => {
    setUserSelectedValue(true);
    if (title === "Deductible") {
      setDeductibleValue(event.target.value);
    } else {
      setCollisionValue(event.target.value);
    }
  };

  return (
    <div>
      {!makeChangesButtonClicked && (
        <Button
          className="variable-selection-button"
          color="primary"
          onClick={handleClick}
        >
          Make Changes
        </Button>
      )}

      <div>
        {makeChangesButtonClicked && (
          <Button color="primary" onClick={handleClick} id="cancel">
            Cancel Changes
          </Button>
        )}
      </div>

      <div className="variable-options">
        {makeChangesButtonClicked &&
          Object.values(get(quote, "variable_options", {})).map((option, i) => {
            if (option) {
              return (
                <div key={i} className="variable-option">
                  <div className={"option-row"}>
                    {option.title}: {option.description}
                  </div>

                  <div className="select-text">
                    <i>Select a new option below: </i>
                  </div>
                  <SelectVariableOption deductibleValue={deductibleValue} collisionValue={collisionValue} handleChange={handleChange} option={option}/>
                </div>
              );
            }

            return null;
          })}
      </div>
      {!!makeChangesButtonClicked && userSelectedValue && (
        <PremiumInformation premium={quote.premium} />
      )}
    </div>
  );
}

export default QuoteOverViewVariableOptions;
