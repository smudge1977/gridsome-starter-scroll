<template>
  <Layout>
    <div class="bg-content-background">
      <!-- experiences -->
      <section v-for="edge in $page.allTreatments.edges" id="treatment" class="flex-center h-full min-h-screen m-auto border-b-4">
        <div class="flex flex-center flex-col container h-full m-auto">
          <Article :item="edge.node"/>
          <!-- <div class="text-center w-full">
            <h1 class="font-medium text-base md:text-lg mb-4">
                    {{ edge.node.title }}
            </h1>
            <p
              class="mx-auto leading-relaxed text-xs md:text-base lg:w-2/3 mb-4"
            >  <img
                    class="rounded-lg object-contain"
                    :src="edge.node.image"
                    
                    :alt="edge.node.title"
                  />
                  <div
                    class="mx-auto leading-relaxed text-xs md:text-base"
                    v-html="edge.node.content"
                  />
            </p>
          </div> -->
          </div>
      </section>
    </div>
  </Layout>
</template>

<page-query>
  query {
    allTreatments {
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
  }
</page-query>
    
<static-query>
    query {
      metadata {
        author
      }
    }
    </static-query>
    
<script>
import GithubIcon from "vue-material-design-icons/Github"
import OpenInNewIcon from "vue-material-design-icons/OpenInNew"
import Social from "~/components/Social.vue"
import Article from "~/components/Article.vue"

export default {
  components: {
    Article,
    GithubIcon,
    OpenInNewIcon,
    Social,
  },
}
</script>
    