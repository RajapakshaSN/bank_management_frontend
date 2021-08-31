import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


import AddBank from "./components/addBank";
import AddPerson from "./components/addPerson";


function App() {
  return (
    <Router>       
      <Switch>
        <Route exact path="/">     
            
        </Route>
        <Route path="/addBank">
          <AddBank/>
        </Route> 
        <Route path="/addPerson">
          {/* <AddPerson/> */}
        </Route>      
      </Switch>      

    </Router>
  );
}

export default App;












