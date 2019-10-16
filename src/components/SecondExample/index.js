import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Ping } from "./../../Action/PingPongAction";

function SecondExample(props) {
  const [count, setCount] = useState(0);
  const [value, setValue] = useState("initial");

  const handlePingClick = () => {
    props.PingAction("PING");
  };

  useEffect(() => {
    document.title = `You clicked ${count} times`;
    console.log(count);
  }, [count]);

  useEffect(() => {
    console.log("render!");
    return () => console.log("unmounting...");
  });

  useEffect(() => {
    console.log(value);
  }, [value]);
  return (
    <div className="App">
      <h1>is pinging: {props.PingReducer.toString()}</h1>
      <button onClick={handlePingClick}>Start PING</button>
      <button
        onClick={() => {
          setCount(!count);
          setValue("final");
        }}
      >{`count increment ${count}`}</button>
    </div>
  );
}

const mapStateToProps = state => ({ PingReducer: state.isPinging });
const mapDispatchToProps = dispatch => ({
  PingAction: value => dispatch(Ping(value))
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SecondExample);
