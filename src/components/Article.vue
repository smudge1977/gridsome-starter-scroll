<template>
    <aside>
        <div :id="encodeURIComponent(item.title)" class="text-center w-full">
            <h1 class="font-medium text-base md:text-lg mb-4">
            {{ item.title }}
            </h1>
        </div>
        <div>
            <img
                class="rounded-lg object-contain"
                :src="item.image"
                :alt="item.title"
            />
        </div>
        <div
            class="article-content mx-auto leading-relaxed text-xs md:text-base"
            v-html="item.content"
        />
    </aside>
</template>


<page-query>

</page-query>

<static-query>

</static-query>

<script>
export default {
    props: {
        item: Object
 }
}

</script>