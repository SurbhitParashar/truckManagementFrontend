import React, { useState } from 'react';
import { ChevronDown, MapPin, Clock, Globe, Building, Hash, Save, ArrowLeft } from 'lucide-react';
import Navbar from '../../../../modules/Navbar';
import Sidebar from '../../../../modules/Sidebar';
import axios from 'axios';
import AddressAutocomplete from '../../../../modules/AddressAutocomplete';


const AddTerminalForm = () => {
    const [formData, setFormData] = useState({
        timezone: '',
        city: '',
        state: '',
        country: 'United States',
        address: '',
        addressPin: ''
    });

    const [errors, setErrors] = useState({});

    const timezones = [
        { value: 'PST', label: 'Pacific Standard Time (PST)' },
        { value: 'MST', label: 'Mountain Standard Time (MST)' },
        { value: 'CST', label: 'Central Standard Time (CST)' },
        { value: 'EST', label: 'Eastern Standard Time (EST)' },
    ];

    const states = [
        'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut',
        'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa',
        'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan',
        'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire',
        'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio',
        'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota',
        'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia',
        'Wisconsin', 'Wyoming'
    ];

    const countries = [
        'United States'
    ];

    const handleInputChange = (name, value) => {
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));

        // Clear error when user starts typing
        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }
    };

    const validateForm = () => {
        const newErrors = {};

        if (!formData.timezone) newErrors.timezone = 'Timezone is required';
        if (!formData.city.trim()) newErrors.city = 'City is required';
        if (!formData.state) newErrors.state = 'State is required';
        if (!formData.country) newErrors.country = 'Country is required';
        if (!formData.address.trim()) {
            newErrors.address = 'Address is required';
        } else if (!isValidAddressSelected) {
            newErrors.address = 'Please select a valid address from suggestions';
        }
        if (!formData.addressPin.trim()) newErrors.addressPin = 'Address PIN is required';
        else if (!/^\d{5,6}$/.test(formData.addressPin)) newErrors.addressPin = 'PIN must be 5-6 digits';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };


    const handleSubmit = async (e) => {
        e.preventDefault();

        if (validateForm()) {
            try {
                const response = await axios.post('http://localhost:5000/api/terminal/addTerminal', formData, {
                    withCredentials: true // Ensures cookies (like JWT) are sent
                });

                alert(response.data.message || 'Terminal added successfully!');
                console.log('Submitted data:', response.data);
            } catch (error) {
                console.error("Error submitting terminal:", error);
                alert('Failed to add terminal.');
            }
        }
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
                <div className="flex-1 ml-60 mt-15 p-5 overflow-auto">
                    {/* Breadcrumb */}
                    <div className="flex items-center px-5 py-4 text-sm">
                        <a href="#" className="text-blue-600 font-medium no-underline hover:underline">Home</a>
                        <span className="mx-2 text-gray-500">/</span>
                        <span>Manage Company</span>
                    </div>


                    {/* Form Content */}
                    <form onSubmit={handleSubmit} className="p-6 space-y-6">
                        {/* Timezone */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                <Clock className="inline w-4 h-4 mr-2" />
                                Time Zone *
                            </label>
                            <div className="relative">
                                <select
                                    value={formData.timezone}
                                    onChange={(e) => handleInputChange('timezone', e.target.value)}
                                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white ${errors.timezone ? 'border-red-500' : 'border-gray-300'
                                        }`}
                                >
                                    <option value="">Choose a timezone</option>
                                    {timezones.map(tz => (
                                        <option key={tz.value} value={tz.value}>{tz.label}</option>
                                    ))}
                                </select>
                                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
                            </div>
                            {errors.timezone && <p className="mt-1 text-sm text-red-600">{errors.timezone}</p>}
                        </div>

                        {/* City */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                <Building className="inline w-4 h-4 mr-2" />
                                City *
                            </label>
                            <input
                                type="text"
                                value={formData.city}
                                onChange={(e) => handleInputChange('city', e.target.value)}
                                placeholder="Enter city name"
                                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${errors.city ? 'border-red-500' : 'border-gray-300'
                                    }`}
                            />
                            {errors.city && <p className="mt-1 text-sm text-red-600">{errors.city}</p>}
                        </div>

                        {/* State */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                <MapPin className="inline w-4 h-4 mr-2" />
                                Select State *
                            </label>
                            <div className="relative">
                                <select
                                    value={formData.state}
                                    onChange={(e) => handleInputChange('state', e.target.value)}
                                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white ${errors.state ? 'border-red-500' : 'border-gray-300'
                                        }`}
                                >
                                    <option value="">Select a state</option>
                                    {states.map(state => (
                                        <option key={state} value={state}>{state}</option>
                                    ))}
                                </select>
                                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
                            </div>
                            {errors.state && <p className="mt-1 text-sm text-red-600">{errors.state}</p>}
                        </div>

                        {/* Country */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                <Globe className="inline w-4 h-4 mr-2" />
                                Country *
                            </label>
                            <div className="relative">
                                <select
                                    value={formData.country}
                                    onChange={(e) => handleInputChange('country', e.target.value)}
                                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white ${errors.country ? 'border-red-500' : 'border-gray-300'
                                        }`}
                                >
                                    {countries.map(country => (
                                        <option key={country} value={country}>{country}</option>
                                    ))}
                                </select>
                                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
                            </div>
                            {errors.country && <p className="mt-1 text-sm text-red-600">{errors.country}</p>}
                        </div>

                        {/* Address */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                <MapPin className="inline w-4 h-4 mr-2" />
                                Address *
                            </label>
                            <AddressAutocomplete
                                formData={formData}
                                setFormData={setFormData}
                                errors={errors}
                                setErrors={setErrors}
                            />
                        </div>

                        {/* Address PIN */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                <Hash className="inline w-4 h-4 mr-2" />
                                Address PIN *
                            </label>
                            <input
                                type="text"
                                value={formData.addressPin}
                                onChange={(e) => handleInputChange('addressPin', e.target.value)}
                                placeholder="Enter PIN code (5-6 digits)"
                                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${errors.addressPin ? 'border-red-500' : 'border-gray-300'
                                    }`}
                                maxLength={6}
                            />
                            {errors.addressPin && <p className="mt-1 text-sm text-red-600">{errors.addressPin}</p>}
                        </div>

                        {/* Form Actions */}
                        <div className="flex items-center justify-between pt-6 border-t border-gray-200">
                            <button
                                type="button"
                                className="flex items-center space-x-2 px-4 py-2 text-gray-600 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
                            >

                            </button>

                            <div className="flex items-center space-x-3">

                                <button
                                    type="submit"
                                    className="flex items-center space-x-2 px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
                                >
                                    <Save className="w-4 h-4" />
                                    <span>Submit</span>
                                </button>
                            </div>
                        </div>
                    </form>
                </div>


            </div>
        </div>
    );
};

export default AddTerminalForm;