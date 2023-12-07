<!--Whole file is one component-->

<!--This is where the html goes -->
<template>
	<div class="searh-box">
		<input
			type="text"
			class="search-bar"
			placeholder="Search.."
			v-model="query"
			@keypress.Enter="fetchData"
		/>
	</div>
	{{ query }}

	<!--Weather information goes here-->

	<div class="weather-card" v-if="typeof query != 'undefined'">
		<div class="location-box">
			<div class="location">City: {{ weather.name }}</div>
			<div class="date">Date: {{ weather.date }}</div>
		</div>

		<div class="weather-box">
			<div class="temp">Temp: {{ weather.temp }}</div>
			<div class="weather">Weather: {{}}</div>
		</div>
	</div>
</template>

<!--This is where the script logic and options goes-->
<script lang="ts">
import axios from "axios";
import { ref, onMounted } from "vue";

export default {
	setup() {
		const query = ref("");
		const weather = ref<any>(null);

		const apiUrl = "https://api.openweathermap.org/data/2.5/";
		const apiKey = "a1edbad8839196798fba35acf6d06891";

		const fetchData = async () => {
			try {
				// Check youtube for how the api request looked like
				const response = await axios.get(apiUrl + "weather", {
					params: {
						q: query.value,
						appid: apiKey,
					},
				});
				console.log(response.data); // Log for verification
			} catch (error) {
				console.error("Error fetching weather data", error);
			}
		};

		// Fetch data when the component is mounted
		onMounted(fetchData);

		return { fetchData, apiKey, apiUrl, query, weather };
	},
};
</script>

<!--Component spesific style under here-->
<style scoped>
/*Add styles to WeatherCard here */
</style>
