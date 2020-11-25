import { BrowserRouter, Route, Switch } from "react-router-dom";
import About from "./pages/About";

import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Switch>
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
