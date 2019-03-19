import React from "react";
import Loader from "react-loader-spinner";

function Preloader() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh"
      }}
    >
      <div style={{ selfAlign: "center" }}>
        <Loader type="Circles" height="100" width="100" />
      </div>
    </div>
  );
}

export default Preloader;
