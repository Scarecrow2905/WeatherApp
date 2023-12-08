import axios from "axios";

const baseUrl = "https://api.openweathermap.org/data/2.5/";
const apiKey = "a1edbad8839196798fba35acf6d06891";

export const getWeatherData = async (query: string) => {
	try {
		const response = await axios.get(baseUrl + "weather", {
			params: {
				q: query,
				appid: apiKey,
			},
		});
		return response.data;
	} catch (error) {
		console.error("Error fetching weather data", error);
		return [error];
	}
};
