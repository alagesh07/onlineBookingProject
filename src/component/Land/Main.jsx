import React, { useState } from "react";
import ReactDatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import './Home.css'
const Main = () => {
  const [selectedOption1, setSelectedOption1] = useState("");
  const [selectedOption2, setSelectedOption2] = useState("");
  const [selectedDate, setSelectedDate] = useState(null);
  const [count, setCount] = useState(0);

  const handleOptionSelect = (option, dropdown) => {
    if (dropdown === "dropdownBox1") {
      setSelectedOption1(option);
    } else if (dropdown === "dropdownBox2") {
      setSelectedOption2(option);
    }
  };

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const handleButtonClick = () => {
    alert("Your tickets are booked Successfully");
  };

  return (
    <div className="main">
      <div className="dropdown">
        <label htmlFor="dropdownBox1">Category:</label>
        <div className="dropdown-textbox">
          <input
            type="text"
            id="dropdownBox1"
            name="dropdownBox1"
            placeholder="Select category"
            readOnly
            value={selectedOption1}
          />
          <ul className="dropdown-options">
            <li onClick={() => handleOptionSelect("Parks", "dropdownBox1")}>
              Parks
            </li>
            <li onClick={() => handleOptionSelect("Resorts", "dropdownBox1")}>
              Resorts
            </li>
          </ul>
        </div>
      </div>

      <div className="dropdown">
        <label htmlFor="dropdownBox2">Location:</label>
        <div className="dropdown-textbox">
          <input
            type="text"
            id="dropdownBox2"
            name="dropdownBox2"
            placeholder="Select location"
            readOnly
            value={selectedOption2}
          />
          <ul className="dropdown-options">
            <li onClick={() => handleOptionSelect("OceanPark Chennai", "dropdownBox2")}>
              OceanPark Chennai
            </li>
            <li onClick={() => handleOptionSelect("OceanPark Kochi", "dropdownBox2")}>
              OceanPark Kochi
            </li>
            <li onClick={() => handleOptionSelect("OceanPark Bangalore", "dropdownBox2")}>
              OceanPark Bangalore
            </li>
          </ul>
        </div>
      </div>

      {/* Datepicker */}
      <div className="datepicker">
        <label htmlFor="datePicker">Select a Date:</label>
        <ReactDatePicker
          id="datePicker"
          selected={selectedDate}
          onChange={(date) => setSelectedDate(date)}
          dateFormat="MM/dd/yyyy"
          placeholderText="mm/dd/yyyy"
        />
      </div>

      {/* Textbox with Increment and Decrement */}
      <div className="counter">
        <label htmlFor="count">No. of Persons:</label>
        <div>
          <button onClick={handleDecrement}>-</button>
          <input type="text" id="count" name="count" readOnly value={count} />
          <button onClick={handleIncrement}>+</button>
        </div>
      </div>

      {/* Button */}
      <button className="but1" onClick={handleButtonClick}>
        Book Now
      </button>
      <br/>
      <h1></h1>
    </div>
  );
};

export default Main;
