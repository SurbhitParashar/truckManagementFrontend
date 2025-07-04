import React from 'react';
import { FileText, HelpCircle, Smartphone, AlertTriangle, Settings, Truck } from 'lucide-react';
import { Link, useParams, useLocation } from 'react-router-dom';

const Sidebar = ({ collapsed }) => {
  const { id } = useParams();
  const location = useLocation();

  const isActive = (path) => location.pathname.includes(path);

  return (
    <div className={`${collapsed ? 'w-16' : 'w-60'} bg-gray-800 text-white flex-shrink-0 shadow-lg h-screen fixed top-0 left-0 overflow-y-auto transition-all duration-300 pt-16`}>
      <ul className="m-0 p-0 list-none">
        <li className={`px-4 py-3.5 flex items-center transition-all text-sm 
            ${isActive(`/dashboard/${id}`) ? "bg-gray-700 border-l-blue-600 font-medium" : "hover:bg-gray-700 hover:border-l-blue-600"}
            border-l-3 border-transparent cursor-pointer`}>
          <Link to={`/dashboard/${id}`} className="flex items-center text-inherit no-underline w-full">
            <span className={`${collapsed ? 'mx-auto' : 'mr-3'} opacity-80 w-5 text-center`}>
              <FileText size={16} />
            </span>
            {!collapsed && "Dashboard"}
          </Link>
        </li>
        <li className={`px-4 py-3.5 flex items-center transition-all text-sm 
            ${isActive('UnidentifiedEvents') ? "bg-gray-700 border-l-blue-600 font-medium" : "hover:bg-gray-700 hover:border-l-blue-600"}
            border-l-3 border-transparent cursor-pointer`}>
          <Link to={`/dashboard/${id}/UnidentifiedEvents`} className="flex items-center text-inherit no-underline w-full">
            <span className={`${collapsed ? 'mx-auto' : 'mr-3'} opacity-80 w-5 text-center`}>
              <HelpCircle size={16} />
            </span>
            {!collapsed && "Unidentified Event"}
          </Link>
        </li>
        <li className={`px-4 py-3.5 flex items-center transition-all text-sm 
            ${isActive('Devices') ? "bg-gray-700 border-l-blue-600 font-medium" : "hover:bg-gray-700 hover:border-l-blue-600"}
            border-l-3 border-transparent cursor-pointer`}>
          <Link to={`/dashboard/${id}/DeviceManagement`} className="flex items-center text-inherit no-underline w-full">
            <span className={`${collapsed ? 'mx-auto' : 'mr-3'} opacity-80 w-5 text-center`}>
              <Smartphone size={16} />
            </span>
            {!collapsed && "Devices"}
          </Link>
        </li>
        <li className={`px-4 py-3.5 flex items-center transition-all text-sm 
            ${isActive('Errors') ? "bg-gray-700 border-l-blue-600 font-medium" : "hover:bg-gray-700 hover:border-l-blue-600"}
            border-l-3 border-transparent cursor-pointer`}>
          <Link to={`/dashboard/${id}/ErrorsManagement`} className="flex items-center text-inherit no-underline w-full">
            <span className={`${collapsed ? 'mx-auto' : 'mr-3'} opacity-80 w-5 text-center`}>
              <AlertTriangle size={16} />
            </span>
            {!collapsed && "Errors"}
          </Link>
        </li>
        <li className={`px-4 py-3.5 flex items-center transition-all text-sm 
            ${isActive('Manage') ? "bg-gray-700 border-l-blue-600 font-medium" : "hover:bg-gray-700 hover:border-l-blue-600"}
            border-l-3 border-transparent cursor-pointer`}>
          <Link to={`/dashboard/${id}/CompanyManagement`} className="flex items-center text-inherit no-underline w-full">
            <span className={`${collapsed ? 'mx-auto' : 'mr-3'} opacity-80 w-5 text-center`}>
              <Settings size={16} />
            </span>
            {!collapsed && "Manage"}
          </Link>
        </li>
        <li className={`px-4 py-3.5 flex items-center transition-all text-sm 
            ${isActive('DOT') ? "bg-gray-700 border-l-blue-600 font-medium" : "hover:bg-gray-700 hover:border-l-blue-600"}
            border-l-3 border-transparent cursor-pointer`}>
          <Link to={`/dashboard/${id}/DOT`} className="flex items-center text-inherit no-underline w-full">
            <span className={`${collapsed ? 'mx-auto' : 'mr-3'} opacity-80 w-5 text-center`}>
              <Truck size={16} />
            </span>
            {!collapsed && "DOT"}
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;