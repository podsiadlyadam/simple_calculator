import { Display } from "./components/Display";
import { Button } from "./components/Button";
import { useState } from "react";

export const Calculator = () => {
  const [clipboardData, setClipboardData] = useState(0);
  const [result, setResult] = useState(0);
  const [symbol, setSymbol] = useState("");

  const handleAC = () => {
    setResult(0);
    setClipboardData(0);
  };

  const handleNumber = (number) => {
    setResult((prevState) => {
      if (parseFloat(prevState) === 0) {
        return number.toString();
      }

      return prevState.toString() + number;
    });
  };

  const handleSymbol = (symbol) => {
    setSymbol(symbol);
    setClipboardData(result);
    setResult(0);
  };

  const handleCalculate = () => {
    let calculated = 0;

    if (symbol === "+") {
      calculated = parseFloat(result) + parseFloat(clipboardData);
    }

    if (symbol === "-") {
      calculated = parseFloat(result) - parseFloat(clipboardData);
    }

    if (symbol === "x") {
      calculated = parseFloat(result) * parseFloat(clipboardData);
    }

    if (symbol === "/") {
      calculated = parseFloat(result) / parseFloat(clipboardData);
    }

    setResult(calculated);
    setSymbol("");
    setClipboardData(calculated);
  };

  const handleComa = () => {
    setResult((prevState) => {
      return prevState.toString() + ".";
    });
  };

  const handleChangeSign = () => {
    setResult((prevState) => {
      return parseFloat(prevState) * -1;
    });
  };

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
        overflow: "hidden",
      }}
    >
      <Display value={result} />
      <div
        style={{
          display: "flex",
          flex: 1,
        }}
      >
        <Button color={"#414546"} title={"AC"} onClick={handleAC} />
        <Button color={"#414546"} title={"+/-"} onClick={handleChangeSign} />
        <Button color={"#414546"} title={"%"} />
        <Button
          color={"#FF9E0C"}
          title={"/"}
          onClick={() => handleSymbol("/")}
        />
      </div>
      <div
        style={{
          display: "flex",
          flex: 1,
        }}
      >
        <Button
          title={"7"}
          onClick={() => {
            handleNumber(7);
          }}
        />
        <Button
          title={"8"}
          onClick={() => {
            handleNumber(8);
          }}
        />
        <Button
          title={"9"}
          onClick={() => {
            handleNumber(9);
          }}
        />
        <Button
          color={"#FF9E0C"}
          title={"x"}
          onClick={() => handleSymbol("x")}
        />
      </div>
      <div
        style={{
          display: "flex",
          flex: 1,
        }}
      >
        <Button
          title={"4"}
          onClick={() => {
            handleNumber(4);
          }}
        />
        <Button
          title={"5"}
          onClick={() => {
            handleNumber(5);
          }}
        />
        <Button
          title={"6"}
          onClick={() => {
            handleNumber(6);
          }}
        />
        <Button
          color={"#FF9E0C"}
          title={"-"}
          onClick={() => handleSymbol("-")}
        />
      </div>
      <div
        style={{
          display: "flex",
          flex: 1,
        }}
      >
        <Button
          title={"1"}
          onClick={() => {
            handleNumber(1);
          }}
        />
        <Button
          title={"2"}
          onClick={() => {
            handleNumber(2);
          }}
        />
        <Button
          title={"3"}
          onClick={() => {
            handleNumber(3);
          }}
        />
        <Button
          color={"#FF9E0C"}
          title={"+"}
          onClick={() => handleSymbol("+")}
        />
      </div>
      <div
        style={{
          display: "flex",
          flex: 1,
        }}
      >
        <Button
          title={"0"}
          flexNumber={2}
          onClick={() => {
            handleNumber(0);
          }}
        />
        <Button title={","} onClick={handleComa} />
        <Button color={"#FF9E0C"} title={"="} onClick={handleCalculate} />
      </div>
    </div>
  );
};
