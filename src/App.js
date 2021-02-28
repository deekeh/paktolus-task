import { useState, useEffect } from "react";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";

function App() {
  // track balance
  const [balance, setbalance] = useState(
    (Math.round(100 * 100) / 100).toFixed(2)
  );
  const changeBalance = (n) =>
    setbalance((Math.round((Number(balance) + n) * 100) / 100).toFixed(2));

  // track username
  const [username, setUsername] = useState("");
  const changeUser = (u) => setUsername(u);

  // initialise user, balance on page-load
  useEffect(() => {
    let localBalance = localStorage.getItem("balance");
    let localUsername = localStorage.getItem("username");
    if (localBalance) setbalance(localBalance);
    if (localUsername) setUsername(localUsername);
  }, []);
  useEffect(() => {
    localStorage.setItem("balance", balance);
    localStorage.setItem("username", username);
  }, [balance, username]);

  // delete user data on logout
  const deleteData = () => {
    setbalance((Math.round(100 * 100) / 100).toFixed(2));
    setUsername("");
    localStorage.removeItem("username");
    localStorage.removeItem("balance");
  };

  return (
    <div className="App">
      <Header
        balance={balance}
        username={username}
        onUserChange={changeUser}
        onChange={changeBalance}
        deleteData={deleteData}
      />
      <Content changeBalance={changeBalance} balance={balance} />
      <Footer />
    </div>
  );
}

export default App;
