<template>
    <div>
        <h1 class="font-normal text-3xl text-grey-darkest leading-none mb-8">
            Laracasts Stats
        </h1>

        <ul>
            <li><strong>Total series:</strong> {{ series }}</li>
            <li><strong>Total lessons:</strong> {{ lessons }}</li>
        </ul>

    </div>
</template>

<script setup>
import axios from "axios";
import { onMounted, ref } from "vue";

const series = ref(0);
const lessons = ref(0);

onMounted(() => {
    axios.get('http://test.com:8001/api/assets')
        .then(response => {
            let { data } = response;

            series.value = data.series;
            lessons.value = data.lessons;
        })
        .catch(console.log);
});

</script>