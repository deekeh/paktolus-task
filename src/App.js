import { useState } from "react";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";

function App() {
  const [balance, setbalance] = useState(
    (Math.round(100 * 100) / 100).toFixed(2)
  );

  const changeBalance = (n) =>
    setbalance((Math.round((Number(balance) + n) * 100) / 100).toFixed(2));
  return (
    <div className="App">
      <Header balance={balance} onChange={changeBalance} />
      <Content changeBalance={changeBalance} />
      <Footer />
    </div>
  );
}

export default App;
