import axios from "axios";

const baseUrl = "https://api.openweathermap.org/data/2.5/";
const apiKey = "04dcb9cc082582578c0d9de47de18dc3";

export const getWeatherData = async (query: string) => {
	try {
		const response = await axios.get(baseUrl + "weather", {
			params: {
				q: query,
				appid: apiKey,
				units: "metric", // Needed the " ", used to be measured in Kelvin instead of Celcius
			},
		});
		return response.data;
	} catch (error) {
		console.error("Error fetching weather data", error);
		return [error];
	}
};
