export const Display = ({ value }) => {
  return (
    <div
      style={{
        height: "160px",
        width: "100%",
        color: "white",
        fontSize: "72px",
        textAlign: "right",
      }}
    >
      <div
        style={{
          paddingRight: "20px",
          paddingLeft: "20px",
          paddingTop: "30px",
        }}
      >
        {value}
      </div>
    </div>
  );
};
