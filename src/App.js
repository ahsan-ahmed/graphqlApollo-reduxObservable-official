import React from "react";
import logo from "./logo.svg";
import { connect } from "react-redux";
import "./App.css";
import { Ping } from "./Action/PingPongAction";

class App extends React.Component {
  handlePingClick = () => {
    this.props.PingAction("PING");
    console.log(this.props.PingReducer);
  };

  render() {
    // console.log(props);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <h1>is pinging: {this.props.PingReducer.toString()}</h1>
          <button onClick={this.handlePingClick}>Start PING</button>
        </header>
      </div>
    );
  }
}

const mapStateToProps = state => ({ PingReducer: state.isPinging });
const mapDispatchToProps = dispatch => ({
  PingAction: value => dispatch(Ping(value))
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
