import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";

//pages
import Tes from "./pages/Tes";
import Home from "./pages/Home/Home";

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Tes} />
      <Route path="/tes" component={Tes} />
      <Route path="/home" component={Home} />
    </BrowserRouter>
  );
}

export default App;
