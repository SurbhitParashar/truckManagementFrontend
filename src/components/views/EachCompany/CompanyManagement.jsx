import { useState } from 'react';
import Navbar from '../../modules/Navbar';
import Sidebar from '../../modules/Sidebar';

const CompanyManagement = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const toggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };

  return (
    <div className="flex min-h-screen bg-gray-100 text-gray-800">
      {/* Sidebar */}
      <Sidebar collapsed={sidebarCollapsed} />
      
      {/* Main Content */}
      <div className={`flex-1 overflow-auto flex flex-col transition-all duration-300 ${sidebarCollapsed ? 'ml-16' : 'ml-60'}`}>
        {/* Navbar */}
        <Navbar toggleSidebar={toggleSidebar} />
        
        {/* Rest of your content remains the same */}
        <div className="mt-16">
          {/* Breadcrumb */}
          <div className="flex items-center px-5 py-4 text-sm">
            <a href="#" className="text-blue-600 font-medium no-underline hover:underline">Home</a>
            <span className="mx-2 text-gray-500">/</span>
            <span>Manage Company</span>
          </div>
          
          {/* Page Header */}
          <div className="flex justify-between items-center px-5 pb-4">
            <h1 className="text-2xl m-0 font-medium text-gray-800">Manage Company</h1>
            <button className="px-4 py-2 bg-green-600 text-white rounded border-none cursor-pointer inline-flex items-center text-sm font-medium">
              <i className="fas fa-plus mr-2"></i> Add Company
            </button>
          </div>
        
        {/* Card */}
        <div className="bg-white rounded shadow-sm border border-gray-200 mx-5 mb-5">
          {/* Toolbar */}
          <div className="p-3.5 border-b border-gray-200 flex items-center flex-wrap gap-2">
            <button className="px-4 py-2 rounded border border-gray-200 text-gray-800 text-sm font-medium inline-flex items-center transition hover:bg-gray-50">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1.5">
                <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
              </svg>
              Copy
            </button>
            <button className="px-4 py-2 rounded border border-gray-200 text-gray-800 text-sm font-medium inline-flex items-center transition hover:bg-gray-50">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1.5">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
                <line x1="16" y1="13" x2="8" y2="13"></line>
                <line x1="16" y1="17" x2="8" y2="17"></line>
                <polyline points="10 9 9 9 8 9"></polyline>
              </svg>
              CSV
            </button>
            <button className="px-4 py-2 rounded border border-gray-200 text-gray-800 text-sm font-medium inline-flex items-center transition hover:bg-gray-50">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1.5">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
                <line x1="16" y1="13" x2="8" y2="13"></line>
                <line x1="16" y1="17" x2="8" y2="17"></line>
                <polyline points="10 9 9 9 8 9"></polyline>
              </svg>
              Excel
            </button>
            <button className="px-4 py-2 rounded border border-gray-200 text-gray-800 text-sm font-medium inline-flex items-center transition hover:bg-gray-50">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1.5">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
              </svg>
              PDF
            </button>
            <button className="px-4 py-2 rounded border border-gray-200 text-gray-800 text-sm font-medium inline-flex items-center transition hover:bg-gray-50">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1.5">
                <polyline points="6 9 6 2 18 2 18 9"></polyline>
                <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path>
                <rect x="6" y="14" width="12" height="8"></rect>
              </svg>
              Print
            </button>
            <div className="relative">
              <button className="px-4 py-2 rounded border border-gray-200 text-gray-800 text-sm font-medium inline-flex items-center transition hover:bg-gray-50">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1.5">
                  <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"></path>
                </svg>
                Column visibility
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1.5">
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </button>
            </div>
            <input 
              type="text" 
              className="px-3 py-2 rounded border border-gray-200 text-sm ml-auto w-52 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100" 
              placeholder="Search..."
            />
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="px-4 py-3.5 text-left font-medium text-gray-500 border-b-2 border-gray-200 text-sm whitespace-nowrap">Company Name</th>
                  <th className="px-4 py-3.5 text-left font-medium text-gray-500 border-b-2 border-gray-200 text-sm whitespace-nowrap">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-gray-50">
                  <td className="px-4 py-3.5 border-b border-gray-200">
                    <a href="#" className="text-blue-600 font-medium no-underline hover:underline">Test</a>
                  </td>
                  <td className="px-4 py-3.5 border-b border-gray-200">
                    <div className="flex gap-1.5">
                      <button className="px-3 py-1.5 bg-blue-600 text-white rounded border-none text-xs font-medium inline-flex items-center">
                        <i className="fas fa-edit mr-1"></i> Edit
                      </button>
                      <button className="px-3 py-1.5 bg-green-600 text-white rounded border-none text-xs font-medium inline-flex items-center">
                        <i className="fas fa-user-tie mr-1"></i> Driver
                      </button>
                      <button className="px-3 py-1.5 bg-yellow-600 text-white rounded border-none text-xs font-medium inline-flex items-center">
                        <i className="fas fa-user mr-1"></i> Portal User
                      </button>
                      <button className="px-3 py-1.5 bg-blue-500 text-white rounded border-none text-xs font-medium inline-flex items-center">
                        <i className="fas fa-truck mr-1"></i> Vehicle
                      </button>
                      <button className="px-3 py-1.5 bg-red-600 text-white rounded border-none text-xs font-medium inline-flex items-center">
                        <i className="fas fa-desktop mr-1"></i> Terminal
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          
          {/* Pagination */}
          <div className="p-3.5 border-t border-gray-200 flex justify-between items-center text-sm">
            <div className="text-gray-500">Showing 1 to 1 of 1 entries</div>
            <div className="flex gap-1.5">
              <a href="#" className="px-2.5 py-1.5 rounded border border-gray-200 text-blue-600 no-underline hover:bg-gray-50">Previous</a>
              <a href="#" className="px-2.5 py-1.5 rounded border border-blue-600 bg-blue-600 text-white no-underline">1</a>
              <a href="#" className="px-2.5 py-1.5 rounded border border-gray-200 text-blue-600 no-underline hover:bg-gray-50">Next</a>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default CompanyManagement;