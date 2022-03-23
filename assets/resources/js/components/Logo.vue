<template>
    <h1 class="font-normal text-3xl text-gray-darkest leading-none mb-8">
        Full Logo
    </h1>

    <div class="mb-10">
        <picture
            style="height: 382px;"
            class="shadow rounded-lg flex items-center justify-center mb-6"
        >
            <img src="/images/logo.svg" alt="logo">
        </picture>

        <div class="flex justify-between items-center">
            <p>Original Logo on <strong>white</strong> background</p>

            <a
                href="/images/logo.svg"
                class="border border-grey-light px-8 py-2 rounded-full text-black font-bold text-xs"
            >
                logo.svg
            </a>
        </div>
    </div>

    <div class="mb-10">
        <picture
            style="height: 382px;"
            class="shadow rounded-lg flex items-center justify-center mb-6 bg-blue"
        >
            <img src="/images/negative-logo.svg" alt="negative logo">
        </picture>

        <div class="flex justify-between items-center">
            <p>Negative Logo on <strong>white</strong> background</p>

            <a
                href="/images/negative-logo.svg"
                class="border border-grey-light px-8 py-2 rounded-full text-black font-bold text-xs"
            >
                logo.svg
            </a>
        </div>
    </div>
</template>

<script>
export default {};
</script>