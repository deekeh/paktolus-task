import { useState } from "react";

import "./Content.css";
import { Table, Button, Modal } from "react-bootstrap";

const TableRow = (props) => {
  return (
    <tr>
      <td>{props.data.id}</td>
      <td>{props.data.slot[0]}</td>
      <td>{props.data.slot[1]}</td>
      <td>{props.data.slot[2]}</td>
      <td>{props.data.time}</td>
    </tr>
  );
};

const Content = (props) => {
  // const gameData = [];
  const [games, setGames] = useState([]);
  const addGame = (game) => setGames([...games, game]);
  const [gameBox, setGameBox] = useState(false);

  // generate and set slots data
  const [slotsData, setSlotsData] = useState([0, 0, 0]);
  const playGame = (debug) => {
    let s1 = Math.round(Math.random() * 8) + 1;
    let s2 = Math.round(Math.random() * 8) + 1;
    let s3 = Math.round(Math.random() * 8) + 1;
    if (debug) [s1, s2, s3] = [7, 7, 7];
    setSlotsData([s1, s2, s3]);

    if (s1 === s2 && s2 === s3 && s1 === s3 && s1 === 7)
      props.changeBalance(10);
    else if (s1 === s2 && s2 === s3 && s3 === s1) props.changeBalance(5);
    else if (
      [s1, s2].indexOf(s3) !== -1 ||
      [s2, s3].indexOf(s1) !== -1 ||
      [s1, s3].indexOf(s2) !== -1
    )
      props.changeBalance(0.5);
    localStorage.setItem("balance", props.balance);
    let date = new Date();
    const playDate = `${date.getDate()}/${date.getMonth()}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
    addGame({
      id: games.length + 1,
      slot: [s1, s2, s3],
      time: playDate,
    });
  };

  return (
    <div className="bg-dark text-light py-2" id="content">
      <div className="container">
        <Button
          className="mb-3"
          variant="outline-light"
          size="lg"
          block
          onClick={() => setGameBox(true)}
        >
          Play
        </Button>
        <Modal show={gameBox} onHide={() => setGameBox(false)}>
          <Modal.Body>
            <div className="container">
              <div className="slots border">
                {slotsData.map((s, idx) => (
                  <div key={idx} className="w-100 text-center slot-item">
                    {s}
                  </div>
                ))}
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="outline-dark" onClick={() => playGame(false)}>
              Play
            </Button>
            <Button variant="outline-warning" onClick={() => playGame(true)}>
              <i>Debug</i>
            </Button>
            <Button variant="outline-danger" onClick={() => setGameBox(false)}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>

        <Table bordered hover variant="dark" className="text-center">
          <thead>
            <tr>
              <th
                style={{
                  width: "50px",
                  minWidth: "50px",
                }}
              >
                #
              </th>
              <th colSpan="3">Slots</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            {games.map((game) => {
              return <TableRow key={game.id} data={game} />;
            })}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default Content;
