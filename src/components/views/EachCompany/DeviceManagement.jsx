import React, { useEffect, useState } from 'react';
import Navbar from '../../modules/Navbar';
import Sidebar from '../../modules/Sidebar';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';


const DeviceManagement = () => {
  const { id } = useParams()
  const [devices, setDevices] = useState([]);

  useEffect(() => {
    async function fetchDevices() {
      try {
        const res = await axios.get('http://localhost:5000/api/device/getDevices', {
          withCredentials: true
        });

        if (Array.isArray(res.data)) {
          setDevices(res.data);
        } else {
          console.error("Unexpected response format:", res.data);
          setDevices([]); // fallback to empty array
        }

      } catch (error) {
        console.error("Error fetching devices:", error);
      }
    }

    fetchDevices();
  }, []);

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
          {/* <h1 className="text-2xl font-medium px-5 pb-4 m-0 text-gray-800">Device</h1> */}
          <div className="px-6 py-4  flex justify-between items-center">
            <h1 className="text-2xl font-semibold text-slate-800">Devices</h1>
            <div className="flex gap-2">

              <Link to={`/dashboard/${id}/Devices/AddDevices`} className="px-3 py-2 rounded bg-green-600 text-white text-sm font-medium hover:bg-green-700">
                Add Devices
              </Link>
            </div>
          </div>



          {/* Card */}
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

            {/* table  */}
            <div className="bg-white rounded-xl shadow-md border border-gray-300 mx-5 mb-5 p-5 overflow-x-auto">
              <table className="min-w-full border-separate border-spacing-0 text-sm text-left text-gray-800">
                <thead className="bg-gray-100 text-xs uppercase text-gray-600 border-b border-gray-300">
                  <tr>
                    <th className="border border-gray-300 px-4 py-3">#</th>
                    <th className="border border-gray-300 px-4 py-3">Serial Number</th>
                    <th className="border border-gray-300 px-4 py-3">Version</th>
                    <th className="border border-gray-300 px-4 py-3">Model</th>
                    <th className="border border-gray-300 px-4 py-3">Status</th>
                    <th className="border border-gray-300 px-4 py-3">Created By</th>
                    <th className="border border-gray-300 px-4 py-3">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {devices.map((device, index) => (
                    <tr key={device.id || index} className="odd:bg-white even:bg-gray-50 transition-colors hover:bg-blue-50">
                      <td className="border border-gray-300 px-4 py-3 font-medium">{index + 1}</td>
                      <td className="border border-gray-300 px-4 py-3">{device.serial_number}</td>
                      <td className="border border-gray-300 px-4 py-3">{device.device_version}</td>
                      <td className="border border-gray-300 px-4 py-3">{device.device_model}</td>
                      <td className="border border-gray-300 px-4 py-3">
                        <span className={`inline-block px-2 py-1 text-xs font-semibold rounded-full ${device.status === 'active' ? 'bg-green-100 text-green-700' :
                          device.status === 'inactive' ? 'bg-red-100 text-red-700' :
                            'bg-yellow-100 text-yellow-700'
                          }`}>
                          {device.status}
                        </span>
                      </td>
                      <td className="border border-gray-300 px-4 py-3">{device.addedby_username}</td>
                      <td className="border border-gray-300 px-4 py-3">
                        <button
                          title="Edit Device"
                          className="flex items-center gap-1 text-blue-600 hover:text-blue-800 text-xs font-medium px-2 py-1 bg-blue-100 hover:bg-blue-200 rounded-md transition"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none"
                            viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                              d="M15.232 5.232l3.536 3.536M9 11l6-6m2 2l-6 6H9v-2z" />
                          </svg>
                          Edit
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              {devices.length === 0 && (
                <p className="text-gray-500 mt-4 text-center">No devices found for this company.</p>
              )}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default DeviceManagement;