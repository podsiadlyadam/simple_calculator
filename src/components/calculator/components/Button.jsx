export const Button = ({ color = "#5C6162", title, flexNumber = 1 }) => {
  return (
    <div
      style={{
        color: "white",
        backgroundColor: color,
        display: "flex",
        flex: flexNumber,
      }}
    >
      {title}
    </div>
  );
};
