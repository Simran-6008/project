import Time from "./Time";
import events from "./event.json";
import { useState } from "react";
const App = () => {
  const [data, dataHandle] = useState([])
  const[year, setYear] = useState("")
  const[event, setEvent] = useState("")
  function setYearEvent(yea) {
    setYear(yea.target.value)
  }
  function setIncident(eve){
    setEvent(eve.target.value)
  }
  function submitEvent (){
    let newObj = {}
    newObj.year = year
    newObj.event = event
    console.log(newObj)
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
        <input type="number" min="1970" onChange={setYearEvent} />
        <input type="text" onChange={setIncident} />
        <input type="submit" onClick={submitEvent}/>
      </div>
    </div>
  );
};

export default App;
