import React from 'react'

//Importando react-router-dom
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
import CustomerEdit from '../components/CustomerEdit/CustomerEdit';
import CostumerListContainer from '../pages/CostumerListContainer';
import CostumerNewContainer from '../pages/CostumerNewContainer';
import CustomerContainer from '../pages/CustomerContainer';
import Home from '../pages/Home';
const AppRouter = () => {
    
    return (
        <Router>
            <Switch> 
                <Route  exact path="/"  component={Home}/>  
                <Route exact path="/customers">
                    <CostumerListContainer/>
                </Route>
                <Route exact path="/customers/new">
                    <CostumerNewContainer/>
                </Route>
                <Route exact path="/customers/:dni">
                    <CustomerContainer/>        
                </Route>
                <Route exact path="/customers/:dni/edit">
                    <CustomerEdit/>        
                </Route>
            </Switch>
        </Router>
    )
}

export default AppRouter
