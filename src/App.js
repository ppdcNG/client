import { Switch, Route } from 'react-router-dom';
import Dashboard from './routes/Dashboard';
import Landing from "./routes/Landing";

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Landing} />
      <Route path="/dashboard" component={Dashboard} />
    </Switch>
  );
}

export default App;
