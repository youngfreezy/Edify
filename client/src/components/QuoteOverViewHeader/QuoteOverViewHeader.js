import React from "react";
import "./QuoteOverViewHeader.css";
import get from "lodash/get";

function QuoteOverViewHeader({ quote }) {
  return (
    <div>
      {get(quote, "premium") && (
        <div>
          Hi <strong>{quote.policy_holder.first_name}!</strong>
          <i>
            <h5>
              Your current premium is:{" "}
              <span className="value">{quote.premium}</span>
            </h5>
          </i>
        </div>
      )}

      {get(quote, "variable_selections") &&
        Object.keys(quote.variable_selections).map((key, i) => {
          return (
            <i key={i}>
              <h5>
                <div>
                  Your {key} is:{" "}
                  <span className="value">
                    {quote.variable_selections[key]}
                  </span>
                </div>
              </h5>
            </i>
          );
        })}
    </div>
  );
}

export default QuoteOverViewHeader;
