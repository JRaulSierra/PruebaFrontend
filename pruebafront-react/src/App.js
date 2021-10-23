import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import NivelMundial from "./Components/NivelMundial/NivelMundial";
import CentroAmerica from "./Components/CentroAmerica/CentroAmerica";
import "../src/Style/App.scss"

function App() {
  return (
    <div className="app">
      <Router>
      <div>
        <Navbar />
      </div>
      <Switch>
        <Route path="/mundial"><NivelMundial/></Route>
        <Route path="/c-a"><CentroAmerica/></Route>
        <Route path="/">
          <Home/>
        </Route>
      </Switch>
    </Router>
    </div>
  );
}

export default App;
