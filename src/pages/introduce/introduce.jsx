import React from "react";
import "./Introduce.css";
import Dropdown from "../../components/dropdown/Dropdown";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "reactstrap";

const Introduce = () => {
  const difficulty = ["easy", "medium", "hard"];
  const [difficultyChange, setDifficultyChange] = useState("");
  return (
    <div className="introduce">
      <div className="introduce-container">
        <img
          src="https://t3.ftcdn.net/jpg/05/69/96/48/360_F_569964847_Wa3tNpPYRGABpplPGSFT3LLB7E2wU0jb.jpg"
          alt=""
        />
        <Dropdown data={difficulty} setDifficultyChange={setDifficultyChange} />
        <div className="introduce-btn">Quize Başla </div>
      </div>
    </div>
  );
};

export default Introduce;
