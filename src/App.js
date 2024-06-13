import "./App.css";
import MyResponsiveAreaBump from "./Areabump";
import { data } from "./data";

function App() {
  return (
    <div className="App" style={{ height: "80vh" }}>
      <MyResponsiveAreaBump data={data} />
    </div>
  );
}

export default App;
