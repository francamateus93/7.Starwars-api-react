import axios from "axios";

const apiStarWars = axios.create({ baseURL: "https://swapi.dev/api/" });

export default apiStarWars;
