import "./App.css";
import MyResponsiveAreaBump from "./carbon-intensity";
import { data } from "./data";

function App() {
  return (
    <div className="App" style={{ height: "80vh" }}>
      <MyResponsiveAreaBump data={data} />
    </div>
  );
}

export default App;
