<!-- src/templates/Post.vue -->
<template>
    <Layout>
      <!-- <h1 v-html="$page.post.title" /> -->
      query ($id: ID!) {
    post(id: $id) {
      title
    }
  }
    <h1>{{ id }}</h1>
    Hello
    </Layout>
  </template>
  
  <page-query>

  </page-query>