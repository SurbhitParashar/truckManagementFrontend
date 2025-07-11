import React, { useState } from 'react';
import { fetchAddressSuggestions } from '../../api/OpenCage';
import debounce from 'lodash.debounce';

const AddressAutocomplete = ({ formData, setFormData, errors, setErrors }) => {
  const [suggestions, setSuggestions] = useState([]);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
const [isValidAddressSelected, setIsValidAddressSelected] = useState(false);


  const handleChange = (e) => {
    const value = e.target.value;
    setFormData(prev => ({ ...prev, address: value }));

    if (value.length > 3) {
      debouncedFetch(value);
    } else {
      setSuggestions([]);
      setIsDropdownVisible(false);
    }
    
    if (errors.address) {
        setErrors(prev => ({ ...prev, address: '' }));
    }
    setIsValidAddressSelected(false);
  };

  const debouncedFetch = debounce(async (query) => {
    try {
      const suggestions = await fetchAddressSuggestions(query);
      setSuggestions(suggestions);
      setIsDropdownVisible(true);
    } catch (err) {
      console.error('Autocomplete error:', err);
    }
  }, 400);

  const handleSelect = (suggestion) => {
    setFormData(prev => ({ ...prev, address: suggestion }));
    setIsDropdownVisible(false);
    setSuggestions([]);
    setIsValidAddressSelected(true);
  };

  return (
    <div className="relative">
      <input
        type="text"
        value={formData.address}
        onChange={handleChange}
        placeholder="Start typing address..."
        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${errors.address ? 'border-red-500' : 'border-gray-300'}`}
      />
      {errors.address && <p className="text-sm text-red-600 mt-1">{errors.address}</p>}
      {isDropdownVisible && suggestions.length > 0 && (
        <ul className="absolute z-10 w-full bg-white border border-gray-200 rounded shadow mt-1 max-h-40 overflow-y-auto">
          {suggestions.map((s, idx) => (
            <li
              key={idx}
              onClick={() => handleSelect(s)}
              className="px-4 py-2 cursor-pointer hover:bg-blue-100"
            >
              {s}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AddressAutocomplete;
