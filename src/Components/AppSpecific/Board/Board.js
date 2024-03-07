import { useEffect } from "react";
import { useStateValue } from "../../../Appstate/Provider";
import "./Board.css";
const Board = ({ children }) => {
  const [, dispatch] = useStateValue();
  useEffect(() => {
    fetch("https://api.quicksell.co/v1/internal/frontend-assignment")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log("data", data);
        dispatch({
          type: "SET_TICKETS_DATA",
          taskData: data,
        });
      });
    // eslint-disable-next-line
  }, []);
  let baseClass = "ui-board ";
  return <div className={baseClass}>{children}</div>;
};

export default Board;
