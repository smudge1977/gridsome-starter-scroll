<template>
    <aside>
        <div class="flex flex-row md:flex-col">
        <!--     <div class="flex flex-col justify-start md:justify-center items-start md:items-center w-1/3 md:w-auto"> -->
                <img
                    class="rounded-lg object-contain"
                    :src="treatment.image"
                    :alt="treatment.title"
                />
                <!-- <g-image src="~/IMG_5004.jpg"/> -->
                <div class="flex-center space-x-2 md:space-x-4 m-4">
                    <!-- :href="edge.node.github" -->
                    <a
                    
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Read more"
                        :href="read_moreUrl"
                        
                    >
                        <!-- T{{ read_moreUrl }}T -->
                    <!-- <OpenInNewIcon class="icon" /> -->
                        Read more<!-- <GithubIcon class="icon" /> -->
                    </a>
                    <g-link :to=treatment.id>gRead more g</g-link>
                    <!-- :href="edge.node.url" -->
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        :title="treatment.title"
                    >
                        <!-- <BookingIcon class="icon"/> -->
                        Book
                    </a>
                </div>
                <div class="ml-4 md:ml-0 w-auto">
                    <h2 class="font-medium text-base md:text-lg">
                        {{ treatment.title }}
                    </h2>
                    <div
                        class="mx-auto leading-relaxed text-xs md:text-base"
                        v-html="treatment.introduction"
                    />
                </div>
             </div>
        <!--</div> -->
    </aside>
</template>

<page-query>

</page-query>

<static-query>

</static-query>

<script>
// import { setgroups } from 'process';

export default {
    
    props: {
        treatment: Object,
    },

    methods: {
        read_moreUrl() {
        // const hasDarkMode = document.documentElement.classList.contains(DARK_MODE)
        const url="This her"
        return url
        },
    }
//  },
//     more_url: props.treatment.id
}
// import { ref, computed } from 'vue'
// const read_more_url = ref('thing')
// ref.treatment.id

</script>
<!-- <script setup>
// const read_more_url = "string" +  treatment.id
// console.log(read_more_url)
console.log("HELLO WORLD!")

</script> -->