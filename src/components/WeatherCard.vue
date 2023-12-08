<!--Whole file is one component-->

<!--This is where the html goes -->
<template>
	<div class="searh-box">
		<input
			type="text"
			class="search-bar"
			placeholder="Search.."
			v-model="query"
			@keyup.Enter="fetchData"
		/>
	</div>
	{{}}

	<!--Weather information goes here-->

	<div class="weather-card">
		<div class="location-box">
			<div class="location">City: {{}}</div>
			<div class="date">Date: {{}}</div>
		</div>

		<div class="weather-box">
			<div class="temp">Temp: {{ weatherData.name }}</div>
			<div class="weather">Weather: {{}}</div>
		</div>
	</div>
</template>

<!--This is where the script logic and options goes-->
<script lang="ts">
import { ref } from "vue";
import { getWeatherData } from "@/services/weatherApiService";

export default {
	setup() {
		const query = ref("");
		const weatherData = ref<any>(null); // Ref means reactive reference

		const fetchData = async () => {
			try {
				weatherData.value = await getWeatherData(query.value);
			} catch (error) {
				console.error("Error in component: ", error);
			}
		};

		return { fetchData, query, weatherData };
	},
};
</script>

<!--Component spesific style under here-->
<style scoped>
/*Add styles to WeatherCard here */
</style>
