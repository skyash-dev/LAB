import { invoke } from "@tauri-apps/api/tauri";
import "./App.css";

function App() {
  document.addEventListener(
    "contextmenu",
    (e) => {
      e.preventDefault();
      return false;
    },
    { capture: true }
  );
  return (
    <div className="container">
      <img src="./assets/kakashi.gif" alt="" />
    </div>
  );
}

export default App;
