<template>
    <div>
        <h1 class="font-normal text-3xl text-grey-darkest leading-none mb-8">
            Your Achievements
        </h1>

        <input
            type="text"
            placeholder="Your Laracasts API Token"
            v-model="token"
            @keyup.enter="fetchAchievements"
            class="border p-2 rounded w-full mb-8"
        >

        <p class="text-red italic text-sm" v-if="errorMessage" v-text="errorMessage"></p>

        <ul class="list-disc">
            <li
                v-for="achievement in achievements"
                v-text="achievement.name"
            ></li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            achievements: [],
            token: '1|F3EIlQRHTRjoNOqVpKN0tg4sQNIV72pHKKEBfdOL',
            errorMessage: ''
        };
    },

    methods: {
        fetchAchievements() {
            this.cleanAchievements();

            axios({
                method: 'get',
                url: 'http://test.com:8001/api/achievements',
                headers: { 'Authorization': `Bearer ${this.token}` }
            })
                .then(response => {
                    this.achievements = response.data
                })
                .catch(error => {
                    this.errorMessage = error.response.data.message;
                });
        },

        cleanAchievements() {
            this.achievements = [];
            this.errorMessage = null;
        }
    }
};
</script>