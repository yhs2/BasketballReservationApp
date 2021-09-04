import React, {useState, useEffect} from "react";
import { Container} from '@material-ui/core'

import Navbar from './component/Navbar/Navbar';
import Home from './component/Home/Home'
import Auth from './component/Auth/Auth'
import PostDetails from "./component/PostDetails/PostDetails";
import Location from "./component/Location/Location"
// Enable navigations through interfaces
import { BrowserRouter, Switch, Route, Redirect, useHistory } from "react-router-dom";



// The middle to dispatch actions


const App = () => {
    const [user,setUser] = useState(JSON.parse(localStorage.getItem("profile")));
    useEffect(() => {
        setUser(JSON.parse(localStorage.getItem("profile")))
    }, user)
    console.log(user);
    return (
        
        <BrowserRouter>
            <Container maxWidth="xl">
                <Navbar/>
                
                {/* Switch Between these Routers(like a switch statement) */}
                {/* A <Switch> looks through its children <Route>s and
                renders the first one that matches the current URL. */}
                <Switch>
                    <Route path="/" exact component={() => <Redirect to="/posts" />} />
                    <Route path="/locations" exact component={Location} />
                    <Route path="/posts" exact component={Home}/>
                    <Route path="/posts/search" exact component={Home}/>
                    <Route path="/posts/:id" exact component={PostDetails}/>
                    <Route path="/auth" exact component={() => ( user !== null ? <Redirect to="/posts" /> : <Auth />)} />
                </Switch>
            </Container>
        </BrowserRouter>
        
    )
}

export default App;