import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Box from "./component/Box";
import Nav from "./component/Nav";
import Container from "./pages/Container";

function App() {

  return (
      <Router>
        <div className="App">
            <Nav/>
          <Switch>
            <Route exact path={"/"} component={Container}/>
            <Route path={"/box/:color"} component={Box}/>
          </Switch>
        </div>
      </Router>
  );
}

export default App;

//import React from "react";
// import ReactDOM from "react-dom";
// import { BrowserRouter as Router, Route } from "react-router-dom";
//
// // All route props (match, location and history) are available to User
// function User(props) {
//   return <h1>Hello {props.match.params.username}!</h1>;
// }
//
// ReactDOM.render(
//   <Router>
//     <Route path="/user/:username" component={User} />
//   </Router>,
//   node
// );