const Time = ({ year, incident }) => {
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
      <p> {incident}</p>
    </>
  );
};
export default Time;
