//import logo from "./logo.svg";
import { useEffect, useState } from "react";
import "./index.css";

export default App;
// `https://api.frankfurter.app/latest?amount=100&from=EUR&to=USD`
function App() {
  const [query, setQuery] = useState([]);
  const [amount, setAmount] = useState(1);
  const [moneyFrom, setMoneyFrom] = useState("EUR");
  const [moneyTo, setMoneyTo] = useState("USD");
  const [converted, setConverted] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(
    function () {
      async function fetchAPI() {
        setLoading(true);

        const res = await fetch(
          `https://api.frankfurter.app/latest?amount=${amount}&from=${moneyFrom}&to=${moneyTo}`
        );

        const data = await res.json();
        // setQuery(data);

        setConverted(data.rates[moneyTo]);
        setLoading(false);
      }
      if (moneyFrom === moneyTo) return setConverted(amount);
      fetchAPI();
      // console.log(query);
    },
    [amount, moneyFrom, moneyTo]
  );

  return (
    <div>
      <input
        type="text"
        value={amount}
        placeholder="please enter a number"
        onChange={(e) => setAmount(Number(e.target.value))}
        disabled={loading}
      ></input>
      <select
        value={moneyFrom}
        onChange={(e) => setMoneyFrom(e.target.value)}
        disabled={loading}
      >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <select
        value={moneyTo}
        onChange={(e) => setMoneyTo(e.target.value)}
        disabled={loading}
      >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <p>
        {converted} {moneyTo}
      </p>
    </div>
  );
}

// function Loader() {
//   return <p className="loader">Loading...</p>;
// }
