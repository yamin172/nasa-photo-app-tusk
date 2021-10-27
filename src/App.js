import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Navbar from './Components/Home/Navbar/Navbar';
import Home from './Components/Home/Home/Home';
import Images from './Components/Home/Images/Image/Image';

function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/image">
          <Images/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
