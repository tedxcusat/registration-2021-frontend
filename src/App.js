import './App.css';
import RegistrationForm from '../src/components/reg'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";


import PaymentPage from './components/pages/payments/payments'

export default function App() {
  return (
    <Router>
      <div>
      </div>
        <Switch>
          <Route exact path="/payment">
            <PaymentPage />
          </Route>
          <Route path="/">
            <Redirect to="/payment"/>
          </Route>
        </Switch>
    </Router>
  );
}
