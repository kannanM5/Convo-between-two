import React from "react";
import "./App.css";
import { useNavigate } from "react-router-dom";
import father from "../src/images/father.jpg";
import boy from "../src/images/boy.jpg";

const App = () => {
  const navigate = useNavigate();

  const fatherClick = () => {
    navigate("./parent");
  };

  const sonClick = () => {
    navigate("./son");
  };
  return (
    <div className="App">
      <div className="app">
        <div>
          <h1>Conversation between Father and Son</h1>
          <h2>Tab to Chat</h2>
        </div>
        <div className="left">
          <button className="btn" onClick={fatherClick}>
            <div>
              <img id="father" src={father} alt="father" />
            </div>
            <div>Father</div>
          </button>
          <br />
          <br />
          <button className="btn" onClick={sonClick}>
            <div>
              <img id="son" src={boy} alt="boy" />
            </div>
            <div> Son</div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
