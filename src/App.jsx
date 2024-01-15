import Time from "./Time";
import events from "./event.json";
import { useState } from "react";
const App = () => {
  function myEvents(val) {
    console.log(val.target.value);
  }
  return (
    <div>
      <div>
        <h1>Welcome to Simran's Timeline</h1>
        <br />
        {events.map((event) => {
          return (
            <Time key={event.year} year={event.year} event={event.event} />
          );
        })}
        <input type="number" min="1970" onChange={myEvents} />
        <input type="text" onChange={myEvents} />
        <input type="submit" />
      </div>
    </div>
  );
};

export default App;
