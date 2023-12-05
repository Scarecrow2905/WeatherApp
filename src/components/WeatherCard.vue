<!--Whole file is one component-->

<!--This is where the html goes -->
<template>
    <div class="Weather-card">
        <!--Weather information goes here-->
        <div>Degrees: {{ Degrees }}°</div>
        <div>Description: {{ City }}</div>
    </div>
</template>


<!--This is where the script logic and options goes-->
<script setup lang="ts">
import axios from 'axios';

    defineProps<{
        Degrees?: number,
        City?: string,
        
    }>()
</script>


<!--Component spesific style under here-->
<style scoped>
/*Add styles to WeatherCard here */
</style>