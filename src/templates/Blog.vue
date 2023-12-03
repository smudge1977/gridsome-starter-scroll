<template>
    <aside>
        XX{{  item }}XX
        <!-- <div class="text-center w-full">
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
            class="mx-auto leading-relaxed text-xs md:text-base"
            v-html="item.content"
        /> -->
        allBlogs(sortBy: "weight", order: DESC) {
    edges {
      node {
        id
        title
        image
        introduction
        content
      }
    }
  }
    </aside>
</template>


<page-query>

</page-query>

<static-query>
    query {
      metadata {
        author
      }
    }
</static-query>

<script>
export default {
    props: {
        item: Object
 }
}

</script>