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
import { onMounted } from 'vue';

   const props = defineProps<{
        Degrees?: number,
        City?: string,
        
    }>();

    const fetchData = async () => {
        try {

            // Check youtube for how the api request looked like!!
            const response = await axios.get('')
            console.log(response.data) // Log for verification
        }
        catch (error){
            console.error("Error fetching weather data", error);   
        }
    };

    // Fetch data when the component is mounted
    onMounted(fetchData);


</script>


<!--Component spesific style under here-->
<style scoped>
/*Add styles to WeatherCard here */
</style>