import React from 'react';
import { useLocation, NavLink } from "react-router-dom";
import DashboardPage from '../components/DashboardPage';
import Requisition from "./Requisition";
import Settings from "./Settings";
import "../styles/base.css";
import "../styles/dashboard.css";


const Dashboard = () => {
  const { pathname } = useLocation();
  const location = pathname.substring(pathname.lastIndexOf('/') + 1);

  let mainComponent = "";

  switch (location) {
    case "requisition":
      mainComponent = <Requisition />
      break;
    case "settings":
      mainComponent = <Settings />;
      break;
    default:
      mainComponent = <DashboardPage />;
  };

  return (
    <div className="container h-100 my-5">
      <div className="row">
        <div className="col-lg-3 d-none d-lg-block">
          <section className="container pt-3 inner-shadow db-left-col">
            <a href="/" className="align-self-center brand-name ml-3">gwapp</a>
            <div className="d-flex flex-column text-center pt-4">
              <img className="rounded-circle mx-auto" alt="avatar" src="https://placehold.it/100x100" />
              <h2 className="w-50 mx-auto mt-2">Adekunle Adelowo</h2>
            </div>
            <div className="d-flex flex-column justify-content-between nav align-items-center mt-5">
              <NavLink exact to="/dashboard" className="outer-shadow" activeClassName="nav-active">
                <i className="fas fa-home mr-2"></i>
                Home
              </NavLink>
              <NavLink exact to="/dashboard/requisition" className="outer-shadow" activeClassName="nav-active">
              <i className="fas fa-list mr-2"></i>
                Requisitions
              </NavLink>
              <NavLink exact to="/dashboard/settings" className="outer-shadow" activeClassName="nav-active">
                <i className="fas fa-cog mr-2"></i>
                Settings
              </NavLink>
            </div>
          </section>
        </div>
        <div className="col-lg-9 pt-lg-1 right-col">
          {mainComponent}
        </div>
      </div>
    </div>
  )
}

export default Dashboard;