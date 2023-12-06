<script setup lang="ts"></script>

<template>
	<header>
		<div id="app">
			<WeatherCard msg="Weather app works!" />
		</div>
	</header>
</template>

<script>
import WeatherCard from "./components/WeatherCard.vue";

export default {
	components: {
		WeatherCard,
	},
};
</script>

<style scoped>
header {
	/*Header styling goes here */
	line-height: 1.5;
}
</style>
