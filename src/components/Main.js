import React, {Component} from 'react';
import Registration from './Registration';
// import NavBar from './NavBar';
import { Switch, Route, Redirect } from 'react-router-dom';

class Main extends Component{
    render(){
        return(
            <div>
                <Switch>
                    
                    <Route path='/Registration'  component={Registration}/>
                    <Redirect to="/Registration" />
                </Switch>
            </div>
        );
    }
}

export default Main;