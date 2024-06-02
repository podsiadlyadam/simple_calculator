export const Button = ({
  color = "#5C6162",
  title,
  flexNumber = 1,
  onClick,
}) => {
  return (
    <div
      onClick={onClick}
      style={{
        color: "white",
        backgroundColor: color,
        display: "flex",
        flex: flexNumber,
        justifyContent: "center",
        alignItems: "center",
        fontSize: "36px",
        boxShadow: "inset 0px 0px 0px 1px #272829",
        cursor: "pointer",
      }}
    >
      {title}
    </div>
  );
};
