import React from "react";
import spinner from "./Spinner.svg";
const Spinner = () => {
  return (
    <React.Fragment>
      <img
        src={spinner}
        alt='Loading...'
        style={{
          width: "150px",
          display: "block",
          margin: "auto",
        }}
      />
    </React.Fragment>
  );
};

export default Spinner;
