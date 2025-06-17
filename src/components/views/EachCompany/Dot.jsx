import { useState } from 'react';
import { 
  Menu, FileText, HelpCircle, Smartphone, AlertTriangle, Settings, Truck,
  ChevronDown, Plus, Home, RefreshCw, Copy, Printer, Columns, ChevronLeft, 
  ChevronRight, Trash2, Pencil
} from 'lucide-react';
import Navbar from '../../modules/Navbar';
import Sidebar from '../../modules/Sidebar';
import { Link, useParams, useLocation } from 'react-router-dom';

const DOT = () => {
    const {id} = useParams();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      {/* Navbar - fixed at top */}
      <Navbar />
      
      <div className="flex flex-1 overflow-hidden "> {/* pt-16 to account for navbar height */}
        {/* Sidebar - fixed below navbar */}
        <Sidebar />

        {/* Main Content Area */}
        <div className="flex-1 flex flex-col overflow-auto ml-60"> {/* ml-60 to account for sidebar width */}
          {/* Breadcrumb */}
          <div className="px-6 pt-4">
            <div className="flex items-center">
              <a href="#" className="text-blue-600 hover:underline">Home</a>
              <span className="mx-2 text-slate-400">/</span>
              <span className="text-slate-600">Manage Drivers</span>
            </div>
          </div>

          {/* Page Title */}
          <div className="px-6 py-4 bg-white flex justify-between items-center">
            <h1 className="text-2xl font-semibold text-slate-800">Manage Drivers</h1>
            <div className="flex gap-2">
              <Link to={`/dashboard/${id}/DOT/AddDriver`} className="flex items-center text-inherit no-underline w-full">
            
            Add Driver
          </Link>
              <button className="px-3 py-2 rounded bg-green-600 text-white text-sm font-medium hover:bg-green-700">
                Home Company
              </button>
            </div>
          </div>

          {/* Main Card */}
          <div className="flex-1 overflow-auto p-6">
            <div className="bg-white rounded-lg shadow border border-slate-200 flex flex-col h-full">
              {/* Toolbar */}
              <div className="px-6 py-3 border-b border-slate-200 flex flex-wrap items-center justify-between gap-3">
                <div className="flex flex-wrap gap-2">
                  <button className="px-3 py-2 rounded border border-slate-200 bg-white text-slate-700 text-sm font-medium flex items-center hover:bg-slate-50">
                    <Copy className="w-4 h-4 mr-2" />
                    Copy
                  </button>
                  <button className="px-3 py-2 rounded border border-slate-200 bg-white text-slate-700 text-sm font-medium flex items-center hover:bg-slate-50">
                    <FileText className="w-4 h-4 mr-2" />
                    CSV
                  </button>
                  <button className="px-3 py-2 rounded border border-slate-200 bg-white text-slate-700 text-sm font-medium flex items-center hover:bg-slate-50">
                    <FileText className="w-4 h-4 mr-2" />
                    Excel
                  </button>
                  <button className="px-3 py-2 rounded border border-slate-200 bg-white text-slate-700 text-sm font-medium flex items-center hover:bg-slate-50">
                    <FileText className="w-4 h-4 mr-2" />
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

export default DOT;