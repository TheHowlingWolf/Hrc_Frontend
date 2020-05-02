import React, {Component} from 'react';
import Registration from './Registration';
import Navbar from './Navbar';
import { Switch, Route, Redirect } from 'react-router-dom';

class Main extends Component{
    render(){
        return(
            <div>
                <Navbar/>
                <Switch>
                    
                    <Route path='/Registration'  component={Registration}/>
                    <Redirect to="/Registration" />
                </Switch>
            </div>
        );
    }
}

export default Main;