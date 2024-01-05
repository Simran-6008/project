const Time = ({ year, event }) => {
  return (
    <>
      <h2
        style={{
          color: "red",
          backgroundColor: "yellow",
          display: "inline-block",
        }}
      >
        {year}
      </h2>
      <p> {event}</p>
    </>
  );
};
export default Time;
