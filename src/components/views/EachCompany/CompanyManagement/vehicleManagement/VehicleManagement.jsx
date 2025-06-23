import React, { useEffect, useState } from 'react';
import Navbar from '../../../../modules/Navbar';
import Sidebar from '../../../../modules/Sidebar';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import { FiEdit } from "react-icons/fi";
import { FaRoute, FaMapMarkerAlt, FaHashtag, FaFileInvoice, FaArrowRight } from "react-icons/fa";


const VehicleManagement = () => {
  const { id } = useParams()
  const [vehicles, setVehicles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchVehicles = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/vehicle/getVehicles', {
          withCredentials: true,
        });
        setVehicles(res.data);
      } catch (error) {
        console.error("Error fetching vehicles:", error.response?.data || error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchVehicles();
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
            <h1 className="text-2xl font-semibold text-slate-800">Manage Vehicles</h1>
            <div className="flex gap-2">

              <Link to={`/dashboard/${id}/Manage/VehicleManagement/AddVehicle`} className="px-3 py-2 rounded bg-green-600 text-white text-sm font-medium hover:bg-green-700">
                Add Vehicle
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
            <table className="min-w-full text-sm border border-gray-300">
              <thead className="bg-gray-50 border-b border-gray-300">
                <tr>
                  <th className="px-4 py-2 text-left font-semibold text-gray-600 border-r border-gray-300">Unit</th>
                  <th className="px-4 py-2 text-left font-semibold text-gray-600 border-r border-gray-300">Vin</th>
                  <th className="px-4 py-2 text-left font-semibold text-gray-600 border-r border-gray-300">Company</th>
                  <th className="px-4 py-2 text-left font-semibold text-gray-600 border-r border-gray-300">Plate</th>
                  <th className="px-4 py-2 text-left font-semibold text-gray-600 border-r border-gray-300">Make</th>
                  <th className="px-4 py-2 text-left font-semibold text-gray-600 border-r border-gray-300">Status</th>
                  <th className="px-4 py-2 text-left font-semibold text-gray-600 border-r border-gray-300">Created By</th>
                  <th className="px-4 py-2 text-left font-semibold text-gray-600">Action</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-300">
                {vehicles.map((vehicle) => (
                  <tr key={vehicle.id} className="border-b border-gray-300">
                    <td className="px-4 py-2 border-r border-gray-200">{vehicle.vehicle_unit_number}</td>
                    <td className="px-4 py-2 border-r border-gray-200">{vehicle.vin}</td>
                    <td className="px-4 py-2 border-r border-gray-200">{vehicle.added_by_company_name}</td>
                    <td className="px-4 py-2 border-r border-gray-200">{vehicle.plate_number || vehicle.license_plate}</td>
                    <td className="px-4 py-2 border-r border-gray-200">{vehicle.make}</td>
                    <td className="px-4 py-2 border-r border-gray-200">
                      <span className={`px-2 py-1 rounded text-white text-xs font-medium ${vehicle.is_active ? "bg-green-600" : "bg-red-600"}`}>
                        {vehicle.is_active ? "Active" : "Inactive"}
                      </span>
                    </td>
                    <td className="px-4 py-2 border-r border-gray-200">{vehicle.added_by_username}</td>
                    
                    
                    <td className="px-4 py-2 space-x-1 flex">
                      <button className="bg-cyan-600 hover:bg-cyan-700 text-white p-2 rounded">
                        <FiEdit size={16} />
                      </button>
                      <button className="bg-green-600 hover:bg-green-700 text-white p-2 rounded">
                        <FaRoute size={16} />
                      </button>
                      <button className="bg-yellow-500 hover:bg-yellow-600 text-white p-2 rounded">
                        <FaMapMarkerAlt size={16} />
                      </button>
                      <button className="bg-gray-700 hover:bg-gray-800 text-white p-2 rounded">
                        <FaHashtag size={16} />
                      </button>
                      <button className="bg-red-600 hover:bg-red-700 text-white p-2 rounded">
                        <FaFileInvoice size={16} />
                      </button>
                      <button className="bg-orange-500 hover:bg-orange-600 text-white p-2 rounded">
                        <FaArrowRight size={16} />
                      </button>
                    </td>

                  </tr>
                ))}
              </tbody>
            </table>



          </div>
        </main>
      </div>
    </div>
  );
}

export default VehicleManagement;