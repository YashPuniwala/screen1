import React, { useState, useRef } from "react";
import { MuiTelInput } from "mui-tel-input";
import {
  TextField,
  Select,
  MenuItem,
  FormControl,
  Box,
  IconButton,
  useMediaQuery,
  Drawer,
} from "@mui/material";
import { ArrowDropDown, ArrowForward } from "@mui/icons-material";
import MenuIcon from "@mui/icons-material/Menu";
import { getExampleNumber } from "libphonenumber-js/min";
import examples from "libphonenumber-js/mobile/examples";

const menuItems = [
  "Contact & Login",
  "Connected accounts",
  "Teams",
  "Earnings",
  "Availability",
  "Audience",
  "Billing",
];

const App = () => {
  // Settings Layout State
  const [activeItem, setActiveItem] = useState("Contact & Login");
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  // Contact & Login State
  const [countryPhone, setCountryPhone] = useState("");
  const [phone, setPhone] = useState("");
  const [messageType, setMessageType] = useState("SMS");
  const [phonePlaceholder, setPhonePlaceholder] = useState("(123) 123-1234");
  const [openDropdown, setOpenDropdown] = useState(false);

  const phoneInputRef = useRef(null);
  const isSmallScreen = useMediaQuery("(max-width:1024px)");

  // Contact & Login functions
  const handleCountryPhoneChange = (value, info) => {
    setCountryPhone(value);
    if (info && info.country) {
      updatePhonePlaceholder(info.country);
    }
    setOpenDropdown(false);

    setTimeout(() => {
      setIsDrawerOpen(false);
    }, 100);
  };

  const updatePhonePlaceholder = (country) => {
    try {
      const example = getExampleNumber(country, examples);
      if (example) {
        setPhonePlaceholder(example.formatNational());
      }
    } catch (error) {
      setPhonePlaceholder("(123) 123-1234");
    }
  };

  const handleDropdownClick = () => {
    const dropdownButton = phoneInputRef.current?.querySelector(
      ".MuiTelInput-IconButton"
    );
    if (dropdownButton) {
      dropdownButton.click();
    }
  };

  const getMessageIcon = (type) => {
    switch (type) {
      case "SMS":
        return (
          <svg
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              width="28"
              height="28"
              rx="5"
              fill="url(#paint0_linear_1_78718)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_1_78718"
                x1="14"
                y1="0"
                x2="14"
                y2="28"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#83F281" />
                <stop offset="1" stopColor="#59C14C" />
              </linearGradient>
            </defs>
          </svg>
        );

      case "Telegram":
        return (
          <svg
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M23.625 0H4.375C1.95875 0 0 1.95875 0 4.375V23.625C0 26.0412 1.95875 28 4.375 28H23.625C26.0412 28 28 26.0412 28 23.625V4.375C28 1.95875 26.0412 0 23.625 0Z"
              fill="#0088CC"
            />
          </svg>
        );

      case "WhatsApp":
        return (
          <svg
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M23.625 0H4.375C1.95875 0 0 1.95875 0 4.375V23.625C0 26.0412 1.95875 28 4.375 28H23.625C26.0412 28 28 26.0412 28 23.625V4.375C28 1.95875 26.0412 0 23.625 0Z"
              fill="#25D366"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M18.9 9.0125C17.5875 7.7 15.8375 7 14 7C10.15 7 7 10.15 7 14C7 15.225 7.35001 16.45 7.96251 17.5L7 21L10.675 20.0375C11.725 20.5625 12.8625 20.9125 14 20.9125C17.85 20.9125 21 17.7625 21 13.9125C21 12.075 20.2125 10.325 18.9 9.0125ZM14 19.775C12.95 19.775 11.9 19.5125 11.025 18.9875L10.85 18.9L8.66249 19.5125L9.27501 17.4125L9.09999 17.15C8.48749 16.1875 8.22499 15.1375 8.22499 14.0875C8.22499 10.9375 10.85 8.3125 14 8.3125C15.575 8.3125 16.975 8.925 18.1125 9.975C19.25 11.1125 19.775 12.5125 19.775 14.0875C19.775 17.15 17.2375 19.775 14 19.775ZM17.15 15.4C16.975 15.3125 16.1 14.875 15.925 14.875C15.75 14.7875 15.6625 14.7875 15.575 14.9625C15.4875 15.1375 15.1375 15.4875 15.05 15.6625C14.9625 15.75 14.875 15.75 14.7 15.75C14.525 15.6625 14 15.4875 13.3 14.875C12.775 14.4375 12.425 13.825 12.3375 13.65C12.25 13.475 12.3375 13.3875 12.425 13.3C12.5125 13.2125 12.6 13.125 12.6875 13.0375C12.775 12.95 12.775 12.8625 12.8625 12.775C12.95 12.6875 12.8625 12.6 12.8625 12.5125C12.8625 12.425 12.5125 11.55 12.3375 11.2C12.25 10.9375 12.075 10.9375 11.9875 10.9375C11.9 10.9375 11.8125 10.9375 11.6375 10.9375C11.55 10.9375 11.375 10.9375 11.2 11.1125C11.025 11.2875 10.5875 11.725 10.5875 12.6C10.5875 13.475 11.2 14.2625 11.2875 14.4375C11.375 14.525 12.5125 16.3625 14.2625 17.0625C15.75 17.675 16.0125 17.5 16.3625 17.5C16.7125 17.5 17.4125 17.0625 17.5 16.7125C17.675 16.275 17.675 15.925 17.5875 15.925C17.5 15.4875 17.325 15.4875 17.15 15.4Z"
              fill="white"
            />
          </svg>
        );

      default:
        return null;
    }
  };

  // Sidebar content component
  const SidebarContent = () => (
    <div className="h-full p-6">
      <h2 className="mb-8 text-2xl font-semibold text-orange-500">Settings</h2>
      <ul className="space-y-2 pl-0">
        {menuItems.map((item) => (
          <li
            className={
              "relative flex cursor-pointer items-center border-l-4 border-transparent px-4 py-2 text-xl text-gray-700 transition hover:bg-orange-50" +
              (activeItem === item
                ? " ml-3 border-orange-500 bg-orange-50 text-2xl font-bold text-gray-600"
                : "")
            }
            key={item}
            onClick={() => {
              setActiveItem(item);
              if (isSmallScreen) {
                setIsDrawerOpen(false);
              }
            }}
          >
            {activeItem === item && (
              <span className="absolute left-0 top-0 h-full w-1 rounded-r-lg bg-orange-500"></span>
            )}
            {item}
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Mobile header with menu icon */}
      <div className="lg:hidden flex items-center p-4 border-b border-gray-200 bg-white w-full">
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={() => setIsDrawerOpen(true)}
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <h2 className="text-xl font-semibold text-orange-500">{activeItem}</h2>
      </div>

      <div className="flex flex-1">
        {/* Desktop Sidebar */}
        <aside className="hidden lg:block w-96 border-r border-gray-200 bg-gray-50">
          <SidebarContent />
        </aside>

        {/* Mobile Drawer */}
        <Drawer
          anchor="left"
          open={isDrawerOpen}
          onClose={() => setIsDrawerOpen(false)}
          sx={{
            display: { lg: "none" },
            "& .MuiDrawer-paper": { width: 280 },
          }}
        >
          <SidebarContent />
        </Drawer>

        {/* Main Content */}
        <main className="flex-1 p-4 sm:p-6 md:p-8">
          <h1 className="hidden lg:block mb-8 text-2xl font-semibold">
            {activeItem}
          </h1>
          <div className="space-y-6 w-full">
            <section>
              <h3 className="text-lg font-semibold mb-4">Contact info</h3>
              <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm w-full">
                <label className="block text-gray-700 mb-4">
                  Receive posts at
                </label>
                <div className="flex flex-col sm:flex-row gap-4 w-full">
                  {/* Phone inputs always side by side in their own container */}
                  <div className="flex flex-row gap-4">
                    <div ref={phoneInputRef} className="w-auto">
                      <MuiTelInput
                        value={countryPhone}
                        onChange={handleCountryPhoneChange}
                        defaultCountry="US"
                        disableDropdown={false}
                        sx={{
                          ".MuiOutlinedInput-notchedOutline": {
                            borderColor: "#d1d5db",
                          },
                          "& .MuiOutlinedInput-input": {
                            padding: "10px",
                            fontSize: "14px",
                          },
                          width: "100px",
                        }}
                      />
                    </div>
                    <TextField
                      placeholder={phonePlaceholder}
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      size="small"
                      sx={{
                        ".MuiOutlinedInput-notchedOutline": {
                          borderColor: "#d1d5db",
                        },
                        width: "100%",
                        maxWidth: "140px",
                      }}
                    />
                  </div>

                  {/* Message type dropdown - full width on small screens */}
                  <FormControl className="w-full sm:w-auto">
                    <Select
                      value={messageType}
                      onChange={(e) => setMessageType(e.target.value)}
                      size="small"
                      sx={{
                        ".MuiOutlinedInput-notchedOutline": {
                          borderColor: "#d1d5db",
                        },
                        height: { xs: "34px", sm: "38px", md: "40px" },
                        fontSize: { xs: "12px", sm: "13px", md: "14px" },
                        minWidth: "130px",
                        width: "100%",
                      }}
                      renderValue={(selected) => (
                        <Box className="flex items-center gap-2">
                          {getMessageIcon(messageType)}
                          <span className="text-sm md:text-base font-medium">
                            {selected}
                          </span>
                        </Box>
                      )}
                    >
                      <MenuItem value="SMS">
                        <img
                          src="/sms.png"
                          alt="SMS"
                          className="w-4 h-4 sm:w-5 sm:h-5 mr-2"
                        />
                        SMS
                      </MenuItem>
                      <MenuItem value="Telegram">
                        <img
                          src="/telegram.png"
                          alt="Telegram"
                          className="w-4 h-4 sm:w-5 sm:h-5 mr-2"
                        />
                        Telegram
                      </MenuItem>
                      <MenuItem value="WhatsApp">
                        <img
                          src="/whatsapp.png"
                          alt="WhatsApp"
                          className="w-4 h-4 sm:w-5 sm:h-5 mr-2"
                        />
                        WhatsApp
                      </MenuItem>
                    </Select>
                  </FormControl>
                </div>
              </div>
            </section>

            <section>
              <h3 className="text-lg font-semibold mb-4">Login</h3>
              <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm w-full">
                <label className="block text-gray-700 mb-4">Email</label>
                <TextField
                  type="email"
                  value="michaelhouck@gmail.com"
                  size="small"
                  fullWidth
                  sx={{
                    ".MuiOutlinedInput-notchedOutline": {
                      borderColor: "#d1d5db",
                    },
                  }}
                />
              </div>
            </section>

            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm flex items-center justify-between w-full">
              <a
                className="text-gray-700 hover:text-gray-900 font-medium"
                href="#"
              >
                Change password
              </a>
              <ArrowForward className="text-gray-400" />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;
