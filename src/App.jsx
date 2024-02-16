import Time from "./COMPONENTS/Time";
import { useEffect, useState } from "react";
import "./CSS/App.css";
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
      .then((jsonData) => {
        setData(jsonData);
      });
  }, []);

  function handleYear(yea) {
    setYear(yea.target.value);
  }
  function handleIncident(eve) {
    setEvent(eve.target.value);
  }
  function submitEvent() {
    fetch("http://localhost:3002/events", {
      method: "POST",
      body: JSON.stringify({ year, event }),
    });

    let newObj = {};
    newObj.year = year;
    newObj.event = event;
    setData([...data, newObj]);
    setYear("");
    setEvent("");
  }

  return (
    <div>
      <h1>Add Your Memorable Timelines</h1>
      <br />
      {data.map((events) => {
        return <Time key={events.year} year={events.year} event={events.event} />;
      })}
      <input type="number" min="1970" onChange={handleYear} value={year} />
      <input type="text" onChange={handleIncident} value={event} />
      <input className="submit" type="submit" onClick={submitEvent} />
    </div>
  );
};

export default App;
