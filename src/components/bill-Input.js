import React from "react";

export const Bill = ({ bill, onSetBill }) => {
  return (
    <div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <h5>How much was the bill ?</h5>
        <div>
          <input
            placeholder="Bill value"
            value={bill}
            onChange={(e) => onSetBill(Number(e.target.value))}
            type="text"
            style={{ marginLeft: "10px" }}
          ></input>
        </div>
      </div>
    </div>
  );
};
