import axios from "axios";

const API = import.meta.env.VITE_REACT_APP_API;

export const fetchPackPrices = async (vendorId) => {
  try {
    const { data } = await axios.get(`${API}/api/pack-prices/${vendorId}`);
    return data;
  } catch (error) {
    return null;
  }
};

export const fetchMultiplePackPrices = async (vendorIds) => {
  try {
    const promises = vendorIds.map((id) => fetchPackPrices(id));
    const results = await Promise.all(promises);
    return results;
  } catch (error) {
    return [];
  }
};
