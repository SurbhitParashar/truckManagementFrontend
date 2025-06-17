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
              <div className="flex-1 overflow-auto">
                <table className="min-w-full divide-y divide-slate-200">
                  <thead className="bg-slate-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">ID</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider w-12">
                        <input type="checkbox" className="rounded border-slate-300 text-blue-600 focus:ring-blue-500" />
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Time</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Vehicle</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Event</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Status</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Odometer (MI)</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Engine Hours</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Location</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Notes</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Action</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-slate-200">
                    <tr className="hover:bg-slate-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-900">1</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <input type="checkbox" className="rounded border-slate-300 text-blue-600 focus:ring-blue-500" />
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-900">15-04-2025 22:17:45</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-900">33456</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-900">ON DUTY</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-900">1</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-900">6467</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-900">72.199996948242</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-900">5313mi SSW from Bethel, AK</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-900"></td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-900">
                        <div className="flex gap-1">
                          <button className="w-8 h-8 rounded bg-blue-600 text-white flex items-center justify-center hover:bg-blue-700">
                            <Plus className="w-4 h-4" />
                          </button>
                          <button className="w-8 h-8 rounded bg-red-600 text-white flex items-center justify-center hover:bg-red-700">
                            <X className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-900">2</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <input type="checkbox" className="rounded border-slate-300 text-blue-600 focus:ring-blue-500" />
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-900">26-04-2025 05:30:59</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-900">12</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-900">ON DUTY</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-900">1</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-900">6467</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-900">72.199996948242</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-900">5316mi SSW from Bethel, AK</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-900"></td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-900">
                        <div className="flex gap-1">
                          <button className="w-8 h-8 rounded bg-blue-600 text-white flex items-center justify-center hover:bg-blue-700">
                            <Plus className="w-4 h-4" />
                          </button>
                          <button className="w-8 h-8 rounded bg-red-600 text-white flex items-center justify-center hover:bg-red-700">
                            <X className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              {/* Table Footer */}
              <div className="px-6 py-4 border-t border-slate-200 flex items-center justify-between">
                <div className="text-sm text-slate-600">
                  Showing <span className="font-medium">1</span> to <span className="font-medium">2</span> of <span className="font-medium">2</span> results
                </div>
                <div className="flex gap-2">
                  <button className="px-3 py-1 rounded border border-slate-200 bg-white text-slate-700 text-sm flex items-center hover:bg-slate-50 disabled:opacity-50" disabled>
                    <ChevronLeft className="w-4 h-4 mr-1" />
                    Previous
                  </button>
                  <button className="px-3 py-1 rounded border border-slate-200 bg-white text-slate-700 text-sm flex items-center hover:bg-slate-50 disabled:opacity-50" disabled>
                    Next
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UnidentifiedEvents;