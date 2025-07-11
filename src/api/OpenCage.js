import axios from 'axios';

const OPENCAGE_API_KEY = import.meta.env.VITE_OPENCAGE_KEY; // or process.env.REACT_APP_...

export const fetchAddressSuggestions = async (query) => {
  const response = await axios.get('https://api.opencagedata.com/geocode/v1/json', {
    params: {
      q: query,
      key: OPENCAGE_API_KEY,
      countrycode: 'us',
      limit: 5,
    }
  });

  return response.data.results.map(item => item.formatted);
};
