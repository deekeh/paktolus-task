import { useState } from "react";

import "./Content.css";
import { Table, Button } from "react-bootstrap";

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

const Content = () => {
  const gameData = [
    {
      id: 1,
      slot: [1, 2, 3],
      time: "27/02/2020 23:32",
    },
    {
      id: 2,
      slot: [2, 2, 3],
      time: "27/02/2020 23:32",
    },
    {
      id: 3,
      slot: [5, 5, 5],
      time: "27/02/2020 23:32",
    },
  ];
  const [games, setGames] = useState(gameData);
  const addGame = (game) => setGames([...games, game]);

  return (
    <div className="bg-dark text-light py-2" id="content">
      <div className="container">
        <Button
          className="mb-3"
          variant="outline-light"
          size="lg"
          block
          onClick={() =>
            addGame({
              id: games.length + 1,
              slot: [6, 7, 5],
              time: "27/02/2020 23:23",
            })
          }
        >
          Play
        </Button>
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
