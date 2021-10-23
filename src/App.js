import Navigation from './components/Navigation';
import Home from './pages/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';
import Products from './pages/Products';

function App() {
  return (
    <Router>
      <Navigation/>
      <div className="app_container">
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/productos" exact component={Products}/>
        </Switch>
        
      </div>
      <Footer/>
    </Router>
  );
}

export default App;
