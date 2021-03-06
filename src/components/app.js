import React from 'react';
import '../style.scss';
import {
  BrowserRouter as Router, Route, NavLink, Switch,
} from 'react-router-dom';
import Counter from './counter';
import Controls from './controls';

const About = (props) => {
  return (
    <div>
      <div> All there is to know about me </div>
      <Counter />
      <Controls />
    </div>
  );
};
const Welcome = (props) => {
  return <div>Welcome</div>;
};
const Test = (props) => {
  return <div> ID: {props.match.params.id} </div>;
};
const FallBack = (props) => {
  return <div>URL Not Found</div>;
};

const App = (props) => {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path="/" component={Welcome} />
        <Route path="/about" component={About} />
        <Route exact path="/test/:id" component={Test} />
        <Route component={FallBack} />
      </Switch>
    </Router>
  );
};

const Nav = (props) => {
  return (
    <nav>
      <ul>
        <li><NavLink to="/" exact>Home</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/test/id1">test id1</NavLink></li>
        <li><NavLink to="/test/id2">test id2</NavLink></li>
      </ul>
    </nav>
  );
};

export default App;
