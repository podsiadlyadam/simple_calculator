import { Display } from "./components/Display";
import { Button } from "./components/Button";

export const Calculator = () => {
  return (
    <div
      style={{
        width: "460px",
        height: "640px",
        backgroundColor: "#272829",
        borderRadius: "24px",
        borderWidth: "2px",
        borderColor: "#ffffff",
        borderStyle: "solid",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Display />
      <div
        style={{
          display: "flex",
          flex: 1,
        }}
      >
        <Button color={"#414546"} title={"AC"} />
        <Button color={"#414546"} title={"+/-"} />
        <Button color={"#414546"} title={"%"} />
        <Button color={"#FF9E0C"} title={"/"} />
      </div>
      <div
        style={{
          display: "flex",
          flex: 1,
        }}
      >
        <Button title={"7"} />
        <Button title={"8"} />
        <Button title={"9"} />
        <Button color={"#FF9E0C"} title={"X"} />
      </div>
      <div
        style={{
          display: "flex",
          flex: 1,
        }}
      >
        <Button title={"4"} />
        <Button title={"5"} />
        <Button title={"6"} />
        <Button color={"#FF9E0C"} title={"-"} />
      </div>
      <div
        style={{
          display: "flex",
          flex: 1,
        }}
      >
        <Button title={"1"} />
        <Button title={"2"} />
        <Button title={"3"} />
        <Button color={"#FF9E0C"} title={"+"} />
      </div>
      <div
        style={{
          display: "flex",
          flex: 1,
        }}
      >
        <Button title={"0"} flexNumber={2} />
        <Button title={","} />
        <Button color={"#FF9E0C"} title={"="} />
      </div>
    </div>
  );
};
