import "./index.css";
import People from "./data";
import Carosol from "./carosol";

export default function App() {
  return (
    <div className="App">
      <h1>Carousal</h1>
      <Carosol data={People} />
    </div>
  );
}
