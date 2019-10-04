import { createStore, applyMiddleware } from "redux";
import { createEpicMiddleware } from "redux-observable";
import { PingReducer } from "./../Reducer/PingPongReducer";
import { PingEpic } from "./../Action/PingPongAction";
import { compose } from "redux"; // and your other imports from before

const epicMiddleware = createEpicMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(
  PingReducer,
  composeEnhancers(applyMiddleware(epicMiddleware))
);

epicMiddleware.run(PingEpic);
