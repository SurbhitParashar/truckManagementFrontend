import React, { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronDown, Copy, FileText, File, Printer, Settings, Search } from 'lucide-react';
import { fetchUserFromCookie } from '../../utils/auth';

const ManageCompany = () => {
  const navigate = useNavigate();
  const [user,setUser]=useState(null);

  useEffect(() => {
    fetchUserFromCookie().then(setUser);
  }, []);

  // Sample data
  const companies = [
    { name: 'Test', dot: '34343454', createdBy: 'gagandeep@xpertlogs', status: 'Active' },
    { name: 'Test Company', dot: '0000000', createdBy: 'omni', status: 'Active' },
    // ... other company data
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <span className="text-xl font-semibold text-gray-900">XpertLogs</span>
            </div>
            <div className="flex items-center space-x-4">
              <a href="/ManageCompany" className="text-gray-700 hover:text-blue-600">Home</a>
              <a href="#" className="text-gray-700 hover:text-blue-600">Refresh</a>
              <div className="flex items-center space-x-2">
                {/* <div className="h-8 w-8 rounded-full bg-blue-600 flex items-center justify-center text-white">J</div> */}
                
            <span className="text-gray-700 border border-gray-300 rounded px-2 py-1">{user?.username || "Loading..."}</span>
            
                <ChevronDown className="h-5 w-5 text-gray-500" />
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Breadcrumb */}
        <div className="flex items-center text-sm text-gray-600 mb-6">
          <a href="#" className="text-blue-600 hover:text-blue-800">Home</a>
          <span className="mx-2">/</span>
          <span>Manage Company</span>
        </div>

        {/* Page Header */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-900">Manage Company</h1>
          <button 
            onClick={() => navigate('/AddCompany')}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md flex items-center"
          >
            <span className="mr-2">+</span>
            Add Company
          </button>
        </div>

        {/* Content Card */}
        <div className="bg-white shadow rounded-lg overflow-hidden">
          {/* Card Header */}
          <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
            <div className="flex space-x-2">
              <button className="flex items-center text-gray-700 hover:text-blue-600 border border-gray-300 rounded-md px-3 py-1">
                <Copy className="h-4 w-4 mr-2" />
                Copy
              </button>
              <button className="flex items-center text-gray-700 hover:text-blue-600 border border-gray-300 rounded-md px-3 py-1">
                <FileText className="h-4 w-4 mr-2" />
                CSV
              </button>
              <button className="flex items-center text-gray-700 hover:text-blue-600 border border-gray-300 rounded-md px-3 py-1">
                <File className="h-4 w-4 mr-2" />
                Excel
              </button>
              <button className="flex items-center text-gray-700 hover:text-blue-600 border border-gray-300 rounded-md px-3 py-1">
                <Printer className="h-4 w-4 mr-2" />
                Print
              </button>
              <div className="relative">
                <button className="flex items-center text-gray-700 hover:text-blue-600 border border-gray-300 rounded-md px-3 py-1">
                  <Settings className="h-4 w-4 mr-2" />
                  Column visibility
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search..."
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Company Name</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">DOT</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Created By</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {companies.map((company, index) => (
                  <tr 
                    key={index} 
                    className="hover:bg-gray-50 cursor-pointer"
                    onClick={() => navigate('/eachcompany/drivers')}
                  >
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="font-medium text-gray-900">{company.name}</span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-gray-500">{company.dot}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-gray-500">{company.createdBy}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="inline-flex items-center">
                        <span className={`h-2 w-2 rounded-full ${company.status === 'Active' ? 'bg-green-500' : 'bg-red-500'} mr-2`}></span>
                        {company.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <button className="text-gray-500 hover:text-gray-700">
                        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"></path>
                        </svg>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Card Footer */}
          <div className="px-6 py-4 border-t border-gray-200 flex justify-between items-center">
            <div className="text-sm text-gray-700">
              Showing 1 to 10 of 400 entries
            </div>
            <div className="flex space-x-1">
              <button className="px-3 py-1 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-50">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
                </svg>
              </button>
              <button className="px-3 py-1 rounded-md bg-blue-600 text-white">1</button>
              <button className="px-3 py-1 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-50">2</button>
              <button className="px-3 py-1 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-50">3</button>
              <button className="px-3 py-1 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-50">4</button>
              <button className="px-3 py-1 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-50">5</button>
              <span className="px-3 py-1">...</span>
              <button className="px-3 py-1 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-50">40</button>
              <button className="px-3 py-1 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-50">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageCompany;