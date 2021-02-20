import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home';
import Header from './Layouts/Header';
import Footer from './Layouts/Footer';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


const  App = () => {
  return (
    <div className="App">
     <Router>
        <Header/>
        <Switch>
          <Route path="/" exact>
              <Home/>
          </Route>
          <Route path="/Home">
              <Home/>
          </Route>
          
        </Switch>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
