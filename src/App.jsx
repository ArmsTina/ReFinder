import "./App.css";
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import Popup from "./popup/Popup";

function App() {
  return (
    <>
      <Header></Header>
      <div className="main d-flex h-100">
        <Popup></Popup>
      </div>
    </>
  );
}

export default App;
