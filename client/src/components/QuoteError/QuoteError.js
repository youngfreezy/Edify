import React from "react";

function QuoteError({ err }) {
  return (
    <div>
      <div>
        <span role="img" aria-label="rocket">
          🚀
        </span>
        <span role="img" aria-label="smh">
          🤦
        </span>
        <span role="img" aria-label="rocket">
          🚀
        </span>
        The following error(s) occured when loading the quote:{" "}
      </div>

      <div>
        <pre>{JSON.stringify(err.errors, null, 4)}</pre>
      </div>
    </div>
  );
}

export default QuoteError;
