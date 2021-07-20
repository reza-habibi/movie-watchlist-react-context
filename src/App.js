import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import WatchList from "./Components/WatchList/WatchList";
import Watched from "./Components/Watched/Watched";
import Add from "./Components/Add/Add";
import { GlobalProvider } from "./Context/GlobalState";
import "./App.css";

function App() {

  return (
    <GlobalProvider>
      <Router>
        <Header />

        <Switch>
          <Route exact path="/">
            <WatchList />
          </Route>

          <Route path="/watched">
            <Watched />
          </Route>

          <Route path="/add">
            <Add />
          </Route>
        </Switch>
      </Router>
    </GlobalProvider>
  );
}

export default App;
