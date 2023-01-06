import { Switch, Route, Redirect } from "react-router-dom";
//styles
import './App.css';
//components
import Landing from "./components/shared/Landing";
import CoinInformation from "./components/shared/CoinInformation";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/:id" component={CoinInformation} />
        <Route path="/" component={Landing} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default App;
