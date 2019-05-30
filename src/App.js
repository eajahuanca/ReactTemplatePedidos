import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Content from './components/modulos/dhasboard/Content';
import Login from './components/login/Login';
import Pedido from './components/modulos/atencion/Pedido';
import Uno from './components/modulos/atencion/uno';

class App extends Component {

  render() {
    return (
       <Router>
         <Switch>
           <Route exact path="/" component={Content}/>
           <Route exact path="/login" component={Login}/>
           <Route exact path="/pedido" component={Pedido}/>
           <Route exact path="/uno" component={Uno}/>
         </Switch>
       </Router>
    );
  }
}

export default App;
