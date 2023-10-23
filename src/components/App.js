import React, { useState } from "react";
import { Bill } from "./bill-Input";
import { Service } from "../service-Input";
import { Output } from "./Output";
import { Reset } from "./reset";
import { Practice } from "./practice";


// const messages = [
//   "Learn React ⚛️",
//   "Apply for jobs 💼",
//   "Invest your new income 🤑",
// ];

function App() {
  const [items, setItems] = useState([]); // this empty array is for when we open the app we want to meet an empty item der so we can start adding our own items

  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }

  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handleClear() {
    const confirmed = window.confirm(
      "Are you sure you want to delete all items"
    );
    if (confirmed) {
      setItems([]);
    }
  }

 

  // this is for the tip calculator
  const [bill, setBill] = useState("");
  const [percentage1, setPercentage1] = useState(0);
  const [percentage2, setPercentage2] = useState(0);
  // this is for the tip calculator

  const tip = bill * ((percentage1 + percentage2) / 2 / 100);

  function handleReset() {
    setBill("");
    setPercentage1(0);
    setPercentage2(0);
  }

  return (
    <div className="app">
      <Bill bill={bill} onSetBill={setBill}></Bill> 
      <Service percentage={percentage1} setPercentage={setPercentage1}>
        How did you like the service
      </Service>
      <Service percentage={percentage2} setPercentage={setPercentage2}>
        How did your friend like the service
      </Service>
       {bill > 0 && (
        <>
          {" "}
          <Output bill={bill} tip={tip}></Output>
          <Reset onReset={handleReset}></Reset>{" "}
        </>
      )}
      <Practice></Practice>
    </div>
  );
}

export default App;
