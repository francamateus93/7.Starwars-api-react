import apiStarWars from "./apiStarWars";

const apiStarships = async (page) => {
  try {
    const response = await apiStarWars.get(`/starships/?page=${page}`);
    return response.data;
  } catch (error) {
    console.log("Error: ", error);
    throw error;
  }
};

export default apiStarships;
