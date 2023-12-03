// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = function(api) {
  api.loadSource(async (store) => {
    // store.addMetadata("baseURL", "https://twblog.terabytetiger.com");
  });

  //api.createPages(({ createPage }) => {
    // Use the Pages API here: https://gridsome.org/docs/pages-api/
    


 // });


 api.createPages(async ({ graphql, createPage }) => {
  const { data } = await graphql(`{
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
  }`)

  data.allBlogs.edges.forEach(({ node }) => {
    let path = "/blog/" + encodeURIComponent(node.title.replaceAll(' ','').replaceAll('&','').replaceAll('?','').toLowerCase());
    console.log("path ", path)
    createPage({
      // path: `/blog/${node.title}`,
      path: path,
      component: './src/templates/Blog.vue',
      context: {
        id: node.id,
        title: node.title,
        image: node.image,

      }
    })
  })
})

 
};
