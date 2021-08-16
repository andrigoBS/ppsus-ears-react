import React from "react";
import {Switch,Route} from "react-router-dom"
import LoginAdmin from "./pages/login/LoginAdmin";

function Admin() {
    return (
        <div>
            <p>Admin</p>
            <Switch>
                <Route path={'/admin/login'}>
                    <LoginAdmin/>
                </Route>
            </Switch>
        </div>
    );
}

export default Admin;
