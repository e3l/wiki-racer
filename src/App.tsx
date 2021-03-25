import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

// Components
import NavBar from './components/NavBar';
import Home from './components/Home';
import SinglePlayer from './components/SinglePlayer';


const App = () => {
    return (
        <Router>
            <NavBar />
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/singleplayer" render={SinglePlayer}/>
            </Switch>
        </Router>
    );
}

export default App;
