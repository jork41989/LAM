
import './App.css';
import Home from './components/home/home';
import NavBar from './components/nav/nav';
import { Route, Switch } from "react-router-dom";
import HistoryPage from './components/history/history';
import Team from './components/team/team';
import FooterCopy from './components/footer/footer'


function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/history" component={HistoryPage} />
        <Route exact path="/team" component={Team} />
      </Switch>
      <FooterCopy/>
    </div>
  );
}

export default App;
