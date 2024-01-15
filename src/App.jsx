import Time from "./Time";
import events from "./event.json"
const App = () => {
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
      </div>
    </div>
  );
};

export default App;
