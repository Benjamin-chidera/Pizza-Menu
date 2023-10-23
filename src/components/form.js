import { useState } from "react";

export function Form({ onAddItems }) {


  // controlled elements
  //1 create a state
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);
  // check the App function for a code there

  function handleSubmit(e) {
    e.preventDefault(); /// this will disable the page reload

    if (!description) return;

    // getting the data out of the form
    const newItem = { description, quantity, packed: false, id: Date.now() };
    console.log(newItem);

    onAddItems(newItem);

    setDescription("");
    setQuantity(1);
  }

  return (
    // the onsubmit event is for a click event and also when we hit enter but instead of onsubmit, we can use onclick but the button directly but using this method, we will only be able to submit by a click and not by the enter key on your keyboard
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your trip 😍</h3>
      <select
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>

      <input
        type="text"
        placeholder="Item..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></input>

      <button>ADD</button>
    </form>
    // 2. use the state as a value in the input field
    // 3. onchange in the input field
  );
}
