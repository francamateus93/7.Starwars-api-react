import swapi from "./Swapi";

const fetchShipsDetails = async (id) => {
  try {
    const response = await swapi.get(`/starships/${id}`);
    return response.data;
  } catch (error) {
    console.log("Error: ", error);
    throw error;
  }
};

export default fetchShipsDetails;
