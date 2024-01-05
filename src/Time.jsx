const Time = ({ year, event }) => {
  let myStyle = {
    color: "green",
    backgroundColor: "pink",
    display: "inline-block",
  };
  return (
    <>
      <h2 style={myStyle}>{year}</h2>
      <p> {event}</p>
    </>
  );
};
export default Time;
