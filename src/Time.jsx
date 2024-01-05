import "./Time.css";
const Time = ({ year, event }) => {
  return (
    <>
      <h2 className="heading">{year}</h2>
      <p> {event}</p>
    </>
  );
};
export default Time;
