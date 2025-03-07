import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { Drawer, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const SettingsLayout = () => {
  const [activeLink, setActiveLink] = useState("Contact & Login");
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const menuItems = [
    { name: "Contact & Login", path: "/contact-login" },
    { name: "Connected accounts", path: "/connected-accounts" },
    { name: "Teams", path: "/teams" },
    { name: "Earnings", path: "/earnings" },
  ];

  // Sidebar Component with Conditional Padding
  const SidebarContent = ({ smallPadding }) => (
    <div className={`w-64 h-full ${smallPadding ? "p-4" : "p-8"}`}>
      <h1 className="text-orange-500 text-2xl ml-2 mb-6 font-bold">Settings</h1>
      <nav>
        <ul>
          {menuItems.map((item) => (
            <Link to={item.path} key={item.name} className="mb-[0.3rem] relative block">
              <button
                className={`flex items-center w-full py-3 px-4 pl-8 rounded-md ${
                  activeLink === item.name
                    ? "bg-orange-50 text-black pl-6"
                    : "text-gray-500 hover:text-black"
                }`}
                onClick={() => {
                  setActiveLink(item.name);
                  setIsDrawerOpen(false);
                }}
              >
                <i className="fas fa-users"></i>
                {item.name}
              </button>
              {activeLink === item.name && (
                <div className="absolute left-4 top-1/2 h-3/4 w-1 bg-orange-500 transform -translate-y-1/2 rounded-md"></div>
              )}
            </Link>
          ))}
        </ul>
      </nav>
    </div>
  );

  return (
    <div className="flex bg-blue-50 font-sans min-h-screen">
      <div className="lg:hidden fixed top-4 right-2 z-50">
        <IconButton
          onClick={() => setIsDrawerOpen(true)}
          className="bg-white hover:bg-gray-50"
        >
          <MenuIcon className="text-orange-500" />
        </IconButton>
      </div>

      <Drawer
        anchor="left"
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      >
        <SidebarContent smallPadding={true} />
      </Drawer>

      <div className="hidden lg:block w-64">
        <SidebarContent smallPadding={false} />
      </div>

      <div className="flex-1 p-4">
        <Outlet />
      </div>
    </div>
  );
};

export default SettingsLayout;
