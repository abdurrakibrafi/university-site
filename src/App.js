import Events from "./components/Events";
import Footer from "./components/Footer";
import Fourth from "./components/Fourthsection";
import CarusleContainer from "./components/Landing";
import Lastone from "./components/Lastone";
import Navbars from "./components/Navbar";
import Partners from "./components/Partenrs";
import Secend from "./components/Secendsection";
import Third from "./components/Thirdsection";
import Timecount from "./components/Timecount";
import "./styles/App.css";

function App() {
  console.log("run");
  return (
    <div className="App">
      <Timecount />
      <Navbars />
      <CarusleContainer />
      <Secend />
      <Third />
      <Fourth />
      <Events />
      <Partners />
      <Lastone />
      <Footer />
    </div>
  );
}

export default App;
