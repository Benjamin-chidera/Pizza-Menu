import React from "react";

export const Service = ({children, percentage, setPercentage}) => {
  return (
    <div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <h5>{children}</h5>
        <div>
          <select value={percentage} onChange={(e) => setPercentage(e.target.value)}>
            <option value="0">Dissatisfied (0%)</option>
            <option value="5">It was ok (5%)</option>
            <option value="10">It was good (10%)</option>
            <option value="20">Absolutely amazing! (20%)</option>
          </select>
        </div>
      </div>
    </div>
  );
};
