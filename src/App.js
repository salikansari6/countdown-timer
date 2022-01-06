import "./App.css";
import CountDown from "./components/CountDown/CountDown";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <img src="/images/bg-stars.svg" className="stars" alt="" />
      <img src="/images/pattern-hills.svg" className="hills" alt="" />
      <CountDown />
      <Footer />
    </div>
  );
}

export default App;
