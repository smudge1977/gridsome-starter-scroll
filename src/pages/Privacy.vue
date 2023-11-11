<template>
    <Layout>
      <div class="bg-content-background">
      <!-- experiences -->
      <section id="experiences" class="flex-center h-full min-h-screen m-auto border-b-4">
        <div class="flex-center flex-col container h-full m-auto">
          <div
            class="flex relative py-6 md:py12 md:w-2/3 m-auto"
            v-for="edge in $page.allExperiences.edges"
            :key="edge.node.id"
          >
            <div class="flex-center w-18 md:w-28 h-full absolute inset-0">
              <div class="h-full w-1 bg-current pointer-events-none"></div>
            </div>
            <div
              class="flex-center flex-shrink-0 w-18 h-18 md:w-28 md:h-28 rounded-full bg-content-highlight z-1"
            >
              <div
                class="flex flex-col text-center leading-none text-xs md:text-base font-weight-500"
              >
                <span>{{ edge.node.from }}</span>
                <span>-</span>
                <span>{{ edge.node.to }}</span>
              </div>
            </div>
            <div class="flex flex-grow pl-4 md:pl-8 items-start">
              <div class="flex-grow mt-0 md:mt-6 pl-2 md:pl-8">
                <h2 class="font-medium text-base md:text-lg mb-1 ">
                  {{ edge.node.company }}
                </h2>
                <div
                  class="leading-relaxed text-xs md:text-base"
                  v-html="edge.node.content"
                />
              </div>
            </div>
          </div>
        </div>
    </section>
    </div>
  </Layout>
</template>

<page-query>
    query {
      allExperiences(sortBy: "from", order: DESC) {
        edges {
          node {
            id
            company
            from
            to
            content
          }
        }
      }
      allProjects(sortBy: "title", order: ASC) {
        edges {
          node {
            id
            title
            url
            github
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
    
    export default {
      components: {
        GithubIcon,
        OpenInNewIcon,
        Social,
      },
    }
    </script>
    