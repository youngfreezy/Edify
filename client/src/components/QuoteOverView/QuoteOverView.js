import React, { useState } from "react";
// import mockQuote from "./mockQuote";
import QuoteOverViewHeader from "../QuoteOverViewHeader/QuoteOverViewHeader";
import QuoteOverViewVariableOptions from "../QuoteOverViewVariableOptions/QuoteOverViewVariableOptions";
import QuoteError from "../QuoteError/QuoteError";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import TitleSection from "../TitleSection/TitleSection";
function QuoteOverView({ quote, loading }) {
  //for testing, uncomment to avoid submitting post request in previous screen
  // quote = mockQuote;
  const [makeChangesButtonClicked, setmakeChangesButtonClicked] = useState(
    false
  );

  const handleClick = () => {
    setmakeChangesButtonClicked(!makeChangesButtonClicked);
  };
  const quoteExists = quote.quoteId && !quote.err;
  return (
    <div>
      {loading && <LoadingSpinner />}
      <form
        onSubmit={e => {
          e.preventDefault();
          //TBD
        }}
      >
        <TitleSection
          text={"Quote Overview"}
          emoji={[
            { val: "🚀", name: "rocket" },
            { val: "🚀", name: "rocket" },
            { val: "💸", name: "money" }
          ]}
        />

        {!quoteExists && quote.err && <QuoteError err={quote.err} />}
        {quoteExists && <QuoteOverViewHeader quote={quote} />}
        {quoteExists && (
          <QuoteOverViewVariableOptions
            quote={quote}
            makeChangesButtonClicked={makeChangesButtonClicked}
            handleClick={handleClick}
          />
        )}
      </form>
    </div>
  );
}

export default QuoteOverView;
