
import axios from 'axios';
const API_BASE_URL = 'https://busapi-l00q.onrender.com/api';
export async function getBusByStops(from, to) {
  const response = await fetch(`${API_BASE_URL}/bus/${from}/${to}`);
  if (!response.ok) {
    throw new Error('Error retrieving bus information');
  }
  return response.json();
}
export const createBus = async (busData) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/buses`, busData);
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  };
  
  export const getBus = async (busId) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/buses/${busId}`);
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  };
  // export async function listBuses() { 
  //   try {
  //     const response = await axios.get(`${API_BASE_URL}/buses`);
  //     return response.data;
  //   } catch (error) {
  //     throw new Error('Error retrieving list of buses');
  //   }
  // }
  export async function getBusStop(busStopId) {
    try {
      const response = await axios.get(`${API_BASE_URL}/busStops/${busStopId}`);
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  }
  
  export async function listBusStops() {
    try {
      const response = await axios.get(`${API_BASE_URL}/busStops`);
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  }
  export const getBusStopsByIds = async (stopIds) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/busStops`, {
        params: { ids: stopIds.join(',') },
      });
      return response.data;
    } catch (error) {
      throw new Error('Error retrieving bus stop details: ' + error.message);
    }
  };
  export async function listBuses() {
    try {
      const response = await fetch(`${API_BASE_URL}/buses`);
      if (!response.ok) {
        throw new Error('Error retrieving list of buses. Server returned ' + response.status);
      }
      return response.json();
    } catch (error) {
      throw new Error('Error retrieving list of buses: ' + error.message);
    }
  }
  export const updateBus = async (busId, updatedData) => {
    try {
      const response = await axios.put(`${API_BASE_URL}/buses/${busId}`, updatedData);
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  };
  
  export const deleteBus = async (busId) => {
    try {
      const response = await axios.delete(`${API_BASE_URL}/buses/${busId}`);
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  };
  export async function createBusStop(busStopData) {
    try {
      const response = await axios.post(`${API_BASE_URL}/busStops`, busStopData);
      return response.data;
    } catch (error) {
      throw new Error('Error creating bus stop');
    }
  }
  

  export async function updateBusStop(busStopId, busStopData) {
    try {
      const response = await axios.put(`${API_BASE_URL}/busStops/${busStopId}`, busStopData);
      return response.data;
    } catch (error) {
      throw new Error('Error updating bus stop');
    }
  }
  
  export async function deleteBusStop(busStopId) {
    try {
      const response = await axios.delete(`${API_BASE_URL}/busStops/${busStopId}`);
      return response.data;
    } catch (error) {
      throw new Error('Error deleting bus stop');
    }
  }
