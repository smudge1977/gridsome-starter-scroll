<template>
  <aside class="flex-center space-x-2 md:space-x-4">
    <a
      :href="$static.metadata.facebook"
      target="_blank"
      rel="noopener noreferrer"
      title="Facebook"
    >
      <FacebookIcon class="icon-md md:icon-lg" />
    </a>
    <a
      :href="$static.metadata.facebook"
      target="_blank"
      rel="noopener noreferrer"
      title="Google"
    >
      <GoogleIcon class="icon-md md:icon-lg" />
    </a>
  </aside>
</template>

<static-query>
query {
  metadata {
    facebook
  }
}
</static-query>

<script>
import FacebookIcon from "vue-material-design-icons/Facebook"
import GoogleIcon from "vue-material-design-icons/Google"

export default {
  components: {
    FacebookIcon,
    GoogleIcon,
  },
}
</script>
