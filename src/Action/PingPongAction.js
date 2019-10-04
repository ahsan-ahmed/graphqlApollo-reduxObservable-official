import { mapTo, delay, filter } from "rxjs/operators";
import { ofType } from "redux-observable";

// const PING = "";
// const PONG = "PONG";

export const Ping = val => {
  console.log(val);
  return { type: val };
};
export const PingEpic = action$ =>
  action$.pipe(
    ofType("PING"),
    delay(1000), // Asynchronously wait 1000ms then continue
    mapTo({ type: "PONG" })
  );
