<!--Whole file is one component-->

<!--This is where the html goes -->
<template>
	<div class="searh-box">
		<input
			type="text"
			class="search-bar"
			placeholder="Search.."
			v-model="query"
			@keypress.enter="fetchData"
		/>
	</div>

	<!--Weather information goes here-->

	<div class="weather-card" v-if="typeof weatherData && weatherData.main">
		<div class="location-box">
			<div class="location">
				City: {{ weatherData.name }}, {{ weatherData.sys.country }}
			</div>
			<div class="date">Date: {{}}</div>
		</div>

		<div class="weather-box">
			<div class="temp">Temp: {{ weatherData.main.temp }}</div>
			<div class="weather">Weather: {{ weatherData.weather[0].main }}</div>
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
		const weatherData = ref<any>({}); // Ref means reactive reference

		const fetchData = async () => {
			try {
				weatherData.value = await getWeatherData(query.value);
				console.log("Running fetchData()..", weatherData.value);
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
