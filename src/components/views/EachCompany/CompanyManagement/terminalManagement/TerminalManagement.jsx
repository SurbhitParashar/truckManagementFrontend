import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../../../../modules/Navbar';
import Sidebar from '../../../../modules/Sidebar';
import { Link, useParams } from 'react-router-dom';
import {FaMapMarkerAlt, FaTrashAlt } from "react-icons/fa";
import { FiEdit } from 'react-icons/fi';

const TerminalDashboard = () => {
  const { id } = useParams();
  const [terminalData, setTerminalData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch terminals on mount
  useEffect(() => {
    const fetchTerminals = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/terminal/getTerminal', {
          withCredentials: true
        });

        if (Array.isArray(res.data)) {
          setTerminalData(res.data);
        } else if (Array.isArray(res.data.terminals)) {
          setTerminalData(res.data.terminals);
        } else {
          throw new Error('Unexpected response format');
        }
      } catch (err) {
        console.error(err);
        setError('Failed to load terminal data.');
      } finally {
        setLoading(false);
      }
    };

    fetchTerminals();
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Sidebar />
      <div className="flex flex-1">
        <Navbar />
        <div className="flex-1 ml-60 mt-15 p-5 overflow-auto">
          <div className="flex items-center px-5 py-4 text-sm">
            <a href="#" className="text-blue-600 font-medium hover:underline">Home</a>
            <span className="mx-2 text-gray-500">/</span>
            <span>Manage Company</span>
          </div>

          <div className="px-6 py-4 flex justify-between items-center">
            <h1 className="text-2xl font-semibold text-slate-800">Terminal Management</h1>
            <Link
              to={`/dashboard/${id}/Manage/TerminalManagement/AddTerminal`}
              className="px-3 py-2 rounded bg-green-600 text-white text-sm font-medium hover:bg-green-700"
            >
              Add Terminal
            </Link>
          </div>


          <div className="bg-white rounded-md shadow-sm border border-gray-200 mx-5 mb-5">
                        {/* Toolbar */}
                        <div className="flex px-4 py-3.5 border-b border-gray-200 items-center flex-wrap gap-2">
                            <button className="px-4 py-2 rounded-md border border-gray-300 text-gray-800 cursor-pointer text-sm font-medium inline-flex items-center transition-all bg-white hover:bg-gray-50">
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1.5">
                                    <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                                </svg>
                                Copy
                            </button>
                            <button className="px-4 py-2 rounded-md border border-gray-300 text-gray-800 cursor-pointer text-sm font-medium inline-flex items-center transition-all bg-white hover:bg-gray-50">
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1.5">
                                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                                    <polyline points="14 2 14 8 20 8"></polyline>
                                    <line x1="16" y1="13" x2="8" y2="13"></line>
                                    <line x1="16" y1="17" x2="8" y2="17"></line>
                                    <polyline points="10 9 9 9 8 9"></polyline>
                                </svg>
                                CSV
                            </button>
                            <button className="px-4 py-2 rounded-md border border-gray-300 text-gray-800 cursor-pointer text-sm font-medium inline-flex items-center transition-all bg-white hover:bg-gray-50">
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1.5">
                                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                                    <polyline points="14 2 14 8 20 8"></polyline>
                                    <line x1="16" y1="13" x2="8" y2="13"></line>
                                    <line x1="16" y1="17" x2="8" y2="17"></line>
                                    <polyline points="10 9 9 9 8 9"></polyline>
                                </svg>
                                Excel
                            </button>
                            <button className="px-4 py-2 rounded-md border border-gray-300 text-gray-800 cursor-pointer text-sm font-medium inline-flex items-center transition-all bg-white hover:bg-gray-50">
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1.5">
                                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                                    <polyline points="14 2 14 8 20 8"></polyline>
                                </svg>
                                PDF
                            </button>
                            <button className="px-4 py-2 rounded-md border border-gray-300 text-gray-800 cursor-pointer text-sm font-medium inline-flex items-center transition-all bg-white hover:bg-gray-50">
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1.5">
                                    <polyline points="6 9 6 2 18 2 18 9"></polyline>
                                    <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path>
                                    <rect x="6" y="14" width="12" height="8"></rect>
                                </svg>
                                Print
                            </button>
                            <div className="relative">
                                <button className="px-4 py-2 rounded-md border border-gray-300 text-gray-800 cursor-pointer text-sm font-medium inline-flex items-center transition-all bg-white hover:bg-gray-50">
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
                                className="px-3 py-2 rounded-md border border-gray-300 text-sm ml-auto w-52 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                                placeholder="Search..."
                            />
                        </div>




          <div className="bg-white rounded-lg shadow-sm border p-4 mb-6">
            {loading && <p className="text-center py-4 text-gray-500">Loading terminals...</p>}
            {error && <p className="text-center py-4 text-red-500">{error}</p>}

            <table className="min-w-full text-sm border border-gray-300">
  <thead className="bg-gray-50 border-b border-gray-300">
    <tr>
      <th className="px-4 py-2 text-left font-semibold text-gray-600 border-r border-gray-300">Address</th>
      <th className="px-4 py-2 text-left font-semibold text-gray-600 border-r border-gray-300">City</th>
      <th className="px-4 py-2 text-left font-semibold text-gray-600 border-r border-gray-300">State</th>
      <th className="px-4 py-2 text-left font-semibold text-gray-600 border-r border-gray-300">Pin</th>
      <th className="px-4 py-2 text-left font-semibold text-gray-600 border-r border-gray-300">Timezone</th>
      <th className="px-4 py-2 text-left font-semibold text-gray-600 border-r border-gray-300">Company</th>
      <th className="px-4 py-2 text-left font-semibold text-gray-600 border-r border-gray-300">Created By</th>
      <th className="px-4 py-2 text-left font-semibold text-gray-600">Action</th>
    </tr>
  </thead>
  <tbody className="bg-white divide-y divide-gray-300">
    {terminalData.map((terminal) => (
      <tr key={terminal.id} className="border-b border-gray-300">
        <td className="px-4 py-2 border-r border-gray-200">{terminal.address}</td>
        <td className="px-4 py-2 border-r border-gray-200">{terminal.city}</td>
        <td className="px-4 py-2 border-r border-gray-200">{terminal.state}</td>
        <td className="px-4 py-2 border-r border-gray-200">{terminal.address_pin}</td>
        <td className="px-4 py-2 border-r border-gray-200">
          <span className="px-2 py-1 rounded text-xs font-medium bg-gray-100 text-gray-800">
            {terminal.timezone}
          </span>
        </td>
        <td className="px-4 py-2 border-r border-gray-200">{terminal.added_by_company_name}</td>
        <td className="px-4 py-2 border-r border-gray-200">{terminal.added_by_username}</td>
        <td className="px-4 py-2 flex space-x-1">
          <button className="bg-cyan-600 hover:bg-cyan-700 text-white p-2 rounded">
            <FiEdit size={16} />
          </button>
          <button className="bg-yellow-500 hover:bg-yellow-600 text-white p-2 rounded">
            <FaMapMarkerAlt size={16} />
          </button>
          <button className="bg-red-600 hover:bg-red-700 text-white p-2 rounded">
            <FaTrashAlt size={16} />
          </button>
        </td>
      </tr>
    ))}
    {terminalData.length === 0 && (
      <tr>
        <td colSpan={8} className="px-6 py-8 text-center text-gray-500">
          No terminals found.
        </td>
      </tr>
    )}
  </tbody>
</table>

          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default TerminalDashboard;
