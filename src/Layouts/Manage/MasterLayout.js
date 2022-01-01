import React from "react";
import { BrowserRouter as Router,Switch,Route,Redirect} from "react-router-dom";
import Sidebar from "../../Components/Manage/Sidebar";
import Topbar from "../../Components/Manage/Topbar";


import routes from "../../Router/routes";
const MasterLayout = () =>{
    return (
        <div id="wrapper">
            <Sidebar/>
            <div id="content-wrapper" className="d-flex flex-column">
                <div id="content">
                    <Topbar/>
                    
                        <Switch>
                            {routes.map((route,i) =>{
                                return (
                                    route.component && (
                                        <Route
                                            key={i}
                                            path={route.path}
                                            name={route.name}
                                            exact={route.exact}
                                            render = {(props) => (
                                                <route.component {...props} />
                                            )}
                                        />
                                    )
                                )
                            })}
                            <Redirect from="/admin" to="/admin/dashboard"/>
                        </Switch>
                            
                    
                </div>
            </div>
        </div>
    )
}


export default MasterLayout;