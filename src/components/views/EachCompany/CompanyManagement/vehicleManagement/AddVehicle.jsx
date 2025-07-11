import React, { useState, useEffect } from 'react';
import { Car, Settings, MapPin, Fuel, Calendar, Hash, Truck, FileText } from 'lucide-react';
import Navbar from '../../../../modules/Navbar';
import Sidebar from '../../../../modules/Sidebar';
import axios from 'axios';

const VehicleForm = () => {
    const [devices, setDevices] = useState([]);

    useEffect(() => {
        async function fetchDevices() {
            try {
                const res = await axios.get('http://localhost:5000/api/device/getUnlinkedDevices', {
                    withCredentials: true
                });

                if (Array.isArray(res.data)) {
                    setDevices(res.data);
                } else {
                    console.error("Unexpected response format:", res.data);
                    setDevices([]);
                }
            } catch (error) {
                console.error("Error fetching devices:", error);
            }
        }

        fetchDevices();
    }, []);

    // console.log(devices)


    const [formData, setFormData] = useState({
        vehicleUnitNumber: '',
        make: '',
        model: '',
        year: '',
        vin: '',
        fuel: '',
        eld: 'Heavy Duty',
        device_id: '',
        licensePlate: '',
        country: 'United States',
        plateNumber: '',
        engineHoursOffset: '',
        offsetOdometer: '',
        harshBreaking: '0-8192',
        harshAcceleration: '0-8192',
        harshTurn: '0-8192',
        vinMatch: true,
        isActive: true
    });

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };



    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post(
                'http://localhost:5000/api/vehicle/addVehicle',
                formData,
                { withCredentials: true }
            );
            console.log("Vehicle saved:", res.data);
            alert('Vehicle form submitted successfully!');
        } catch (error) {
            console.error("Error saving vehicle:", error.response?.data || error.message);
            alert('Failed to submit vehicle information');
        }
    };


    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 p-20">
            <Navbar />
            <Sidebar />
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                            <div className="bg-blue-500 p-3 rounded-lg">
                                <Car className="w-6 h-6 text-white" />
                            </div>
                            <div>
                                <h1 className="text-2xl font-bold text-gray-900">Vehicle Form</h1>
                                <p className="text-gray-600">Add and configure your vehicle details</p>
                            </div>
                        </div>
                        <nav className="text-sm text-gray-500">
                            <span className="text-blue-500 hover:text-blue-700 cursor-pointer">Home</span>
                            <span className="mx-2">/</span>
                            <span>Vehicle Form</span>
                        </nav>
                    </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Vehicle Information Section */}
                    <div className="bg-white rounded-xl shadow-lg p-6">
                        <div className="flex items-center space-x-2 mb-6">
                            <div className="bg-gray-800 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-semibold">
                                1
                            </div>
                            <h2 className="text-xl font-semibold text-gray-900">Add Vehicle</h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    <Hash className="w-4 h-4 inline mr-1" />
                                    Vehicle Unit #
                                </label>
                                <input
                                    type="text"
                                    name="vehicleUnitNumber"
                                    value={formData.vehicleUnitNumber}
                                    onChange={handleInputChange}
                                    placeholder="Enter Vehicle Unit Number"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    <Truck className="w-4 h-4 inline mr-1" />
                                    Make
                                </label>
                                <input
                                    type="text"
                                    name="make"
                                    value={formData.make}
                                    onChange={handleInputChange}
                                    placeholder="Enter Vehicle Make"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Model
                                </label>
                                <input
                                    type="text"
                                    name="model"
                                    value={formData.model}
                                    onChange={handleInputChange}
                                    placeholder="Enter Model"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    <Calendar className="w-4 h-4 inline mr-1" />
                                    Year
                                </label>
                                <input
                                    type="number"
                                    name="year"
                                    value={formData.year}
                                    onChange={handleInputChange}
                                    placeholder="Enter Year"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                                />
                            </div>

                            <div className="md:col-span-2">
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    <FileText className="w-4 h-4 inline mr-1" />
                                    VIN
                                </label>
                                <input
                                    type="text"
                                    name="vin"
                                    value={formData.vin}
                                    onChange={handleInputChange}
                                    placeholder="Enter VIN"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Fuel and Configuration Section */}
                    <div className="bg-white rounded-xl shadow-lg p-6">
                        <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                            <Fuel className="w-5 h-5 mr-2 text-blue-500" />
                            Fuel & Configuration
                        </h3>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Fuel</label>
                                <select
                                    name="fuel"
                                    value={formData.fuel}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                                >
                                    <option value="">Select</option>
                                    <option value="diesel">Diesel</option>
                                    <option value="petrol">Petrol</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">ELD</label>
                                <select
                                    name="eld"
                                    value={formData.eld}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50"
                                >
                                    <option value="Heavy Duty">Heavy Duty</option>
                                    <option value="Light Duty">Light Duty</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Select Device</label>

                                <select name="device_id" value={formData.device_id} onChange={handleInputChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200">
                                    <option value="">Select a device</option>
                                    {devices.map((device) => (
                                        <option key={device.id} value={device.id}>
                                            {device.serial_number} ({device.device_model})
                                        </option>
                                    ))}
                                </select>

                            </div>

                        </div>
                    </div>

                    {/* License Plate Section */}
                    <div className="bg-white rounded-xl shadow-lg p-6">
                        <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                            <MapPin className="w-5 h-5 mr-2 text-blue-500" />
                            License Plate
                        </h3>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">License Plate Type</label>
                                <select
                                    name="licensePlate"
                                    value={formData.licensePlate}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                                >
                                    <option value="">Select</option>
                                    <option value="Alabama">Alabama</option>
                                    <option value="Alaska">Alaska</option>
                                    <option value="Arizona">Arizona</option>
                                    <option value="Arkansas">Arkansas</option>
                                    <option value="California">California</option>
                                    <option value="Colorado">Colorado</option>
                                    <option value="Connecticut">Connecticut</option>
                                    <option value="Delaware">Delaware</option>
                                    <option value="Florida">Florida</option>
                                    <option value="Georgia">Georgia</option>
                                    <option value="Hawaii">Hawaii</option>
                                    <option value="Idaho">Idaho</option>
                                    <option value="Illinois">Illinois</option>
                                    <option value="Indiana">Indiana</option>
                                    <option value="Iowa">Iowa</option>
                                    <option value="Kansas">Kansas</option>
                                    <option value="Kentucky">Kentucky</option>
                                    <option value="Louisiana">Louisiana</option>
                                    <option value="Maine">Maine</option>
                                    <option value="Maryland">Maryland</option>
                                    <option value="Massachusetts">Massachusetts</option>
                                    <option value="Michigan">Michigan</option>
                                    <option value="Minnesota">Minnesota</option>
                                    <option value="Mississippi">Mississippi</option>
                                    <option value="Missouri">Missouri</option>
                                    <option value="Montana">Montana</option>
                                    <option value="Nebraska">Nebraska</option>
                                    <option value="Nevada">Nevada</option>
                                    <option value="New Hampshire">New Hampshire</option>
                                    <option value="New Jersey">New Jersey</option>
                                    <option value="New Mexico">New Mexico</option>
                                    <option value="New York">New York</option>
                                    <option value="North Carolina">North Carolina</option>
                                    <option value="North Dakota">North Dakota</option>
                                    <option value="Ohio">Ohio</option>
                                    <option value="Oklahoma">Oklahoma</option>
                                    <option value="Oregon">Oregon</option>
                                    <option value="Pennsylvania">Pennsylvania</option>
                                    <option value="Rhode Island">Rhode Island</option>
                                    <option value="South Carolina">South Carolina</option>
                                    <option value="South Dakota">South Dakota</option>
                                    <option value="Tennessee">Tennessee</option>
                                    <option value="Texas">Texas</option>
                                    <option value="Utah">Utah</option>
                                    <option value="Vermont">Vermont</option>
                                    <option value="Virginia">Virginia</option>
                                    <option value="Washington">Washington</option>
                                    <option value="West Virginia">West Virginia</option>
                                    <option value="Wisconsin">Wisconsin</option>
                                    <option value="Wyoming">Wyoming</option>

                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Country</label>
                                <select
                                    name="country"
                                    value={formData.country}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-amber-50"
                                >
                                    <option value="United States">United States</option>
                                    <option value="Canada">Canada</option>
                                    <option value="Mexico">Mexico</option>
                                </select>
                            </div>

                            <div className="md:col-span-2">
                                <label className="block text-sm font-medium text-gray-700 mb-2">Plate Number</label>
                                <input
                                    type="text"
                                    name="plateNumber"
                                    value={formData.plateNumber}
                                    onChange={handleInputChange}
                                    placeholder="Enter Plate Number"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Offset and Harsh Driving Settings */}
                    <div className="bg-white rounded-xl shadow-lg p-6">
                        <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                            <Settings className="w-5 h-5 mr-2 text-blue-500" />
                            Advanced Settings
                        </h3>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Engine Hours Offset</label>
                                <input
                                    type="number"
                                    name="engineHoursOffset"
                                    value={formData.engineHoursOffset}
                                    onChange={handleInputChange}
                                    placeholder="Enter offset value"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Offset Odometer</label>
                                <input
                                    type="number"
                                    name="offsetOdometer"
                                    value={formData.offsetOdometer}
                                    onChange={handleInputChange}
                                    placeholder="Enter odometer offset"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Harsh Breaking</label>
                                <input
                                    type="text"
                                    name="harshBreaking"
                                    value={formData.harshBreaking}
                                    onChange={handleInputChange}
                                    placeholder="0-8192. 0 means no notification"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50"

                                />
                                <p className="text-xs text-gray-500 mt-1">0 means no notification</p>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Harsh Acceleration</label>
                                <input
                                    type="text"
                                    name="harshAcceleration"
                                    value={formData.harshAcceleration}
                                    onChange={handleInputChange}
                                    placeholder="0-8192. 0 means no notification"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50"

                                />
                                <p className="text-xs text-gray-500 mt-1">0 means no notification</p>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Harsh Turn</label>
                                <input
                                    type="text"
                                    name="harshTurn"
                                    value={formData.harshTurn}
                                    onChange={handleInputChange}
                                    placeholder="0-8192. 0 means no notification"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50"

                                />
                                <p className="text-xs text-gray-500 mt-1">0 means no notification</p>
                            </div>
                        </div>
                    </div>

                    {/* Toggle Settings */}
                    <div className="bg-white rounded-xl shadow-lg p-6">
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">Status Settings</h3>

                        <div className="space-y-4">
                            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                                <div>
                                    <label className="text-sm font-medium text-gray-700">VIN Match</label>
                                    <p className="text-xs text-gray-500">Enable VIN matching verification</p>
                                </div>
                                <label className="relative inline-flex items-center cursor-pointer">
                                    <input
                                        type="checkbox"
                                        name="vinMatch"
                                        checked={formData.vinMatch}
                                        onChange={handleInputChange}
                                        className="sr-only peer"
                                    />
                                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                                </label>
                            </div>

                            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                                <div>
                                    <label className="text-sm font-medium text-gray-700">IS Active</label>
                                    <p className="text-xs text-gray-500">Set vehicle as active in the system</p>
                                </div>
                                <label className="relative inline-flex items-center cursor-pointer">
                                    <input
                                        type="checkbox"
                                        name="isActive"
                                        checked={formData.isActive}
                                        onChange={handleInputChange}
                                        className="sr-only peer"
                                    />
                                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                                </label>
                            </div>
                        </div>
                    </div>

                    {/* Submit Button */}
                    <div className="bg-white rounded-xl shadow-lg p-6">
                        <button
                            type="submit"
                            className="w-full md:w-auto px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-200 focus:ring-4 focus:ring-blue-300 focus:outline-none shadow-lg hover:shadow-xl transform hover:scale-105 transition-transform"
                        >
                            Submit Vehicle Information
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default VehicleForm;