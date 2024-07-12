import { FiChevronDown, FiPlus } from "react-icons/fi";
import React, { useState } from "react";
import { Listbox } from "@headlessui/react";

const SidebarD = () => {
  const [isChecked, setIsChecked] = useState({
    switch1: false,
    switch2: false,
    switch3: false,
    switch4: false,
    switch5: true,
  });

  const handleCheckboxChange = (key) => {
    setIsChecked(prevState => ({
      ...prevState,
      [key]: !prevState[key],
    }));
  };

  const [selectedCountry, setSelectedCountry] = useState("Choose a country");
  const countries = [
    { name: "Choose a country", value: "" },
    { name: "United States", value: "US" },
    { name: "Canada", value: "CA" },
    { name: "France", value: "FR" },
    { name: "Germany", value: "DE" },
  ];

  return (
    <div className="flex flex-col w-64 border-l-2 bg-gray-100 p-5 box-border">
      <div className="flex flex-col space-y-4">
        {/* Onglets */}
        <ul className="flex flex-row space-x-2">
          <li>
            <button
              id="sidebar:question"
              role="tab"
              aria-controls="sidebar:question"
              aria-selected="true"
              className="text-base p-2 focus:outline-none"
            >
              Content
            </button>
          </li>
          <li>
            <button
              id="sidebar:design"
              role="tab"
              aria-controls="sidebar:design"
              aria-selected="false"
              className="text-base p-2 focus:outline-none"
            >
              Design
            </button>
          </li>
          <li>
            <button
              id="sidebar:logic"
              role="tab"
              aria-controls="sidebar:logic"
              aria-selected="false"
              className="text-base p-2 focus:outline-none"
            >
              <div className="flex items-center">
                <span className="text-gray-900">Logic</span>
              </div>
            </button>
          </li>
        </ul>

        {/* Options sous chaque onglet */}
        <div className="flex flex-col space-y-4">
          <div className="mb-5">
            <span className=" mb-10">Question</span>
            <div className="inline-flex mt-5">
              <button className="bg-transparent text-md hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-1 px-4 border border-gray-400 hover:border-transparent rounded-l-md">
                Text Input
              </button>
              <button className="bg-transparent text-md hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py- px-4 border  rounded-r-md border-gray-400 hover:border-transparent">
                Text Input
              </button>
            </div>
          </div>
          <div className="border-t mb-5"></div>
          <div className="flex items-center space-y-2">
            <div className="flex items-center justify-between w-full relative">
              <Listbox value={selectedCountry} onChange={setSelectedCountry}>
                <div className="relative w-full">
                  <Listbox.Button className="flex items-center justify-between bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500 p-2.5 w-full dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    {selectedCountry}
                    <FiChevronDown className="ml-2" />
                  </Listbox.Button>
                  <Listbox.Options className="absolute top-full mt-2 w-full bg-white border border-gray-300 rounded-lg shadow-lg z-10">
                    {countries.map((country) => (
                      <Listbox.Option
                        key={country.value}
                        value={country.name}
                        className={({ active }) =>
                          `cursor-pointer select-none relative p-2 ${
                            active ? "bg-blue-100" : "bg-white"
                          }`
                        }
                      >
                        {({ selected }) => (
                          <span
                            className={`block truncate ${
                              selected ? "font-medium" : "font-normal"
                            }`}
                          >
                            {country.name}
                          </span>
                        )}
                      </Listbox.Option>
                    ))}
                  </Listbox.Options>
                </div>
              </Listbox>
            </div>
          </div>
          <div className="border-t-2  mb-5"></div>
          <div className="flex flex-col mb-5 space-y-2">
            <span className="text-gray-900 my-5">Settings</span>
            <div className="flex flex-col space-y-2 ">
              <div className="flex items-center justify-between">
                <span>Required</span>
                <label className="flex cursor-pointer select-none items-center">
                  <div className="relative">
                    <input
                      type="checkbox"
                      checked={isChecked.switch1}
                      onChange={() => handleCheckboxChange('switch1')}
                      className="sr-only"
                    />
                    <div className={`block h-4 w-8 rounded-full border border-gray-300 ${
                    isChecked.switch1
                    ? " bg-gray-900 "
                    : "bg-gray-300"
                      }`}></div>
                    <div
                      className={`dot absolute left-1 top-1 h-2 w-2 rounded-full transition-transform duration-300 ${
                        isChecked.switch1
                          ? "transform translate-x-4 bg-white"
                          : "bg-black"
                      }`}
                    ></div>
                  </div>
                </label>
              </div>
              <div className="flex items-center justify-between">
                <span>Multiple selection</span>
                <label className="flex cursor-pointer select-none items-center">
                  <div className="relative">
                    <input
                      type="checkbox"
                      checked={isChecked.switch2}
                      onChange={() => handleCheckboxChange('switch2')}
                      className="sr-only"
                    />
                    <div className={`block h-4 w-8 rounded-full border border-gray-300 ${
                    isChecked.switch2
                    ? " bg-gray-900 "
                    : "bg-gray-300"
                      }`}></div>
                    <div
                      className={`dot absolute left-1 top-1 h-2 w-2 rounded-full transition-transform duration-300 ${
                        isChecked.switch2
                          ? "transform translate-x-4 bg-white"
                          : "bg-black"
                      }`}
                    ></div>
                  </div>
                </label>
              </div>
              <div className="flex items-center justify-between">
                <span>Randomize</span>
                <label className="flex cursor-pointer select-none items-center">
                  <div className="relative">
                    <input
                      type="checkbox"
                      checked={isChecked.switch3}
                      onChange={() => handleCheckboxChange('switch3')}
                      className="sr-only"
                    />
                    <div className={`block h-4 w-8 rounded-full border border-gray-300 ${
                    isChecked.switch3
                    ? " bg-gray-900 "
                    : "bg-gray-300"
                      }`}></div>
                    <div
                      className={`dot absolute left-1 top-1 h-2 w-2 rounded-full transition-transform duration-300 ${
                        isChecked.switch3
                          ? "transform translate-x-4 bg-white"
                          : "bg-black"
                      }`}
                    ></div>
                  </div>
                </label>
              </div>
              <div className="flex items-center justify-between">
                <span>"Other" option</span>
                <label className="flex cursor-pointer select-none items-center">
                  <div className="relative">
                    <input
                      type="checkbox"
                      checked={isChecked.switch4}
                      onChange={() => handleCheckboxChange('switch4')}
                      className="sr-only"
                    />
                    <div className={`block h-4 w-8 rounded-full border border-gray-300 ${
                    isChecked.switch4
                    ? " bg-gray-900 "
                    : "bg-gray-300"
                      }`}></div>
                    <div
                      className={`dot absolute left-1 top-1 h-2 w-2 rounded-full transition-transform duration-300 ${
                        isChecked.switch4
                          ? "transform translate-x-4 bg-white"
                          : "bg-black"
                      }`}
                    ></div>
                  </div>
                </label>
              </div>
              <div className="flex items-center justify-between">
                <span>Vertical alignment</span>
                <label className="flex cursor-pointer select-none items-center">
                  <div className="relative">
                    <input
                      type="checkbox"
                      checked={isChecked.switch5}
                      onChange={() => handleCheckboxChange('switch5')}
                      className="sr-only"
                    />
                    <div className={`block h-4 w-8 rounded-full border border-gray-300 ${
                    isChecked.switch5
                    ? " bg-gray-900 "
                    : "bg-gray-300"
                      }`}></div>
                    <div
                      className={`dot absolute left-1 top-1 h-2 w-2 rounded-full transition-transform duration-300 ${
                        isChecked.switch5
                          ? "transform translate-x-4 bg-white"
                          : "bg-black"
                      }`}
                    ></div>
                  </div>
                </label>
              </div>
            </div>
          </div>
          <div className="border-t mt-5"></div>
          <div className="flex justify-between">
            <span className="">Image or video</span>
            <div className="bg-white border p-1 rounded-lg border-black text-black-700 inline-flex items-center justify-center">
              <FiPlus />
            </div>
          </div>
          <div className="border-t mt-5"></div>
        </div>
      </div>
    </div>
  );
};

export default SidebarD;
