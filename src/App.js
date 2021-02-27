import { useState } from "react";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";

function App() {
  const [balance, setbalance] = useState(
    (Math.round(100.0 * 100) / 100).toFixed(2)
  );

  const changeBalance = (n) =>
    setbalance((Math.round(n * 100) / 100).toFixed(2));
  return (
    <div className="App">
      <Header balance={balance} onChange={changeBalance} />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
