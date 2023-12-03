<template>
  <Layout>
    <div class="bg-content-background">
      <!-- experiences -->
      <section v-for="edge in $page.allBlogs.edges" :id="edge.node.title" class="flex-center h-full min-h-screen m-auto border-b-4">
        <div  class="flex flex-center flex-col container h-full m-auto">
          <Article :item="edge.node"/>
        </div>
      </section>
    </div>
  </Layout>
</template>

<page-query>
  query {
    allBlogs {
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
// import GithubIcon from "vue-material-design-icons/Github"
// import OpenInNewIcon from "vue-material-design-icons/OpenInNew"
// import Social from "~/components/Social.vue"
import Article from "~/components/Article.vue"

export default {
  components: {
    Article,
    // GithubIcon,
    // OpenInNewIcon,
    // Social,
  },
}
</script>
    