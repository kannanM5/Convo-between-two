import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { parent_submit } from "../redux/actionCreators";
import { useNavigate, Link } from "react-router-dom";
import "../styles/style.css";
import father from "../images/father.jpg";

const Parent = () => {
  const [ParentText, setParentText] = useState("");
  const select = useSelector((state) => state);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submit = () => {
    const today = new Date();

    const min = today.getMinutes();
    const hrs = today.getHours();
    let AMPM = hrs >= 12 ? "PM" : "AM";
    let mins = min < 10 ? "0" + min : min;
    const time = hrs + ":" + mins + " " + AMPM;
    if (ParentText) {
      dispatch(parent_submit(ParentText, time));
      setParentText("");
    }
  };

  const home = () => {
    navigate("/");
  };
  return (
    <div className="content">
      <h2>Message from Father</h2>
      <div className="sub-part">
        <div className="nav">
          <div>
            <img className="father" src={father} alt="father" />
          </div>

          <h3>Dad</h3>

          <div>
            <button id="home" onClick={home}>
              Back
            </button>
          </div>
        </div>

        {select.parentArray.map((e, i) => {
          return (
            <div className="separ" key={i}>
              <span className="msg">{e.msg} </span>
              <span className="dur">{e.dur}</span>
            </div>
          );
        })}
        <div className="boxes">
          <div className="gap">
            <input
              type="text"
              value={ParentText}
              onChange={(e) => setParentText(e.target.value)}
            />
          </div>
          <div className="gap">
            <button className="btn" onClick={submit}>
              Enter
            </button>
          </div>
        </div>
      </div>
      <Link to="/son">Move</Link>
    </div>
  );
};

export default Parent;
