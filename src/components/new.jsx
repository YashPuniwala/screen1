import React, { useState } from "react";
import { MuiTelInput } from "mui-tel-input";
import {
  TextField,
  Select,
  MenuItem,
  FormControl,
  Box,
  IconButton,
} from "@mui/material";
import { ArrowDropDown } from "@mui/icons-material";
import { Sms, WhatsApp, Telegram } from "@mui/icons-material";
import { getExampleNumber } from "libphonenumber-js/min";
import examples from "libphonenumber-js/mobile/examples";

const SettingsContactLogin = () => {
  const [countryPhone, setCountryPhone] = useState("");
  const [phone, setPhone] = useState("");
  const [messageType, setMessageType] = useState("SMS");
  const [countryCode, setCountryCode] = useState("US");
  const [phonePlaceholder, setPhonePlaceholder] = useState("(123) 123-1234");
  const [activeLink, setActiveLink] = useState("Contact & Login");

  const handleCountryPhoneChange = (value, info) => {
    setCountryPhone(value);

    // Check if info contains a country and update placeholder
    if (info && info.country) {
      updatePhonePlaceholder(info.country);
    }
  };

  // Function to update phone placeholder based on country
  const updatePhonePlaceholder = (country) => {
    try {
      const example = getExampleNumber(country, examples);
      if (example) {
        // Extract national format without country code
        const nationalFormat = example.formatNational();
        setPhonePlaceholder(nationalFormat);
      }
    } catch (error) {
      // Fallback for countries without example number
      setPhonePlaceholder("(123) 123-1234");
    }
  };

  const getMessageIcon = (type) => {
    switch (type) {
      case "SMS":
        return (
          <img src="/sms.png" alt="SMS" className="w-5 h-5 mr-2" />
        );
      case "Telegram":
        return (
          <img src="/telegram.png" alt="Telegram" className="w-5 h-5 mr-2" />
        );
      case "WhatsApp":
        return (
          <img src="/whatsapp.png" alt="WhatsApp" className="w-5 h-5 mr-2" />
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex bg-blue-50 font-sans min-h-screen">
      {/* Sidebar */}
      <div className="w-64 h-screen p-8">
        <div className="flex items-center mb-8">
          <h1 className="text-orange-500 text-2xl ml-2">Settings</h1>
        </div>
        <nav>
          <ul>
          <li className="mb-4 relative">
              <a
                className={`flex items-center py-2 px-4 rounded-md ${
                  activeLink === "Contact & Login"
                    ? "bg-orange-50 text-black pl-6"
                    : "text-gray-500 hover:text-black"
                }`}
                href="#"
                onClick={() => setActiveLink("Contact & Login")}
              >
                <i className="fas fa-users"></i>
                Contact & Login
              </a>
              {activeLink === "Contact & Login" && (
                <div className="absolute left-2 top-1/2 h-3/4 w-1 bg-orange-500 transform -translate-y-1/2 rounded-md"></div>
              )}
            </li>
            <li className="mb-4 relative">
              <a
                className={`flex items-center py-2 px-4 rounded-md ${
                  activeLink === "Connected accounts"
                    ? "bg-orange-50 text-black"
                    : "text-gray-500 hover:text-black"
                }`}
                href="#"
                onClick={() => setActiveLink("Connected accounts")}
              >
                <i className="fas fa-users"></i>
                Connected accounts
              </a>
              {activeLink === "Connected accounts" && (
                <div className="absolute left-2 top-1/2 h-3/4 w-1 bg-orange-500 transform -translate-y-1/2 rounded-md"></div>
              )}
            </li>
            <li className="mb-4 relative">
              <a
                className={`flex items-center py-2 px-4 rounded-md ${
                  activeLink === "Teams"
                    ? "bg-orange-50 text-black pl-6"
                    : "text-gray-500 hover:text-black"
                }`}
                href="#"
                onClick={() => setActiveLink("Teams")}
              >
                <i className="fas fa-users"></i>
                Teams
              </a>
              {activeLink === "Teams" && (
                <div className="absolute left-2 top-1/2 h-3/4 w-1 bg-orange-500 transform -translate-y-1/2 rounded-md"></div>
              )}
            </li>
            <li className="mb-4 relative">
              <a
                className={`flex items-center py-2 px-4 rounded-md ${
                  activeLink === "Earnings"
                    ? "bg-orange-50 text-black pl-6 pl-6"
                    : "text-gray-500 hover:text-black"
                }`}
                href="#"
                onClick={() => setActiveLink("Earnings")}
              >
                <i className="fas fa-users"></i>
                Earnings
              </a>
              {activeLink === "Earnings" && (
                <div className="absolute left-2 top-1/2 h-3/4 w-1 bg-orange-500 transform -translate-y-1/2 rounded-md"></div>
              )}
            </li>
          </ul>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">
        <h2 className="text-2xl font-bold mb-6">Contact & Login</h2>
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact info</h3>
          <div className="mb-6 bg-white p-6 rounded-lg shadow-sm">
            <label className="block text-gray-700 mb-2">Receive posts at</label>
            <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
              {/* Country Code with Dropdown Arrow */}
              <Box sx={{ position: "relative", width: "130px" }}>
                <MuiTelInput
                  value={countryPhone}
                  onChange={handleCountryPhoneChange}
                  defaultCountry="US"
                  disableDropdown={false}
                  sx={{
                    ".MuiOutlinedInput-notchedOutline": {
                      borderColor: "#d1d5db",
                    },
                    height: "40px",
                    "& .MuiOutlinedInput-input": {
                      padding: "9px",
                      fontSize: "14px",
                    },
                  }}
                />
                {/* Dropdown Arrow Icon */}
                <IconButton
                  sx={{
                    position: "absolute",
                    right: 2,
                    top: "50%",
                    transform: "translateY(-50%)",
                    padding: 0,
                  }}
                >
                  <ArrowDropDown />
                </IconButton>
              </Box>

              {/* Phone Number Input */}
              <TextField
                placeholder={phonePlaceholder}
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                size="small"
                sx={{
                  width: "160px",
                  ".MuiOutlinedInput-notchedOutline": {
                    borderColor: "#d1d5db",
                  },
                }}
              />

              {/* Message Type Dropdown */}
              <FormControl>
                <Select
                  value={messageType}
                  onChange={(e) => setMessageType(e.target.value)}
                  size="small"
                  sx={{
                    ".MuiOutlinedInput-notchedOutline": {
                      borderColor: "#d1d5db",
                    },
                    height: "40px",
                  }}
                  renderValue={(selected) => (
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                      {getMessageIcon(selected)}
                      <span>{selected}</span>
                    </Box>
                  )}
                >
                  <MenuItem value="SMS">
                  <img src="/sms.png" alt="SMS" className="w-5 h-5 mr-2" /> SMS
                  </MenuItem>
                  <MenuItem value="Telegram">
                    <img src="/telegram.png" alt="SMS" className="w-5 h-5 mr-2" /> Telegram
                  </MenuItem>
                  <MenuItem value="WhatsApp">
                    <img src="/whatsapp.png" alt="SMS" className="w-5 h-5 mr-2" /> Whatsapp
                  </MenuItem>
                </Select>
              </FormControl>
            </Box>
          </div>
          <h3 className="text-lg font-semibold mb-4 mt-10">Login</h3>
          <div className="mb-6 bg-white p-4 rounded-lg shadow-sm">
            <label className="block text-gray-700 mb-2">Email</label>
            <TextField
              type="email"
              value="michaelhouck@gmail.com"
              size="small"
              sx={{
                width: "256px",
                ".MuiOutlinedInput-notchedOutline": { borderColor: "#d1d5db" },
              }}
            />
          </div>
          <div className="mb-6 bg-white p-4 rounded-lg shadow-sm">
            <a className="block text-gray-700 hover:text-black" href="#">
              Change password
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsContactLogin;
