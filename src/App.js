import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SettingsLayout from "./components/settingsLayout";
import ContactLogin from "./components/contactLogin";
import ConnectedAccounts from "./components/connectedAccounts";
import Teams from "./components/teams";
import Earning from "./components/earnings";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Show SettingsLayout always with ContactLogin as default */}
        <Route path="/" element={<SettingsLayout />}>
          <Route path="contact-login" element={<ContactLogin />} />
          <Route path="connected-accounts" element={<ConnectedAccounts />} />
          <Route path="teams" element={<Teams />} />
          <Route path="earnings" element={<Earning />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
