import React from 'react';
import { 
  Copy, FileText as FileTextIcon, File, Printer, Columns, 
  Plus, X, ChevronLeft, ChevronRight ,ChevronDown
} from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import Sidebar from '../../modules/Sidebar';
import Navbar from '../../modules/Navbar';

const UnidentifiedEvents = () => {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      {/* Navbar - fixed at top */}
      <Navbar />
      
      <div className="flex flex-1 overflow-hidden pt-15"> {/* pt-15 to account for navbar height */}
        {/* Sidebar - fixed below navbar */}
        <Sidebar />
        
        {/* Main Content - needs margin for sidebar */}
        <div className="flex-1 flex flex-col overflow-hidden ml-60"> {/* ml-60 to account for sidebar width */}
          {/* Breadcrumb */}
          <div className="bg-white px-6 py-3 border-b border-slate-200 text-sm">
            <Link to="#" className="text-blue-600 hover:underline">Home</Link>
            <span className="mx-2 text-slate-400">/</span>
            <span className="text-slate-600">Unidentified Events</span>
          </div>

          {/* Page Title */}
          <div className="px-6 py-4 bg-white">
            <h1 className="text-2xl font-semibold text-slate-800">Unidentified Events</h1>
          </div>

          {/* Main Card */}
          <div className="flex-1 overflow-auto p-6">
            <div className="bg-white rounded-lg shadow border border-slate-200 flex flex-col h-full">
              {/* Card Header */}
              <div className="px-6 py-4 border-b border-slate-200">
                <h2 className="text-lg font-semibold text-slate-800">Unidentified Events</h2>
              </div>
              
              {/* Toolbar */}
              <div className="px-6 py-3 border-b border-slate-200 flex flex-wrap items-center justify-between gap-3">
                <div className="flex flex-wrap gap-2">
                  <button className="px-3 py-2 rounded border border-slate-200 bg-white text-slate-700 text-sm font-medium flex items-center hover:bg-slate-50">
                    <Copy className="w-4 h-4 mr-2" />
                    Copy
                  </button>
                  <button className="px-3 py-2 rounded border border-slate-200 bg-white text-slate-700 text-sm font-medium flex items-center hover:bg-slate-50">
                    <FileTextIcon className="w-4 h-4 mr-2" />
                    CSV
                  </button>
                  <button className="px-3 py-2 rounded border border-slate-200 bg-white text-slate-700 text-sm font-medium flex items-center hover:bg-slate-50">
                    <FileTextIcon className="w-4 h-4 mr-2" />
                    Excel
                  </button>
                  <button className="px-3 py-2 rounded border border-slate-200 bg-white text-slate-700 text-sm font-medium flex items-center hover:bg-slate-50">
                    <File className="w-4 h-4 mr-2" />
                    PDF
                  </button>
                  <button className="px-3 py-2 rounded border border-slate-200 bg-white text-slate-700 text-sm font-medium flex items-center hover:bg-slate-50">
                    <Printer className="w-4 h-4 mr-2" />
                    Print
                  </button>
                  <div className="relative">
                    <button className="px-3 py-2 rounded border border-slate-200 bg-white text-slate-700 text-sm font-medium flex items-center hover:bg-slate-50">
                      <Columns className="w-4 h-4 mr-2" />
                      Column visibility
                      <ChevronDown className="w-4 h-4 ml-2" />
                    </button>
                  </div>
                </div>
                
                <div className="relative">
                  <input 
                    type="text" 
                    placeholder="Search..." 
                    className="pl-3 pr-4 py-2 rounded border border-slate-300 text-sm w-64 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>
              
              {/* Table */}
             
              
              {/* Table Footer */}
             
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UnidentifiedEvents;