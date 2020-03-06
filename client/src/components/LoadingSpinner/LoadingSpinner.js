import React, { useState, useEffect } from "react";
import CircularProgress from "@material-ui/core/CircularProgress";

function LoadingSpinner() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    function tick() {
      // reset when reaching 100%
      setProgress(oldProgress => (oldProgress >= 100 ? 0 : oldProgress + 1));
    }

    const timer = setInterval(tick, 20);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return <CircularProgress variant="determinate" value={progress} />;
}
export default LoadingSpinner;
