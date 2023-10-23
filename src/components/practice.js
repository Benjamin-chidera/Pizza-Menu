import { useState } from "react";

export const Practice = () => {
  const [bills, setBills] = useState("");
  const [per1, setPer1] = useState(0);
  const [per2, setPer2] = useState(0);

  const tip = bills * ((per1 + per2) / 2 / 100);
 
  function handleReset() {
    setBills("")
    setPer2(0)
    setPer1(0)
  }

  return (
    <div>
      <Bills bills={bills} setBills={setBills}></Bills>
      <Service per={per1} setPer={setPer1}>
        How did you like the service
      </Service>
      <Service per={per2} setPer={setPer2}>
        How did your friend like the service
      </Service>
      <Output bills={bills} tip={tip}></Output>
      <Reset onReset={handleReset}></Reset>
    </div>
  );
};

function Bills({ bills, setBills }) {
  return (
    <div>
      <span>How much was the bill?</span>
      <input
        value={bills}
        onChange={(e) => setBills(Number(e.target.value))}
        placeholder="Your bills"
        type="text"
      ></input>
    </div>
  );
}

function Service({ children, per, setPer }) {
  return (
    <div>
      <span>{children}</span>
      <select value={per} onChange={(e) => setPer(e.target.value)}>
        <option value="0">Dissatisfied (0%)</option>
        <option value="5">It was ok (5%)</option>
        <option value="10">It was good (10%)</option>
        <option value="20">Absolutely amazing! (20%)</option>
      </select>
    </div>
  );
}

function Output({bills, tip}) {
  return (
    <div>
      <h3>You pay ${bills + tip} (${bills} + ${tip} tip)</h3>
    </div>
  );
}

function Reset({onReset}) {
  return (
    <div>
      <button onClick={onReset}>Reset</button>
    </div>
  );
}
