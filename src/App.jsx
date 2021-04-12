/*  import firebseApp from './firebase/firebaseConfig'; */
import React from 'react'
 import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';

 import HomePage from './pages/HomePage';
 import RegisterPage from './pages/RegisterPage';
 import LoginPage from './pages/LoginPage';
 import PageNotFound from './pages/404';
 import AppBar from './components/appbar/AppBar';
 import Dashboard from './pages/dashboard/Dashboard';
 import {AuthProvider} from './auth/AuthContext';


function App() {

  return (
    <>
    <AuthProvider>
     <Router>
      <AppBar/>
       <Switch>

         <Route exact path="/"> 
            <HomePage/>
         </Route>

         <Route  path="/login"> 
            <LoginPage/>
         </Route>

         <Route  path="/register"> 
            <RegisterPage/>
         </Route>
         
         <Route  path="/dashboard"> 
            <Dashboard/>
         </Route>

         <Route  path="*"> 
            <PageNotFound/>
         </Route>

       </Switch>
       {/* footer component */}
     </Router>
     </AuthProvider>
    </>
  );
}

export default App;
