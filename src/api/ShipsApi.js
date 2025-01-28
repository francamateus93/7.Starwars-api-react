import swapi from "./Swapi";

const fetchShips = async (page = 1) => {
  try {
    const response = await swapi.get(`/starships/?page=${page}`);
    return response.data.results;
  } catch (error) {
    console.log("Error: ", error);
    throw error;
  }
};

export default fetchShips;
