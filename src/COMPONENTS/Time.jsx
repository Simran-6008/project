import "../CSS/Time.css"

const Time = ({ year, event }) => {
  return (
    <div>
      <h2>Year :: {year}</h2>
      <p>Event :: {event}</p>
      <hr />
    </div>
  );
};

export default Time;
