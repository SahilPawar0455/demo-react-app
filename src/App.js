import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import Page from './components/Page';
import NewPage  from './components/NewPage';

function App(){
  return(
    <>
       <Router>
         <Switch>
          <Route path ='/Page'><Page/></Route>
          <Route path ='/newPage'><NewPage/></Route>
         </Switch>
       </Router>
    </>
  );
}

export default App;
