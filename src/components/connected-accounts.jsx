import { useState } from "react";
import { LuSettings2 } from "react-icons/lu";
import { Drawer, Box, Typography, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import AccountSettingsDrawer from "./components/accountSettingsDrawer";

const accountsData = {
  active: [
    {
      id: 1,
      name: "Michael Houck",
      username: "@callmehouck",
      profilePic:
        "https://storage.googleapis.com/a1aa/image/HpmrjG1RHuO6rl9AEY1geMugENy5aDbYDKQeZPN0jeQ.jpg",
      tags: ["AI", "Business"],
      plan: "Pro - $89/mo",
    },
    {
      id: 2,
      name: "Michael Houck",
      username: "@callmehouck",
      profilePic:
        "https://storage.googleapis.com/a1aa/image/HpmrjG1RHuO6rl9AEY1geMugENy5aDbYDKQeZPN0jeQ.jpg",
      tags: ["AI", "Business"],
      plan: "Pro - $49/mo",
    },
    {
      id: 3,
      name: "Michael Houck",
      username: "@callmehouck",
      profilePic:
        "https://storage.googleapis.com/a1aa/image/HpmrjG1RHuO6rl9AEY1geMugENy5aDbYDKQeZPN0jeQ.jpg",
      tags: ["AI", "Business"],
      plan: "Pro - $99/mo",
    },
    {
      id: 4,
      name: "Michael Houck",
      username: "@callmehouck",
      profilePic:
        "https://storage.googleapis.com/a1aa/image/HpmrjG1RHuO6rl9AEY1geMugENy5aDbYDKQeZPN0jeQ.jpg",
      tags: ["AI", "Business"],
      plan: "Pro - $55/mo",
    },
    {
      id: 5,
      name: "Michael Houck",
      username: "@callmehouck",
      profilePic:
        "https://storage.googleapis.com/a1aa/image/HpmrjG1RHuO6rl9AEY1geMugENy5aDbYDKQeZPN0jeQ.jpg",
      tags: ["AI", "Business"],
      plan: "Pro - $43/mo",
    },
  ],
  inactive: [
    {
      id: 4,
      name: "Michael Houck",
      username: "@callmehouck",
      profilePic:
        "https://storage.googleapis.com/a1aa/image/HpmrjG1RHuO6rl9AEY1geMugENy5aDbYDKQeZPN0jeQ.jpg",
      tags: ["AI", "Business"],
      status: "Subscription paused on June 6, 2024",
    },
    {
      id: 5,
      name: "Michael Houck",
      username: "@callmehouck",
      profilePic:
        "https://storage.googleapis.com/a1aa/image/HpmrjG1RHuO6rl9AEY1geMugENy5aDbYDKQeZPN0jeQ.jpg",
      tags: ["AI", "Business"],
      status: "Subscription cancelled on June 6, 2024",
    },
  ],
};

const ActiveAccounts = ({ accounts }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerOpen = () => setDrawerOpen(true);
  const handleDrawerClose = () => setDrawerOpen(false);

  return (
    <div className="space-y-4">
      {accounts.map((account) => (
        <div
          key={account.id}
          className="flex items-center justify-between bg-white p-3 rounded-lg shadow-sm"
        >
          <div className="flex items-center space-x-3">
            {/* Responsive Image Size */}
            <img
              alt={`Profile picture of ${account.name}`}
              className="w-7 h-7 sm:w-12 sm:h-12 rounded-full"
              src={account.profilePic}
            />
            <div className="flex items-center">
              <div>
                {/* Responsive Name and Username */}
                <div className="font-semibold text-xs sm:text-base">
                  {account.name}
                </div>
                <div className="text-gray-500 text-xs sm:text-base">
                  {account.username}
                </div>
              </div>

              {/* Centered Tags and Plan */}
              <div className="ml-3 flex items-center">
                <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-2">
                  {/* Responsive Tags */}
                  <div className="flex space-x-1 items-center">
                    {account.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="bg-gray-200 text-gray-700 text-[11px] sm:text-sm px-1.5 py-0.5 rounded-lg"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  {/* Responsive Plan */}
                  <span className="text-gray-700 text-[9px] sm:text-sm px-1.5 py-0.5 border border-gray-300 rounded-sm font-medium mt-1 sm:mt-0 w-fit">
                    {account.plan}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Icons Section */}
          <div className="flex items-center">
            <LuSettings2
              className="text-gray-400 w-4 h-4 sm:w-5 sm:h-5 cursor-pointer text-black"
              onClick={handleDrawerOpen}
            />
            <i className="fas fa-ellipsis-v text-gray-400 text-sm sm:text-base cursor-pointer"></i>
          </div>
        </div>
      ))}

<Drawer anchor="right" open={drawerOpen} onClose={handleDrawerClose}>
  <Box
    p={3}
    role="presentation"
    className="bg-[#f9fafb] w-[100vw] sm:w-[540px] md:w-[740px]"
  >
    <AccountSettingsDrawer />
  </Box>
</Drawer>
    </div>
  );
};

const InactiveAccounts = ({ accounts }) => {
  return (
    <div className="space-y-4">
      {accounts.map((account) => (
        <div
          key={account.id}
          className="relative flex flex-col bg-gray-200 rounded-lg shadow-sm"
        >
          {/* Checkbox positioned absolutely for mobile view */}
          <div className="md:hidden absolute right-3 top-1/2 -translate-y-1/2 z-10">
            <input
              type="checkbox"
              id={`checkbox-mobile-${account.id}`}
              className="sr-only"
            />
            <label
              htmlFor={`checkbox-mobile-${account.id}`}
              className="flex items-center justify-center w-4 h-4 border border-orange-500 rounded cursor-pointer bg-white"
            >
              <svg
                className="w-3 h-3 text-white fill-current hidden checkbox-checkmark"
                viewBox="0 0 20 20"
              >
                <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
              </svg>
            </label>
          </div>

          <div className="relative flex items-center justify-between p-3">
            <div className="flex items-center space-x-3">
              {/* Responsive Image Size */}
              <img
                alt={`Profile picture of ${account.name}`}
                className="w-7 h-7 sm:w-12 sm:h-12 rounded-full"
                src={account.profilePic}
              />
              <div>
                <div className="flex items-center">
                  <div>
                    {/* Responsive Name and Username */}
                    <div className="font-semibold text-xs sm:text-base">
                      {account.name}
                    </div>
                    <div className="text-gray-500 text-xs sm:text-base">
                      {account.username}
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex space-x-1 ml-3 items-center">
                    {account.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="bg-white text-gray-700 text-[11px] sm:text-sm px-1.5 py-0.5 rounded-lg"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Status on Desktop */}
                  <div className="hidden sm:block ml-3 text-gray-700 text-xs sm:text-sm">
                    {account.status}
                  </div>
                </div>
              </div>
            </div>

            {/* Custom Checkbox for Desktop */}
            <div className="hidden sm:block">
              <input
                type="checkbox"
                id={`checkbox-desktop-${account.id}`}
                className="sr-only"
              />
              <label
                htmlFor={`checkbox-desktop-${account.id}`}
                className="flex items-center justify-center w-4 h-4 border border-orange-500 rounded cursor-pointer bg-white"
              >
                <svg
                  className="w-3 h-3 text-white fill-current hidden checkbox-checkmark"
                  viewBox="0 0 20 20"
                >
                  <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
                </svg>
              </label>
            </div>
          </div>

          {/* Status on Mobile */}
          <div className="px-3 pb-3 text-gray-700 text-[14px] sm:text-sm font-medium sm:hidden">
            {account.status}
          </div>

          {/* Shared Styles for Checkbox */}
          <style jsx>{`
            input:checked + label {
              background-color: #f97316;
            }
            input:checked + label .checkbox-checkmark {
              display: block;
            }
          `}</style>
        </div>
      ))}
    </div>
  );
};

const ConnectedAccounts = () => {
  return (
    <div className="bg-[#f9fafb] p-6 h-auto">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl font-semibold mb-6">Connected accounts</h1>

        {/* Active Accounts */}
        <div>
          <h2 className="text-lg font-medium mb-4">
            Active accounts ({accountsData.active.length})
          </h2>
          <ActiveAccounts accounts={accountsData.active} />
        </div>

        {/* Inactive Accounts */}
        <div className="mt-12">
          <h2 className="text-lg font-medium mb-4">
            Inactive accounts ({accountsData.inactive.length})
          </h2>
          <InactiveAccounts accounts={accountsData.inactive} />

          {/* Reactivate Button BELOW InactiveAccounts on Right Side */}
          <div className="flex justify-end mt-4">
            <h2 className="text-lg text-orange-500 font-medium">
              Reactivate (1)
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConnectedAccounts;
