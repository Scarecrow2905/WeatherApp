<!--Whole file is one component-->

<!--This is where the html goes -->
<template>
	<div class="searh-box">
		<input
			type="text"
			class="search-bar"
			placeholder="Search.."
			v-model="query"
			@input="fetchData"
		/>
		{{ query }}
	</div>

	<!--Weather information goes here-->

	<div class="weather-card">
		<div class="location-box">
			<div class="location">City: {{ city }}</div>
			<div class="date">Date: {{ date }}</div>
		</div>

		<div class="weather-box">
			<div class="temp">Temp: {{ temp }}</div>
			<div class="weather">Weather: {{ weather }}</div>
		</div>
	</div>
</template>

<!--This is where the script logic and options goes-->
<script setup lang="ts">
import axios from "axios";
import { ref, onMounted } from "vue";

const query = ref("");
const city = ref("");
const date = ref("");
const temp = ref("");
const weather = ref("");

const apiUrl = "https://api.openweathermap.org/data/2.5/";
const apiKey = "a1edbad8839196798fba35acf6d06891";

const fetchData = async () => {
	try {
		// Check youtube for how the api request looked like
		const response = await axios.get(apiUrl, {
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

export { query, city, date, temp, weather };
</script>

<!--Component spesific style under here-->
<style scoped>
/*Add styles to WeatherCard here */
</style>
