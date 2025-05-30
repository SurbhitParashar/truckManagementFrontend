import React from 'react';
import { Truck, ChevronDown, Home, RotateCcw, Mail } from 'lucide-react';

import Head from 'next/head';

const AddCompany = () => {
  return (
    <>
      <Head>
        <title>Company Form</title>
        <script src="https://cdn.tailwindcss.com"></script>
      </Head>

      <div className="min-h-screen bg-blue-50">
        {/* Header Navigation */}
        <header className="bg-gradient-to-r from-blue-700 to-blue-800 text-white p-4 flex justify-between items-center shadow-md">
          <div className="flex space-x-6">
            <a href="/ManageCompany" className="hover:text-blue-300 flex items-center">
              <Home className="h-5 w-5 mr-1" />
              Home
            </a>
            <a href="#" className="hover:text-blue-300 flex items-center">
              <RotateCcw className="h-5 w-5 mr-1" />

              Refresh
            </a>
          </div>
          <div className="flex items-center space-x-2">
            <Mail className="h-5 w-5" />
            <span>jobanpreet@xpertlogs</span>
            <ChevronDown className="h-4 w-4" />
          </div>
        </header>

        {/* Main Content */}
        <main className="container mx-auto px-4 py-6">
          {/* Page Title */}
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-semibold text-blue-900">Company Form</h1>
            <div className="text-blue-600 flex items-center">
              <a href="#" className="hover:underline">Home</a>
              <span className="mx-2">/</span>
              <span className="text-blue-800 font-medium">Company Form</span>
            </div>
          </div>

          {/* Form Sections */}
          <form className="space-y-6">
            {/* General Settings */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden border border-blue-200">
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-4">
                <h2 className="font-medium text-lg text-white">General Settings</h2>
              </div>
              <div className="p-6">
                <div className="flex items-center mb-6">
                  <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center mr-3 font-medium">1</div>
                  <h3 className="text-lg font-medium text-blue-800">Add Company</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Company Name */}
                  <div>
                    <label className="block mb-2 font-medium text-blue-800">Name</label>
                    <input 
                      type="text" 
                      placeholder="Enter Company Name" 
                      className="w-full p-3 border border-blue-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-blue-50 placeholder-blue-400 text-blue-900"
                    />
                  </div>

                  {/* DOT Number */}
                  <div>
                    <label className="block mb-2 font-medium text-blue-800">DOT Number</label>
                    <input 
                      type="text" 
                      placeholder="Enter DOT Number" 
                      className="w-full p-3 border border-blue-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-blue-50 placeholder-blue-400 text-blue-900"
                    />
                  </div>

                  {/* Time Zone */}
                  <div>
                    <label className="block mb-2 font-medium text-blue-800">Time Zone</label>
                    <div className="relative">
                      <select className="w-full p-3 border border-blue-300 rounded-lg appearance-none bg-blue-50 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-blue-900 pl-3 pr-8">
                        <option>Choose</option>
                        <option>CST</option>
                        <option>EST</option>
                        <option>MST</option>
                        <option>PST</option>
                      </select>
                      <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                        <ChevronDown className="h-5 w-5 text-blue-500" />
                      </div>
                    </div>
                  </div>

                  {/* 24H Period Starting Time */}
                  <div>
                    <label className="block mb-2 font-medium text-blue-800">24H Period Starting Time</label>
                    <input 
                      type="time" 
                      value="00:00"
                      className="w-full p-3 border border-blue-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-blue-50 text-blue-900"
                    />
                  </div>
                </div>
                
                {/* Address Fields */}
                <div className="mt-6">
                  <label className="block mb-2 font-medium text-blue-800">Address</label>
                  <input 
                    type="text" 
                    placeholder="Address" 
                    className="w-full p-3 border border-blue-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-blue-50 placeholder-blue-400 text-blue-900 mb-4"
                  />
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    
                    
                    <div className="relative">
                      <select className="w-full p-3 border border-blue-300 rounded-lg appearance-none bg-blue-50 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-blue-900 pl-3 pr-8">
                        <option>City</option>
                        <option>Alabama</option>
                        <option>Alaska</option>
                        <option>Arizona</option>
                        <option>Arkansas</option>
                        <option>California</option>
                        <option>Connecticut</option>
                        <option>Delaware</option>
                        <option>Florida</option>
                        <option>Georgia</option>
                        <option>Hawaii</option>
                        <option>Idhao</option>
                        <option>Illinios</option>
                        <option>Indiana</option>
                        <option>Iowa</option>
                        <option>Kensas</option>
                        <option>Kentucky</option>
                        <option>Louisiana</option>
                        <option>Maine</option>
                        <option>Maryland</option>
                        <option>Masschusetts</option>
                        <option>Michigan</option>
                        <option>Minnesota</option>
                        <option>Mississippi</option>
                        <option>Montana</option>
                        <option>Nebraska</option>
                        <option>Nevada</option>
                        <option>New Hamsphire</option>
                        <option>New Jersey</option>
                        <option>New Mexico</option>
                        <option>New York</option>
                        <option>North Carolina</option>
                        <option>North Carolina</option>
                        <option>North Dakota</option>
                        <option>Ohio</option>
                        <option>Pkhlahoma</option>
                        <option>Oregon</option>
                        <option>Pennsylevenia</option>
                        <option>Rhode Island</option>
                        <option>South Carolina</option>
                        <option>South Dakota</option>
                        <option>Tennessee</option>
                        <option>Texas</option>
                        <option>Utha</option>
                        <option>Vermont</option>
                        <option>Virginia</option>
                        <option>Washington</option>
                        <option>West Virginia</option>
                        <option>Wisconsin</option>
                        <option>Wyoming</option>
                      </select>
                      <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                        <ChevronDown className="h-5 w-5 text-blue-500" />
                      </div>
                    </div>
                    
                    <div className="relative">
                      <select className="w-full p-3 border border-blue-300 rounded-lg appearance-none bg-blue-50 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-blue-900 pl-3 pr-8">
                        <option>United States</option>
                        <option>Canada</option>
                        <option>Mexico</option>
                      </select>
                      <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                        <ChevronDown className="h-5 w-5 text-blue-500" />
                      </div>
                    </div>
                    
                    <input 
                      type="text" 
                      placeholder="ZIP Code" 
                      className="w-full p-3 border border-blue-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-blue-50 placeholder-blue-400 text-blue-900"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Terminal Information */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden border border-blue-200">
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-4">
                <h2 className="font-medium text-lg text-white">Terminal 1</h2>
              </div>
              <div className="p-6">
                {/* Exempt Driver */}
                <div className="mb-6">
                  <label className="inline-flex items-center">
                    <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-600 rounded border-blue-300 focus:ring-blue-500" />
                    <span className="ml-2 text-blue-800">Exempt Driver</span>
                  </label>
                </div>
                
                {/* Terminal Time Zone */}
                <div className="mb-6">
                  <label className="block mb-2 font-medium text-blue-800">Time Zone</label>
                  <div className="relative">
                    <select className="w-full p-3 border border-blue-300 rounded-lg appearance-none bg-blue-50 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-blue-900 pl-3 pr-8">
                      <option>Choose</option>
                        <option>CST</option>
                        <option>EST</option>
                        <option>MST</option>
                        <option>PST</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                      <ChevronDown className="h-5 w-5 text-blue-500" />
                    </div>
                  </div>
                </div>
                
                {/* Terminal Address Fields */}
                <div>
                  <label className="block mb-2 font-medium text-blue-800">Terminal Address</label>
                  <input 
                    type="text" 
                    placeholder="Address" 
                    className="w-full p-3 border border-blue-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-blue-50 placeholder-blue-400 text-blue-900 mb-4"
                  />
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    
                    
                    <div className="relative">
                      <select className="w-full p-3 border border-blue-300 rounded-lg appearance-none bg-blue-50 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-blue-900 pl-3 pr-8">
                         <option>City</option>
                        <option>Alabama</option>
                        <option>Alaska</option>
                        <option>Arizona</option>
                        <option>Arkansas</option>
                        <option>California</option>
                        <option>Connecticut</option>
                        <option>Delaware</option>
                        <option>Florida</option>
                        <option>Georgia</option>
                        <option>Hawaii</option>
                        <option>Idhao</option>
                        <option>Illinios</option>
                        <option>Indiana</option>
                        <option>Iowa</option>
                        <option>Kensas</option>
                        <option>Kentucky</option>
                        <option>Louisiana</option>
                        <option>Maine</option>
                        <option>Maryland</option>
                        <option>Masschusetts</option>
                        <option>Michigan</option>
                        <option>Minnesota</option>
                        <option>Mississippi</option>
                        <option>Montana</option>
                        <option>Nebraska</option>
                        <option>Nevada</option>
                        <option>New Hamsphire</option>
                        <option>New Jersey</option>
                        <option>New Mexico</option>
                        <option>New York</option>
                        <option>North Carolina</option>
                        <option>North Carolina</option>
                        <option>North Dakota</option>
                        <option>Ohio</option>
                        <option>Pkhlahoma</option>
                        <option>Oregon</option>
                        <option>Pennsylevenia</option>
                        <option>Rhode Island</option>
                        <option>South Carolina</option>
                        <option>South Dakota</option>
                        <option>Tennessee</option>
                        <option>Texas</option>
                        <option>Utha</option>
                        <option>Vermont</option>
                        <option>Virginia</option>
                        <option>Washington</option>
                        <option>West Virginia</option>
                        <option>Wisconsin</option>
                        <option>Wyoming</option>
                      
                      </select>
                      <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                        <ChevronDown className="h-5 w-5 text-blue-500" />
                      </div>
                    </div>
                    
                    <div className="relative">
                      <select className="w-full p-3 border border-blue-300 rounded-lg appearance-none bg-blue-50 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-blue-900 pl-3 pr-8">
                        <option>United States</option>
                        <option>Canada</option>
                        <option>Mexico</option>
                      </select>
                      <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                        <ChevronDown className="h-5 w-5 text-blue-500" />
                      </div>
                    </div>
                    
                    <input 
                      type="text" 
                      placeholder="ZIP Code" 
                      className="w-full p-3 border border-blue-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-blue-50 placeholder-blue-400 text-blue-900"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Compliance Settings */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden border border-blue-200">
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-4">
                <h2 className="font-medium text-lg text-white">Compliance Settings</h2>
              </div>
              <div className="p-6">
                {/* Compliance Mode */}
                <div className="mb-6">
                  <label className="block mb-2 font-medium text-blue-800">Compliance Mode</label>
                  <div className="relative">
                    <select className="w-full p-3 border border-blue-300 rounded-lg appearance-none bg-blue-50 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-blue-900 pl-3 pr-8">
                      <option>ELD</option>
                      
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                      <ChevronDown className="h-5 w-5 text-blue-500" />
                    </div>
                  </div>
                </div>
                
                {/* Default Driver Log Settings */}
                <div className="mb-6">
                  <h3 className="text-lg font-medium text-blue-800 mb-4">Default Driver Log Settings</h3>
                  
                  {/* Exempt Driver */}
                  <div className="mb-4">
                    <label className="inline-flex items-center">
                      <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-600 rounded border-blue-300 focus:ring-blue-500" />
                      <span className="ml-2 text-blue-800">Exempt Driver</span>
                    </label>
                  </div>
                  
                  {/* HOS Rules */}
                  <div className="mb-4">
                    <label className="block mb-2 font-medium text-blue-800">HOS Rules</label>
                    <div className="relative">
                      <select className="w-full p-3 border border-blue-300 rounded-lg appearance-none bg-blue-50 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-blue-900 pl-3 pr-8">
                        <option>Choose</option>
                        <option>USA 70hr/8days</option>
                        <option>USA 60hr/7days</option>
                        <option>California 80hr/8days</option>
                        
                      </select>
                      <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                        <ChevronDown className="h-5 w-5 text-blue-500" />
                      </div>
                    </div>
                  </div>
                  
                  {/* Cargo Type */}
                  <div className="mb-4">
                    <label className="block mb-2 font-medium text-blue-800">Cargo Type</label>
                    <div className="relative">
                      <select className="w-full p-3 border border-blue-300 rounded-lg appearance-none bg-blue-50 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-blue-900 pl-3 pr-8">
                        <option>Choose</option>
                        <option>Property</option>
                        <option>Passenger</option>
                        <option>Oil & Gas</option>
                      </select>
                      <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                        <ChevronDown className="h-5 w-5 text-blue-500" />
                      </div>
                    </div>
                  </div>
                  
                  {/* Restart */}
                  <div className="mb-4">
                    <label className="block mb-2 font-medium text-blue-800">Restart</label>
                    <div className="relative">
                      <select className="w-full p-3 border border-blue-300 rounded-lg appearance-none bg-blue-50 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-blue-900 pl-3 pr-8">
                        <option>Choose</option>
                        <option>34-Hour</option>
                        <option>24-Hour</option>
                        <option>None</option>
                      </select>
                      <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                        <ChevronDown className="h-5 w-5 text-blue-500" />
                      </div>
                    </div>
                  </div>
                  
                  {/* Rest Break */}
                  <div className="mb-4">
                    <label className="block mb-2 font-medium text-blue-800">Rest Break</label>
                    <div className="relative">
                      <select className="w-full p-3 border border-blue-300 rounded-lg appearance-none bg-blue-50 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-blue-900 pl-3 pr-8">
                        <option>No Rest Break Required</option>
                        <option>30 Minute Rest Break Required</option>
                        
                      </select>
                      <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                        <ChevronDown className="h-5 w-5 text-blue-500" />
                      </div>
                    </div>
                  </div>
                  
                  {/* Additional Options */}
                  <div className="space-y-3">
                    <label className="inline-flex items-center">
                      <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-600 rounded border-blue-300 focus:ring-blue-500" />
                      <span className="ml-2 text-blue-800">Short-Haul Exception</span>
                    </label>
                    
                    <label className="inline-flex items-center">
                      <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-600 rounded border-blue-300 focus:ring-blue-500" defaultChecked />
                      <span className="ml-2 text-blue-800">Allow Personal Use</span>
                    </label>
                    
                    <label className="inline-flex items-center">
                      <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-600 rounded border-blue-300 focus:ring-blue-500" defaultChecked />
                      <span className="ml-2 text-blue-800">Allow Yard Moves</span>
                    </label>
                    
                    <label className="inline-flex items-center">
                      <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-600 rounded border-blue-300 focus:ring-blue-500" />
                      <span className="ml-2 text-blue-800">Allow Split Sleep</span>
                    </label>
                  </div>
                </div>
                
                {/* Plan Features */}
                <div>
                  <h3 className="text-lg font-medium text-blue-800 mb-4">Plan Features</h3>
                  
                  <div className="space-y-3">
                    <label className="inline-flex items-center">
                      <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-600 rounded border-blue-300 focus:ring-blue-500" />
                      <span className="ml-2 text-blue-800">Allow Tracking</span>
                    </label>
                    
                    <label className="inline-flex items-center">
                      <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-600 rounded border-blue-300 focus:ring-blue-500" />
                      <span className="ml-2 text-blue-800">Allow GPS Tracking</span>
                    </label>
                    
                    <label className="inline-flex items-center">
                      <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-600 rounded border-blue-300 focus:ring-blue-500" />
                      <span className="ml-2 text-blue-800">Allow IFTA</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Submit Button */}
            <button 
              type="submit" 
              className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-medium py-3 px-6 rounded-lg shadow-md transition-colors"
            >
              Submit
            </button>
          </form>
        </main>
      </div>
    </>
  );
}

export default AddCompany;