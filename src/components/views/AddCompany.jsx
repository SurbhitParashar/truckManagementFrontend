import React, { useState } from 'react';
import { ChevronDown, Home, RotateCcw, Mail } from 'lucide-react';
import Head from 'next/head';

const AddCompany = () => {
  // 1. Initialize form state
  const [form, setForm] = useState({
    // General Settings
    companyname: '',
    dotNumber: '',
    timeZone: '',
    periodStart: '00:00',
    address: '',
    city: '',
    state: '',
    country: '',
    zipCode: '',

    // Terminal 1
    exemptDriver: false,
    terminalTimeZone: '',
    terminalAddress: '',
    terminalCity: '',
    terminalState: '',
    terminalCountry: '',
    terminalZipCode: '',

    // Compliance Settings
    complianceMode: '',
    hosRules: '',
    cargoType: '',
    restartOption: '',
    restBreakRequirement: '',
    shortHaulException: false,
    allowPersonalUse: true,
    allowYardMoves: true,
    allowSplitSleep: false,

    // Plan Features
    allowTracking: false,
    allowGpsTracking: false,
    allowIfta: false,

    Status: 'Active',
  });

  // 2. Generic onChange for inputs, selects, checkboxes
  const handleChange = (e) => {
    const { name, type, value, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  // 3. Submit handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('http://localhost:5000/api/company/addCompany', {
        method: 'POST',
        credentials: 'include',               // send JWT cookie
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || 'Submission failed');
      alert('Company created successfully!');
    } catch (err) {
      console.error(err);
      alert(`Error: ${err.message}`);
    }
  };

   // Export to PDF function
  const exportToPDF = () => {
    const doc = new jsPDF();
    
    // Add title
    doc.setFontSize(18);
    doc.text('Company Information', 105, 15, { align: 'center' });
    
    // General Settings
    doc.setFontSize(14);
    doc.text('General Settings', 14, 25);
    doc.setFontSize(12);
    doc.text(`Company Name: ${form.companyname}`, 14, 35);
    doc.text(`DOT Number: ${form.dotNumber}`, 14, 45);
    doc.text(`Time Zone: ${form.timeZone}`, 14, 55);
    doc.text(`24H Period Start: ${form.periodStart}`, 14, 65);
    doc.text(`Address: ${form.address}, ${form.city}, ${form.state}, ${form.country}, ${form.zipCode}`, 14, 75);
    
    // Terminal Information
    doc.setFontSize(14);
    doc.text('Terminal Information', 14, 90);
    doc.setFontSize(12);
    doc.text(`Exempt Driver: ${form.exemptDriver ? 'Yes' : 'No'}`, 14, 100);
    doc.text(`Terminal Address: ${form.terminalAddress}, ${form.terminalCity}, ${form.terminalState}, ${form.terminalCountry}, ${form.terminalZipCode}`, 14, 110);
    
    // Compliance Settings
    doc.setFontSize(14);
    doc.text('Compliance Settings', 14, 125);
    doc.setFontSize(12);
    doc.text(`Compliance Mode: ${form.complianceMode}`, 14, 135);
    doc.text(`HOS Rules: ${form.hosRules}`, 14, 145);
    doc.text(`Cargo Type: ${form.cargoType}`, 14, 155);
    doc.text(`Restart Option: ${form.restartOption}`, 14, 165);
    doc.text(`Rest Break Requirement: ${form.restBreakRequirement}`, 14, 175);
    doc.text(`Short-Haul Exception: ${form.shortHaulException ? 'Yes' : 'No'}`, 14, 185);
    
    // Plan Features
    doc.setFontSize(14);
    doc.text('Plan Features', 14, 200);
    doc.setFontSize(12);
    doc.text(`Allow Tracking: ${form.allowTracking ? 'Yes' : 'No'}`, 14, 210);
    doc.text(`Allow GPS Tracking: ${form.allowGpsTracking ? 'Yes' : 'No'}`, 14, 220);
    doc.text(`Allow IFTA: ${form.allowIfta ? 'Yes' : 'No'}`, 14, 230);
    
    // Save the PDF
    doc.save('Company_Information.pdf');
  };

  // Export to Excel function
  const exportToExcel = () => {
    // Prepare data for Excel
    const excelData = [
      ['Section', 'Field', 'Value'],
      ['General Settings', 'Company Name', form.companyname],
      ['General Settings', 'DOT Number', form.dotNumber],
      ['General Settings', 'Time Zone', form.timeZone],
      ['General Settings', '24H Period Start', form.periodStart],
      ['General Settings', 'Address', `${form.address}, ${form.city}, ${form.state}, ${form.country}, ${form.zipCode}`],
      ['Terminal Information', 'Exempt Driver', form.exemptDriver ? 'Yes' : 'No'],
      ['Terminal Information', 'Terminal Address', `${form.terminalAddress}, ${form.terminalCity}, ${form.terminalState}, ${form.terminalCountry}, ${form.terminalZipCode}`],
      ['Compliance Settings', 'Compliance Mode', form.complianceMode],
      ['Compliance Settings', 'HOS Rules', form.hosRules],
      ['Compliance Settings', 'Cargo Type', form.cargoType],
      ['Compliance Settings', 'Restart Option', form.restartOption],
      ['Compliance Settings', 'Rest Break Requirement', form.restBreakRequirement],
      ['Compliance Settings', 'Short-Haul Exception', form.shortHaulException ? 'Yes' : 'No'],
      ['Plan Features', 'Allow Tracking', form.allowTracking ? 'Yes' : 'No'],
      ['Plan Features', 'Allow GPS Tracking', form.allowGpsTracking ? 'Yes' : 'No'],
      ['Plan Features', 'Allow IFTA', form.allowIfta ? 'Yes' : 'No'],
    ];

    // Create workbook and worksheet
    const wb = XLSX.utils.book_new();
    const ws = XLSX.utils.aoa_to_sheet(excelData);
    
    // Add worksheet to workbook
    XLSX.utils.book_append_sheet(wb, ws, 'Company Information');
    
    // Export to Excel file
    XLSX.writeFile(wb, 'Company_Information.xlsx');
  };


  return (
    <>
      <Head>
        <title>Company Form</title>
        <script src="https://cdn.tailwindcss.com"></script>
      </Head>

      <div className="min-h-screen bg-blue-50">
        {/* Header Navigation */}
        <header className="bg-gradient-to-r from-blue-700 to-blue-800 text-white p-4 flex justify-between items-center shadow-md">
          <div className="flex space-x-6">
            <a href="/ManageCompany" className="hover:text-blue-300 flex items-center">
              <Home className="h-5 w-5 mr-1" /> Home
            </a>
            <a href="#" className="hover:text-blue-300 flex items-center">
              <RotateCcw className="h-5 w-5 mr-1" /> Refresh
            </a>
          </div>
          <div className="flex items-center space-x-2">
            <Mail className="h-5 w-5" />
            <span>jobanpreet@xpertlogs</span>
            <ChevronDown className="h-4 w-4" />
          </div>
        </header>

        {/* Main Content */}
        <main className="container mx-auto px-4 py-6">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-semibold text-blue-900">Company Form</h1>
            <div className="text-blue-600 flex items-center">
              <a href="#" className="hover:underline">Home</a>
              <span className="mx-2">/</span>
              <span className="text-blue-800 font-medium">Company Form</span>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* General Settings */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden border border-blue-200">
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-4">
                <h2 className="font-medium text-lg text-white">General Settings</h2>
              </div>
              <div className="p-6 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name */}
                  <div>
                    <label className="block mb-2 font-medium text-blue-800">Name</label>
                    <input
                      name="companyname"
                      value={form.name}
                      onChange={handleChange}
                      type="text"
                      placeholder="Enter Company Name"
                      className="w-full p-3 border border-blue-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-blue-50 placeholder-blue-400 text-blue-900"
                    />
                  </div>

                  {/* DOT Number */}
                  <div>
                    <label className="block mb-2 font-medium text-blue-800">DOT Number</label>
                    <input
                      name="dotNumber"
                      value={form.dotNumber}
                      onChange={handleChange}
                      type="text"
                      placeholder="Enter DOT Number"
                      className="w-full p-3 border border-blue-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-blue-50 placeholder-blue-400 text-blue-900"
                    />
                  </div>

                  {/* Time Zone */}
                  <div>
                    <label className="block mb-2 font-medium text-blue-800">Time Zone</label>
                    <div className="relative">
                      <select
                        name="timeZone"
                        value={form.timeZone}
                        onChange={handleChange}
                        className="w-full p-3 border border-blue-300 rounded-lg bg-blue-50 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none pl-3 pr-8"
                      >
                        <option value="">Choose</option>
                        <option value="CST">CST</option>
                        <option value="EST">EST</option>
                        <option value="MST">MST</option>
                        <option value="PST">PST</option>
                      </select>
                      <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                        <ChevronDown className="h-5 w-5 text-blue-500" />
                      </div>
                    </div>
                  </div>

                  {/* 24H Period Starting Time */}
                  <div>
                    <label className="block mb-2 font-medium text-blue-800">24H Period Starting Time</label>
                    <input
                      name="periodStart"
                      value={form.periodStart}
                      onChange={handleChange}
                      type="time"
                      className="w-full p-3 border border-blue-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-blue-50 text-blue-900"
                    />
                  </div>
                </div>

                {/* Address */}
                <div className="space-y-4">
                  <label className="block mb-2 font-medium text-blue-800">Address</label>
                  <input
                    name="address"
                    value={form.address}
                    onChange={handleChange}
                    type="text"
                    placeholder="Address"
                    className="w-full p-3 border border-blue-300 rounded-lg bg-blue-50 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-blue-400 text-blue-900"
                  />

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    <input
                      name="city"
                      value={form.city}
                      onChange={handleChange}
                      type="text"
                      placeholder="City"
                      className="w-full p-3 border border-blue-300 rounded-lg bg-blue-50 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-blue-900"
                    />
                    <input
                      name="state"
                      value={form.state}
                      onChange={handleChange}
                      type="text"
                      placeholder="State"
                      className="w-full p-3 border border-blue-300 rounded-lg bg-blue-50 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-blue-900"
                    />
                    <input
                      name="country"
                      value={form.country}
                      onChange={handleChange}
                      type="text"
                      placeholder="Country"
                      className="w-full p-3 border border-blue-300 rounded-lg bg-blue-50 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-blue-900"
                    />
                    <input
                      name="zipCode"
                      value={form.zipCode}
                      onChange={handleChange}
                      type="text"
                      placeholder="ZIP Code"
                      className="w-full p-3 border border-blue-300 rounded-lg bg-blue-50 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-blue-900"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Terminal Information */}
            <div className="bg-white rounded-xl shadow-md border border-blue-200">
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-4">
                <h2 className="font-medium text-lg text-white">Terminal 1</h2>
              </div>
              <div className="p-6 space-y-6">
                <label className="inline-flex items-center">
                  <input
                    name="exemptDriver"
                    checked={form.exemptDriver}
                    onChange={handleChange}
                    type="checkbox"
                    className="form-checkbox h-5 w-5 text-blue-600 rounded border-blue-300 focus:ring-blue-500"
                  />
                  <span className="ml-2 text-blue-800">Exempt Driver</span>
                </label>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block mb-2 font-medium text-blue-800">Time Zone</label>
                    <div className="relative">
                      <select
                        name="terminalTimeZone"
                        value={form.terminalTimeZone}
                        onChange={handleChange}
                        className="w-full p-3 border border-blue-300 rounded-lg bg-blue-50 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none pl-3 pr-8"
                      >
                        <option value="">Choose</option>
                        <option value="CST">CST</option>
                        <option value="EST">EST</option>
                        <option value="MST">MST</option>
                        <option value="PST">PST</option>
                      </select>
                      <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                        <ChevronDown className="h-5 w-5 text-blue-500" />
                      </div>
                    </div>
                  </div>

                  <input
                    name="terminalAddress"
                    value={form.terminalAddress}
                    onChange={handleChange}
                    type="text"
                    placeholder="Terminal Address"
                    className="w-full p-3 border border-blue-300 rounded-lg bg-blue-50 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-blue-900"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <input
                    name="terminalCity"
                    value={form.terminalCity}
                    onChange={handleChange}
                    type="text"
                    placeholder="City"
                    className="w-full p-3 border border-blue-300 rounded-lg bg-blue-50 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-blue-900"
                  />
                  <input
                    name="terminalState"
                    value={form.terminalState}
                    onChange={handleChange}
                    type="text"
                    placeholder="State"
                    className="w-full p-3 border border-blue-300 rounded-lg bg-blue-50 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-blue-900"
                  />
                  <input
                    name="terminalCountry"
                    value={form.terminalCountry}
                    onChange={handleChange}
                    type="text"
                    placeholder="Country"
                    className="w-full p-3 border border-blue-300 rounded-lg bg-blue-50 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-blue-900"
                  />
                  <input
                    name="terminalZipCode"
                    value={form.terminalZipCode}
                    onChange={handleChange}
                    type="text"
                    placeholder="ZIP Code"
                    className="w-full p-3 border border-blue-300 rounded-lg bg-blue-50 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-blue-900"
                  />
                </div>
              </div>
            </div>

            {/* Compliance Settings */}
            <div className="bg-white rounded-xl shadow-md border border-blue-200">
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-4">
                <h2 className="font-medium text-lg text-white">Compliance Settings</h2>
              </div>
              <div className="p-6 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block mb-2 font-medium text-blue-800">Compliance Mode</label>
                    <select
                      name="complianceMode"
                      value={form.complianceMode}
                      onChange={handleChange}
                      className="w-full p-3 border border-blue-300 rounded-lg bg-blue-50 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    >
                      <option value="">Choose</option>
                      <option value="ELD">ELD</option>
                    </select>
                  </div>

                  <div>
                    <label className="block mb-2 font-medium text-blue-800">HOS Rules</label>
                    <select
                      name="hosRules"
                      value={form.hosRules}
                      onChange={handleChange}
                      className="w-full p-3 border border-blue-300 rounded-lg bg-blue-50 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    >
                      <option value="">Choose</option>
                      <option value="USA 70hr/8days">USA 70hr/8days</option>
                      <option value="USA 60hr/7days">USA 60hr/7days</option>
                      <option value="California 80hr/8days">California 80hr/8days</option>
                    </select>
                  </div>

                  <div>
                    <label className="block mb-2 font-medium text-blue-800">Cargo Type</label>
                    <select
                      name="cargoType"
                      value={form.cargoType}
                      onChange={handleChange}
                      className="w-full p-3 border border-blue-300 rounded-lg bg-blue-50 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    >
                      <option value="">Choose</option>
                      <option value="Property">Property</option>
                      <option value="Passenger">Passenger</option>
                      <option value="Oil & Gas">Oil & Gas</option>
                    </select>
                  </div>

                  <div>
                    <label className="block mb-2 font-medium text-blue-800">Restart</label>
                    <select
                      name="restartOption"
                      value={form.restartOption}
                      onChange={handleChange}
                      className="w-full p-3 border border-blue-300 rounded-lg bg-blue-50 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    >
                      <option value="">Choose</option>
                      <option value="34-Hour">34-Hour</option>
                      <option value="24-Hour">24-Hour</option>
                      <option value="None">None</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block mb-2 font-medium text-blue-800">Rest Break</label>
                    <select
                      name="restBreakRequirement"
                      value={form.restBreakRequirement}
                      onChange={handleChange}
                      className="w-full p-3 border border-blue-300 rounded-lg bg-blue-50 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    >
                      <option value="">Choose</option>
                      <option value="None">No Rest Break Required</option>
                      <option value="30min">30 Minute Rest Break Required</option>
                    </select>
                  </div>

                  <div className="space-y-3">
                    <label className="inline-flex items-center">
                      <input
                        name="shortHaulException"
                        checked={form.shortHaulException}
                        onChange={handleChange}
                        type="checkbox"
                        className="form-checkbox h-5 w-5 text-blue-600 rounded border-blue-300 focus:ring-blue-500"
                      />
                      <span className="ml-2 text-blue-800">Short-Haul Exception</span>
                    </label>
                    <label className="inline-flex items-center">
                      <input
                        name="allowPersonalUse"
                        checked={form.allowPersonalUse}
                        onChange={handleChange}
                        type="checkbox"
                        className="form-checkbox h-5 w-5 text-blue-600 rounded border-blue-300 focus:ring-blue-500"
                      />
                      <span className="ml-2 text-blue-800">Allow Personal Use</span>
                    </label>
                    <label className="inline-flex items-center">
                      <input
                        name="allowYardMoves"
                        checked={form.allowYardMoves}
                        onChange={handleChange}
                        type="checkbox"
                        className="form-checkbox h-5 w-5 text-blue-600 rounded border-blue-300 focus:ring-blue-500"
                      />
                      <span className="ml-2 text-blue-800">Allow Yard Moves</span>
                    </label>
                    <label className="inline-flex items-center">
                      <input
                        name="allowSplitSleep"
                        checked={form.allowSplitSleep}
                        onChange={handleChange}
                        type="checkbox"
                        className="form-checkbox h-5 w-5 text-blue-600 rounded border-blue-300 focus:ring-blue-500"
                      />
                      <span className="ml-2 text-blue-800">Allow Split Sleep</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>

            {/* Plan Features */}
            <div className="bg-white rounded-xl shadow-md border border-blue-200">
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-4">
                <h2 className="font-medium text-lg text-white">Plan Features</h2>
              </div>
              <div className="p-6 space-y-3">
                <label className="inline-flex items-center">
                  <input
                    name="allowTracking"
                    checked={form.allowTracking}
                    onChange={handleChange}
                    type="checkbox"
                    className="form-checkbox h-5 w-5 text-blue-600 rounded border-blue-300 focus:ring-blue-500"
                  />
                  <span className="ml-2 text-blue-800">Allow Tracking</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    name="allowGpsTracking"
                    checked={form.allowGpsTracking}
                    onChange={handleChange}
                    type="checkbox"
                    className="form-checkbox h-5 w-5 text-blue-600 rounded border-blue-300 focus:ring-blue-500"
                  />
                  <span className="ml-2 text-blue-800">Allow GPS Tracking</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    name="allowIfta"
                    checked={form.allowIfta}
                    onChange={handleChange}
                    type="checkbox"
                    className="form-checkbox h-5 w-5 text-blue-600 rounded border-blue-300 focus:ring-blue-500"
                  />
                  <span className="ml-2 text-blue-800">Allow IFTA</span>
                </label>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-medium py-3 px-6 rounded-lg shadow-md transition-colors"
            >
              Submit
            </button>
          </form>
        </main>
      </div>
    </>
  );
};

export default AddCompany;
