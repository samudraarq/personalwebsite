import { BrowserRouter, Route, Switch } from "react-router-dom";

import About from "./pages/About";
import Home from "./pages/Home";
import Talikasih from "./pages/Project/Talikasih";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/talikasih">
          <Talikasih />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
