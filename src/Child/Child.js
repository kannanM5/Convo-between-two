import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { child_submit } from "../redux/actionCreators";
import { useNavigate, Link } from "react-router-dom";
import "../styles/style.css";
import boy from "../images/boy.jpg";

const Child = () => {
  const [childText, setChildText] = useState("");
  const select = useSelector((state) => state);
  // const selectPar = useSelector((state) => state);
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
      <h2>Son to Father</h2>
      <div className="main">
        <div className="navbar">
          <div>
            <img className="boyImage" src={boy} alt="boy" />
          </div>
          <h3>Son</h3>

          <div>
            <button id="homeBtn" onClick={home}>
              Back
            </button>
          </div>
        </div>

        {select.array.map((e, i) => {
          return (
            <div className="section" key={i}>
              <div className="right-section">
                <span className="right-sectionColor">
                  <span className="msg">{e.parentMsg} </span>
                  <span className="dur">{e.parentDur}</span>
                </span>
              </div>
              <div className="left-section">
                <span className="left-sectionColor">
                  <span className="msg">{e.childMsg} </span>
                  <span className="dur">{e.childDur}</span>
                </span>
              </div>
            </div>
          );
        })}
        {/* {selectPar.childArray.map((e, i) => {
          return (
            <div className="section" key={i}>
              <div className="right-section">
                <span className="right-sectionColor">
                  <span className="msg">{e.childMsg} </span>
                  <span className="dur">{e.childDur}</span>
                </span>
              </div>
            </div>
          );
        })} */}
        <div className="footer">
          <div className="gap-1">
            <input
              type="text"
              value={childText}
              onChange={(e) => setChildText(e.target.value)}
            />
          </div>
          <div className="gap-2">
            <button className="btn-1" onClick={submit}>
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
