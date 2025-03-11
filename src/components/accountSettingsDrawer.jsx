import React from "react";
import { LuSettings2 } from "react-icons/lu";

const AccountSettingsDrawer = () => {
  return (
    <div className="bg-[#f9fafb] h-[90vh]">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">Account settings</h2>
        <button className="text-gray-500 text-xl">×</button>
      </div>
      <div className="flex items-center justify-between bg-white p-3 rounded-lg shadow-sm">
        <div className="flex items-center space-x-3">
          {/* Responsive Image Size */}
          <img
            alt={`Profile picture of Michael Houck`}
            className="w-7 h-7 sm:w-12 sm:h-12 rounded-full"
            src="https://storage.googleapis.com/a1aa/image/HpmrjG1RHuO6rl9AEY1geMugENy5aDbYDKQeZPN0jeQ.jpg"
          />
          <div>
            {/* Responsive Name and Username */}
            <div className="font-semibold text-xs sm:text-base">
              Michael Houck
            </div>
            <div className="text-gray-500 text-xs sm:text-base">
              @callmehouck
            </div>
          </div>
        </div>

        {/* Centered Tags and Plan */}
        <div className="flex space-x-2">
          <button className="bg-white border border-black text-gray-700 px-1 py-[2px] rounded-md text-sm">
            Switch account URL
          </button>

          {/* Pause Account Button - Moves below on small screens */}
          <button className="hidden sm:block text-gray-500 underline underline-offset-4">
            Pause account
          </button>
        </div>

        {/* Pause Account (Mobile View) */}
      </div>
      <div className="block sm:hidden text-right mt-2 mb-12 mr-2">
        <button className=" text-gray-500 underline underline-offset-4">
            Pause account
          </button>

      </div>

      <div className="relative mb-10 mt-10">
        {/* Niche(s) - Only Visible on Mobile (Outside the Box) */}
        <label className="block sm:hidden absolute -top-8 left-0 text-gray-700 font-bold pb-6">
          Niche(s)
        </label>

        {/* White Box */}
        <div className="flex items-center justify-between bg-white p-3 rounded-lg shadow-sm">
          {/* Niche(s) - Hidden on Mobile, Visible on Larger Screens */}
          <label className="hidden sm:block text-gray-700">Niche(s)</label>

          {/* Container for Tags and Plus Button */}
          <div className="flex w-full sm:justify-end justify-between">
            {/* Tags (Left on Mobile, Right on Desktop) */}
            <div className="flex items-center space-x-2">
              {/* AI Tag */}
              <span className="flex items-center bg-white text-gray-700 text-sm px-2 py-1 border border-gray-300 rounded-xl font-medium w-fit">
                AI
                <button className="ml-4 flex items-center justify-center w-4 h-4 bg-gray-200 text-gray-600 rounded-full text-[15px] hover:bg-gray-300 leading-none">
                  ×
                </button>
              </span>

              {/* Business Tag */}
              <span className="flex items-center bg-white text-gray-700 text-sm px-2 py-1 border border-gray-300 rounded-xl font-medium w-fit">
                Business
                <button className="ml-4 flex items-center justify-center w-4 h-4 bg-gray-200 text-gray-600 rounded-full text-[15px] hover:bg-gray-300 leading-none">
                  ×
                </button>
              </span>
            </div>

            {/* Plus Button (Always on Right Side) */}
            <div className="ml-4">
              <button className="flex items-center justify-center bg-orange-500 text-white w-8 h-8 rounded-lg">
                <span className="flex items-center justify-center w-full h-full leading-none">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                    <path fillRule="evenodd" d="M12 3.75a.75.75 0 01.75.75v6.75h6.75a.75.75 0 010 1.5h-6.75v6.75a.75.75 0 01-1.5 0v-6.75H4.5a.75.75 0 010-1.5h6.75V4.5a.75.75 0 01.75-.75z" clipRule="evenodd" />
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="relative mb-10 mt-16">
        {/* Subscription (Mobile) - Outside the Box */}
        <label className="block sm:hidden absolute -top-8 left-0 text-gray-700 font-bold pb-6">
          Subscription
        </label>

        {/* Mobile Cancel Subscription (Button with Orange Border) */}

        {/* Mobile Renew Date (Full Width) */}

        {/* White Box */}
        <div className="flex items-center justify-between bg-white p-3 rounded-lg shadow-sm">
          {/* Subscription Label (Desktop) */}
          <label className="hidden sm:block text-gray-700">Subscription</label>

          {/* Subscription Content */}
          <div className="flex flex-col w-full sm:items-end">
            {/* Desktop Pro Price (Small & Inline) */}
            <span className="hidden sm:inline-block text-gray-700 text-[9px] sm:text-sm px-1.5 py-0.5 border border-gray-300 rounded-md font-medium w-fit mb-1">
              Pro - $89/mo
            </span>
            {/* Mobile Pro Price (Large & Full Width) */}
            <span className="block sm:hidden text-gray-700 text-sm  px-4 py-1 border border-gray-300 rounded-md font-medium w-full mb-3">
              Pro - $89/mo
            </span>

            {/* Desktop Renew Date & Cancel Subscription (Inline) */}
            <div className="flex items-center space-x-4 hidden sm:flex">
              <div className="text-gray-500">Renews on June 6, 2024</div>

              <button className="text-gray-500 underline underline-offset-4">
                Cancel subscription
              </button>
            </div>
            <div className="block sm:hidden text-gray-500 w-full mb-3">
              Renews on June 6, 2024
            </div>
            <button className="block sm:hidden text-orange-500 border border-orange-500 px-4 py-1 rounded-md w-full mb-3 font-medium">
              Cancel Subscription
            </button>
          </div>
        </div>
      </div>

      <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between">
        <p className="text-gray-700 mb-1 sm:mb-0">
          Interested in becoming a creator?
        </p>

        {/* Check Eligibility Button */}
        <button className="text-orange-500 font-bold flex items-center space-x-2">
          <span>Check eligibility</span>
          {/* Arrow (Visible only on mobile screens) */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4 block sm:hidden mt-[5px]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>

    </div>
  );
};

export default AccountSettingsDrawer;
