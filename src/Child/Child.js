import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { child_submit } from "../redux/actionCreators";
import { useNavigate, Link } from "react-router-dom";
import "../styles/style.css";
import boy from "../images/boy.jpg";

const Child = () => {
  const [childText, setChildText] = useState("");
  const select = useSelector((state) => state);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const today = new Date();

  const min = today.getMinutes();
  const hrs = today.getHours();
  let AMPM = hrs >= 12 ? "PM" : "AM";
  let mins = min < 10 ? "0" + min : min;
  const time = hrs + ":" + mins + " " + AMPM;

  const submit = () => {
    if (childText) {
      dispatch(child_submit(childText, time));
      setChildText("");
    }
  };

  const home = () => {
    navigate("/");
  };

  return (
    <div className="content">
      <h2>Message from Son</h2>
      <div className="sub-part">
        <div className="nav">
          <div>
            <img className="boy" src={boy} alt="boy" />
          </div>
          <h3>Son</h3>

          <div>
            <button id="home" onClick={home}>
              Back
            </button>
          </div>
        </div>

        {select.childArray.map((e, i) => {
          return (
            <div className="separ1" key={i}>
              <span className="msg">{e.msg} </span>
              <span className="dur">{e.dur}</span>
            </div>
          );
        })}
        <div className="boxes">
          <div className="gap">
            <input
              type="text"
              value={childText}
              onChange={(e) => setChildText(e.target.value)}
            />
          </div>
          <div className="gap">
            <button className="btn" onClick={submit}>
              Enter
            </button>
          </div>
        </div>
      </div>
      <Link to="/parent">Move</Link>
    </div>
  );
};

export default Child;
