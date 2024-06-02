import { Calculator } from "./components/calculator/Calculator";

function App() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#818283",
      }}
    >
      <Calculator />
    </div>
  );
}

export default App;
