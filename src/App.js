import {useEffect} from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Checkout from './pages/Checkout';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './pages/Home';
import Login from './pages/Login';
import Nav from './components/Nav';
import {auth} from './components/Firebase'
import { useStateValue } from './components/StateProvider';

function App() {

  const [{loggedinuser}, dispatch] = useStateValue()

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userauth) => {
      if(userauth){
        dispatch({
          type: 'SET_LOGIN',
          user: userauth
        })
      } else {
        dispatch({
          type: 'SET_LOGIN',
          user: null
        })
      }
    })
    
    return () => {
      unsubscribe();
    }
  },[])
  return (
    <Router>
      <div className="App">
     <Switch>
       <Route path="/checkout">
       <Header />
       <Checkout />
       </Route>
       <Route path="/login">
         <Login />
       </Route>
       <Route path="/">
         <Header />
         <Nav />
         <Home />
         <Footer />
       </Route>
     </Switch>
    </div>
    </Router>
  );
}

export default App;
