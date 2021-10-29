import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import FindADonor from './components/FindADonor';
import Footer from './components/Footer';
import Header from './components/Header';
import Login from './components/Login';
import Register from './components/Register';
import Update from './components/Update';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import 'react-toastify/dist/ReactToastify.css';
import './css/App.css';

function App() {
  return (
    <div>
      <ToastContainer 
      autoClose={1500}
      closeOnClick
      draggable
      pauseOnHover={false}
      hideProgressBar={true}
      />
      <Header />
      <Router>
        <Switch>
          <Route exact path='/login' component={Login}/>
          <Route exact path='/register' component={Register} />
          <Route exact path='/update' component={Update} />
          <Route exact path='/donor/find' component={FindADonor} />
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
