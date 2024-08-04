import "./App.css";
import Header from "./Components/Featurs/Header/Header";
import { LandingPage } from "./Components/Featurs/LandingPage/LandingPage";
import "typeface-poppins";
import ProductView from "./Components/Featurs/ProductView/ProductView";

function App() {
  return (
    <div id="App">
      <Header />
      <ProductView/>
      {/* <LandingPage /> */}
    </div>
  );
}

export default App;
