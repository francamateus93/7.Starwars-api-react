import swapi from "./Swapi";

const fetchShipDetails = async (id) => {
  try {
    const response = await swapi.get(`/starships/${id}/`);
    return response.data;
  } catch (error) {
    console.error("Error: ", error);
    throw error;
  }
};

export default fetchShipDetails;
