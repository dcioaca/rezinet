import React from 'react';
import { Routes, Route} from 'react-router';
import './index.css';
import Layout from "./pages/layout";
import Home from "./pages/dashboard";
import Payments from "./pages/payments";
import Events from "./pages/events";
import Maintenance from "./pages/maintenance";
import Documents from "./pages/documents";
import Insurance from "./pages/insurance";
import Help from "./pages/help";
import Login from "./pages/login";

const MyRoute = () => {
    return(
        <Routes>
          <Route path="/" element={<Layout />}/>
          <Route path="dashboard" element={<Home />} />
          <Route exact path="payments" element={<Payments />} />
          <Route exact path="events" element={<Events />} />
          <Route exact path="maintenance" element={<Maintenance />} />
          <Route exact path="documents" element={<Documents />} />
          <Route exact path="insurance" element={<Insurance />} />
          <Route exact path="help" element={<Help />} />
          <Route exact path="login" element={<Login />} />
        </Routes>
    )

}

export default MyRoute;
