import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Copy, 
  File,
  FileText as FileTextIcon,
  Printer,
  Columns,
  ChevronDown
} from 'lucide-react';
import { useParams } from 'react-router-dom';
import Navbar from '../../modules/Navbar';
import Sidebar from '../../modules/Sidebar';

const Drivers = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* Top Navbar */}
      <Navbar />
      
      <div className="flex flex-1">
        {/* Left Sidebar */}
        <Sidebar />
        
        {/* Main Content */}
        <main className="flex-1 ml-60 mt-15 p-5 overflow-auto">
          {/* Breadcrumb */}
         <div className="flex items-center px-5 py-4 text-sm">
            <a href="#" className="text-blue-600 font-medium no-underline hover:underline">Home</a>
            <span className="mx-2 text-gray-500">/</span>
            <span>Manage Company</span>
          </div> 
          
          {/* Page Title */}
          <h1 className="text-2xl mb-4 font-medium text-gray-800">Drivers</h1>
          
          {/* Card */}
          <div className="bg-white rounded shadow-sm border border-gray-200 mb-5 overflow-hidden">
            {/* Toolbar */}
            <div className="p-3.5 border-b border-gray-200 flex items-center flex-wrap gap-2">
              <button className="px-3 py-1.5 rounded border border-gray-300 bg-white text-gray-800 text-sm font-medium flex items-center hover:bg-gray-50">
                <Copy size={14} className="mr-1" />
                Copy
              </button>
              <button className="px-3 py-1.5 rounded border border-gray-300 bg-white text-gray-800 text-sm font-medium flex items-center hover:bg-gray-50">
                <FileTextIcon size={14} className="mr-1" />
                CSV
              </button>
              <button className="px-3 py-1.5 rounded border border-gray-300 bg-white text-gray-800 text-sm font-medium flex items-center hover:bg-gray-50">
                <FileTextIcon size={14} className="mr-1" />
                Excel
              </button>
              <button className="px-3 py-1.5 rounded border border-gray-300 bg-white text-gray-800 text-sm font-medium flex items-center hover:bg-gray-50">
                <File size={14} className="mr-1" />
                PDF
              </button>
              <button className="px-3 py-1.5 rounded border border-gray-300 bg-white text-gray-800 text-sm font-medium flex items-center hover:bg-gray-50">
                <Printer size={14} className="mr-1" />
                Print
              </button>
              <div className="relative">
                <button className="px-3 py-1.5 rounded border border-gray-300 bg-white text-gray-800 text-sm font-medium flex items-center hover:bg-gray-50">
                  <Columns size={14} className="mr-1" />
                  Column visibility
                  <ChevronDown size={12} className="ml-1" />
                </button>
              </div>
              <input 
                type="text" 
                className="px-3 py-1.5 rounded border border-gray-300 text-sm ml-auto w-52 focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-500" 
                placeholder="Search..." 
              />
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="px-4 py-3 text-left font-medium text-gray-600 text-xs uppercase tracking-wider border-b border-gray-200">Name</th>
                    <th className="px-4 py-3 text-left font-medium text-gray-600 text-xs uppercase tracking-wider border-b border-gray-200">Company</th>
                    <th className="px-4 py-3 text-left font-medium text-gray-600 text-xs uppercase tracking-wider border-b border-gray-200">Assigned Unit</th>
                    <th className="px-4 py-3 text-left font-medium text-gray-600 text-xs uppercase tracking-wider border-b border-gray-200">Status</th>
                    <th className="px-4 py-3 text-left font-medium text-gray-600 text-xs uppercase tracking-wider border-b border-gray-200">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {/* Table rows remain the same as before */}
                  {/* ... */}
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Drivers;