<!--Whole file is one component-->

<!--This is where the html goes -->
<template>
	<div id="app">
		<main>
			<div class="search-box">
				<input
					type="text"
					class="search-bar"
					placeholder="Search.."
					v-model="query"
					@keypress.enter="fetchData"
				/>
			</div>

			<!--Weather information goes here-->

			<div class="weather-wrap" v-if="typeof weatherData.main != 'undefined'">
				<div class="location-box">
					<div class="location">
						City: {{ weatherData.name }}, {{ weatherData.sys.country }}
					</div>
					<div class="date">Date: {{ dateBuilder() }}</div>
				</div>

				<div class="weather-box">
					<div class="temp">Temp: {{ weatherData.main.temp }}°C</div>
					<div class="weather">Weather: {{ weatherData.weather[0].main }}</div>
				</div>
			</div>
		</main>
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

	methods: {
		dateBuilder() {
			let d = new Date();
			let months = [
				"January",
				"February",
				"March",
				"April",
				"May",
				"June",
				"July",
				"August",
				"September",
				"October",
				"November",
				"December",
			];
			let days = [
				"Sunday",
				"Monday",
				"Tuesday",
				"Wednesday",
				"Thursday",
				"Friday",
				"Saturday",
			];

			let day = days[d.getDay()];
			let date = d.getDate();
			let month = months[d.getMonth()];
			let year = d.getFullYear();

			return `${day} ${date} ${month} ${year}`;
		},
	},
};
</script>

<!--Component spesific style under here-->
<style>
* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}

body {
	font-family: "montserrat", sans-serif;
}

#app {
	background-color: rgb(36, 117, 137);
	background-size: cover;
	background-position: bottom;
	transition: 0.4s;
}

#app.warm {
	background-color: rgb(142, 49, 49);
}

main {
	min-height: 100vh;
	padding: 25px;

	background-image: linear-gradient(
		to bottom,
		rgba(0, 0, 0, 0.25),
		rgba(0, 0, 0, 0.75)
	);
}

.search-box {
	width: 100%;
	margin-bottom: 30px;
	text-align: center;
}

.search-box .search-bar {
	display: block;
	width: 100%;
	padding: 15px;

	color: #313131;
	font-size: 20px;

	appearance: none;
	border: none;
	outline: none;
	background: none;

	box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.25);
	background-color: rgba(0, 250, 241, 0.5);
	border-radius: 16px 16px 16px 16px;
	transition: 0.4s;
}

.search-box .search-bar:focus {
	box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.25);
	background-color: rgba(255, 255, 255, 0.75);
	border-radius: 16px 0px 16px 0px;
}

.location-box .location {
	color: #fff;
	font-size: 32px;
	font-weight: 500;
	text-align: center;
	text-shadow: 1px 3px rgba(0, 0, 0, 0.25);
}

.location-box .date {
	color: #fff;
	font-size: 20px;
	font-weight: 300;
	font-style: italic;
	text-align: center;
}

.weather-box {
	text-align: center;
}

.weather-box .temp {
	display: inline-block;
	padding: 10px 25px;
	color: #fff;
	font-size: 50px;
	font-weight: 900;

	text-shadow: 3px 6px rgba(0, 0, 0, 0.25);
	background-color: rgba(255, 255, 255, 0.25);
	border-radius: 16px;
	margin: 30px 0px;

	box-shadow: 3px 6px rgba(0, 0, 0, 0.25);
}

.weather-box .weather {
	color: #fff;
	font-size: 48px;
	font-weight: 700;
	font-style: italic;
	text-shadow: 3px 6px rgba(0, 0, 0, 0.25);
}
</style>
