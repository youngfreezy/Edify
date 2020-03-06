import React from "react";

function PremiumInformation({ premium }) {
  const generatePremium = () => {
    return premium * (1 + Math.random());
  };
  return (
    <button>
      {" "}
      <h3>***Your Premium will increase to ${generatePremium()}</h3>
    </button>
  );
}

export default PremiumInformation;
