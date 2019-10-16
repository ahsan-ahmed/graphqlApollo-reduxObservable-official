import React from "react";
import { CounterWithNameAndSideEffect } from "./components/FirstExample";
// import SecondExample from "./components/SecondExample";
import Dogs from "./components/DogDemoQuery";
import DogPhoto from "./components/DogDemoPassArgQuery";
import CurrencyRate from "./components/CurrencyRateQuery";
import AddTodo from "./components/AddTodoMutation";
import UpdateAllEntity from "./components/UpdateAllEntityMutation";
import UpdateTodos from "./components/UpdateTodoMutation";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      {/* <CounterWithNameAndSideEffect />
      <AddTodo />
      <UpdateAllEntity />
      <UpdateTodos />
      <DogPhoto /> */}
      <Dogs />
      {/* <CurrencyRate /> */}
      {/* *************************
      for redux observable component
      // <SecondExample />  
      ************************** */}
    </div>
  );
}
