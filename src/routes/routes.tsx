import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import ForgotPassword from '../pages/ForgotPassword';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';


const Routes = (): JSX.Element => {
    return (
        <BrowserRouter>
            <Route path="/" exact component={SignIn} />
            <Route path="/signup" component={SignUp} />
            <Route path="/forgot-password" component={ForgotPassword} />
            <Route path="/dashboard" component={Dashboard} />

        </BrowserRouter>
    )
}

export default Routes;