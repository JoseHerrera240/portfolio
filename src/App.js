import { FirstSection } from "./Components/body/FirstSection/index";
import { NavBar } from "./Components/NavBar";
import './App.scss'
import { SecondSection } from "./Components/body/SecondSection";
import { ThirdSection } from "./Components/body/ThirdSection";
import { Modal } from "./Components/body/Modal";

function App() {
  return (
    <div className="App">
      <NavBar />
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      {/* <Modal /> */}
    </div>
  );
}

export default App;
