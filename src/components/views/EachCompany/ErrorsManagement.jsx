import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faBars, 
  faChevronDown, 
  faUser,
  faCopy,
  faFileCsv,
  faFileExcel,
  faFilePdf,
  faPrint,
  faColumns,
  faChevronRight,
  faHome,
  faSyncAlt
} from '@fortawesome/free-solid-svg-icons';
import Navbar from '../../modules/Navbar';
import Sidebar from '../../modules/Sidebar';


const ErrorManagement = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [columnDropdownOpen, setColumnDropdownOpen] = useState(false);
  const [columns, setColumns] = useState([
    { name: 'Username', visible: true },
    { name: 'Date Time', visible: true },
    { name: 'Error', visible: true },
    { name: 'Data', visible: true },
    { name: 'Status', visible: true },
    { name: 'Send By', visible: true },
    { name: 'Action', visible: true }
  ]);

  const toggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };

  const toggleColumnDropdown = () => {
    setColumnDropdownOpen(!columnDropdownOpen);
  };

  const toggleColumnVisibility = (index) => {
    const newColumns = [...columns];
    newColumns[index].visible = !newColumns[index].visible;
    setColumns(newColumns);
  };

  

  
  

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">

      {/* Sidebar */}
      <Sidebar />
      {/* Main Content */}
      <div className="flex flex-1">
        {/* Navbar */}
        <Navbar />

        {/* Breadcrumb */}
        <main className="flex-1 ml-60 mt-15 p-5 overflow-auto">
          {/* Breadcrumb */}
          <div className="flex items-center px-5 py-4 text-sm">
            <a href="#" className="text-blue-600 font-medium no-underline hover:underline">Home</a>
            <span className="mx-2 text-gray-500">/</span>
            <span>Manage Company</span>
          </div>


        {/* Page Title */}
        <h1 className="text-2xl font-medium px-5 pb-4 text-gray-800">Error</h1>
        
        {/* Content Card */}
        <div className="bg-white rounded shadow-sm border border-gray-300 mx-5 mb-5">
            {/* Toolbar */}
            <div className="px-4 py-3.5 border-b border-gray-300 flex items-center flex-wrap gap-2">
              <button className="px-4 py-2 rounded border border-gray-300 cursor-pointer text-sm font-medium inline-flex items-center bg-white text-gray-800 hover:bg-gray-100">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1">
                  <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                  <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                </svg>
                Copy
              </button>
              <button className="px-4 py-2 rounded border border-gray-300 cursor-pointer text-sm font-medium inline-flex items-center bg-white text-gray-800 hover:bg-gray-100">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <line x1="16" y1="13" x2="8" y2="13"></line>
                  <line x1="16" y1="17" x2="8" y2="17"></line>
                  <polyline points="10 9 9 9 8 9"></polyline>
                </svg>
                CSV
              </button>
              <button className="px-4 py-2 rounded border border-gray-300 cursor-pointer text-sm font-medium inline-flex items-center bg-white text-gray-800 hover:bg-gray-100">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <line x1="16" y1="13" x2="8" y2="13"></line>
                  <line x1="16" y1="17" x2="8" y2="17"></line>
                  <polyline points="10 9 9 9 8 9"></polyline>
                </svg>
                Excel
              </button>
              <button className="px-4 py-2 rounded border border-gray-300 cursor-pointer text-sm font-medium inline-flex items-center bg-white text-gray-800 hover:bg-gray-100">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                </svg>
                PDF
              </button>
              <button className="px-4 py-2 rounded border border-gray-300 cursor-pointer text-sm font-medium inline-flex items-center bg-white text-gray-800 hover:bg-gray-100">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1">
                  <polyline points="6 9 6 2 18 2 18 9"></polyline>
                  <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path>
                  <rect x="6" y="14" width="12" height="8"></rect>
                </svg>
                Print
              </button>
              <div className="relative">
                <button className="px-4 py-2 rounded border border-gray-300 cursor-pointer text-sm font-medium inline-flex items-center bg-white text-gray-800 hover:bg-gray-100">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1">
                    <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"></path>
                  </svg>
                  Column visibility
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1">
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </button>
              </div>
              <input type="text" className="px-3 py-2 rounded border border-gray-300 text-sm ml-auto w-52 focus:outline-none focus:border-blue-700 focus:ring-2 focus:ring-blue-100" placeholder="Search..." />
            </div>

          {/* Table */}
          
          
          {/* Pagination */}
          </div>
          </main>
      </div>
    </div>
  );
};

export default ErrorManagement;