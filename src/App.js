import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Components/Home/Home/Home';
import Images from './Components/Images/Image/Image'
import Post from './Components/Posts/Post/Post';
import Album from './Components/Albums/Album/Album';
import { createContext, useState } from 'react';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Login from './Components/Login/Login';


export const UserContext = createContext();

function App() {

  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
        <Router>
          <Switch>
            <PrivateRoute exact path="/">
              <Home />
            </PrivateRoute>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/image">
              <Images/>
            </Route>
            <Route path="/post">
              <Post/>
            </Route>
            <Route path="/album">
              <Album />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
          </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
