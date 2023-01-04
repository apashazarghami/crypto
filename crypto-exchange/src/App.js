import { Switch, Route, Redirect } from "react-router-dom";
//styles
import './App.css';
//components
import Landing from "./components/shared/Landing";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" component={Landing} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default App;
