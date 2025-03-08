import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SettingsLayout from "./components/settingsLayout";
import ContactLogin from "./components/contactLogin";
import ConnectedAccounts from "./components/connectedAccounts";
import Teams from "./components/teams";
import Earning from "./components/earnings";
import MenuItemsPage from "./components/menuItems";
import Availability from "./components/availability";
import Audience from "./components/audience";
import Billing from "./components/billing";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Show SettingsLayout always with ContactLogin as default */}
        <Route path="/" element={<MenuItemsPage />}>
          <Route path="contact-login" element={<ContactLogin />} />
          <Route path="connected-accounts" element={<ConnectedAccounts />} />
          <Route path="teams" element={<Teams />} />
          <Route path="earnings" element={<Earning />} />
          <Route path="availability" element={<Availability />} />
          <Route path="audience" element={<Audience />} />
          <Route path="billing" element={<Billing />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
