<template>
    <aside>
        <div class="flex flex-col justify-start md:justify-center items-start md:items-center w-1/3 md:w-auto">
            <h2 class="font-medium text-base md:text-lg">
                    {{ item.title }}
                </h2>
            <img
                class="rounded-lg object-contain"
                :src="item.image"
                :alt="item.title"
            />

            <div class="ml-4 md:ml-0 w-auto">

                <div
                    class="mx-auto leading-relaxed text-xs md:text-base"
                    v-html="item.introduction"
                />
            </div>
        </div>
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