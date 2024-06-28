import { useImperativeHandle, useState } from "react"

//import logo from "./logo.svg";
export default App
//import "./index.css";

function App() {
  return (
    <div>
      <TipCalculator />;
    </div>
  )
}

function TipCalculator() {
  const [value1, setValue] = useState("")
  const [percentage1, setPercentage1] = useState(0)
  const [percentage2, setPercentage2] = useState(0)

  //const []

  const tip = value1 * ((percentage1 + percentage2) / 2 / 100)

  console.log("the tip value is:", tip)

  function Reset() {
    setValue("")
    setPercentage1(0)
    setPercentage2(0)
  }

  return (
    <div className="App">
      <TextComponent1 value1={value1} onSetValue={setValue}>
        How much was the bill?
      </TextComponent1>
      <TextComponent2 percentage={percentage1} onSelect={setPercentage1}>
        How did you like the service?{" "}
      </TextComponent2>
      <TextComponent2 percentage={percentage2} onSelect={setPercentage2}>
        {" "}
        How did your friend like the service?{" "}
      </TextComponent2>
      {value1 > 0 && (
        <div>
          <Output value1={value1} tip={tip} />
          <Reset onReset={Reset} />
        </div>
      )}
    </div>
  )
}

function TextComponent1({ children, value1, onSetValue }) {
  return (
    <div>
      <p>{children}</p>
      <span>
        <input
          type="text"
          placeholder="waiting to fill the blank !"
          value={value1}
          onChange={(e) => {
            onSetValue(Number(e.target.value))
          }}
        ></input>
      </span>
    </div>
  )
}

function TextComponent2({ children, percentage, onSelect }) {
  return (
    <div className="App">
      <p>{children}</p>
      <span>
        <select
          value={percentage}
          onChange={(e) => onSelect(Number(e.target.value))}
        >
          <option value="0">Dissatisfied (0%)</option>
          <option value="5">It was OK (5%) </option>
          <option value="10">It was good (10%)</option>
          <option value="20">Absolutely Amazing (20%)</option>
        </select>

        {/* <input type="text"></input> */}
      </span>
    </div>
  )
}

function Output({ value1, tip }) {
  return (
    <div>
      <h3>
        You pay {value1 + tip} (${value1}+${tip} tip)
      </h3>
    </div>
  )
}

function Reset({ onReset }) {
  return (
    <div>
      <button onClick={onReset}>Reset</button>
    </div>
  )
}
