import Time from "./Time";
import { useEffect, useState } from "react";

const App = () => {
  const [data, setData] = useState([]);
  const [year, setYear] = useState("");
  const [event, setEvent] = useState("");

  useEffect(() => {
    fetch("http://localhost:3002/events")
      .then((responsive) => {
        //console.log(responsive)
        return responsive.json();
      })
      .then((jsonData) => {setData(jsonData)});
  },[])

  function handleYear(yea) {
    setYear(yea.target.value);
  }
  function handleIncident(eve) {
    setEvent(eve.target.value);
  }
  function submitEvent() {
    let newObj = {};
    newObj.year = year;
    newObj.event = event;
    setData([...data, newObj]);
    setYear("");
    setEvent("");
  }
  return (
    <>
      <div>
        <h1>Welcome to Simran's Timeline</h1>
        <br />
        {data.map((event) => {
          return (
            <Time
              key={year}
              year={event.year}
              incident={event.incident}
            />
          );
        })}
        <input type="number" min="1970" onChange={handleYear} value={year} />
        <input type="text" onChange={handleIncident} value={event} />
        <input type="submit" onClick={submitEvent} />
      </div>
    </>
  );
};

export default App;
