import "./App.css";
import CountDown from "./components/CountDown/CountDown";

function App() {
  return (
    <div className="App">
      <CountDown />
      <img src="/images/bg-stars.svg" className="stars" alt="" />
      <img src="/images/pattern-hills.svg" className="hills" alt="" />
    </div>
  );
}

export default App;
