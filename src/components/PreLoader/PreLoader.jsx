import React from "react";
import "./PreLoader.css";

const PreLoader = () => {
  return (
    <div
      style={{
        display: "table",
        position: "absolute",
        height: "100%",
        width: "100%"
      }}
    >
      <div
        style={{
          display: "table-cell",
          verticalAlign: "middle"
        }}
      >
        <div
          style={{
            marginLeft: "auto",
            marginRight: "auto",
            width: "400px"
          }}
        >
          <div>
            <h2>Loading Data....</h2>
            <div className={"psoload"}>
              <div className={"straight"} />
              <div className={"curve"} />
              <div className={"center"} />
              <div className={"inner"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreLoader;
