<template>
    <aside>
        <div class="flex-center flex-shrink-0 w-18 h-18 md:w-28 md:h-28 rounded-full bg-content-highlight z-1">
              <div class="flex flex-col text-center leading-none text-xs md:text-base font-weight-500">
                  {{ dot }} <!-- <span>{{ edge.node.from }}</span>
                <span>-</span>
                <span>{{ edge.node.to }}</span> -->
              </div>
            </div>
            <div class="flex flex-grow pl-4 md:pl-8 items-start">
              <div class="flex-grow mt-0 md:mt-6 pl-2 md:pl-8">
                <h2 class="font-medium text-base md:text-lg mb-1 ">
                  {{  heading }}<!-- {{ edge.node.company }} -->
                </h2>
                <div class="leading-relaxed text-xs md:text-base">
                    {{  content }}
                </div>
              </div>
            </div>
    </aside>
</template>
<script>
export default {
    props: {
        dot: String,
        heading: String,
        content: String,
 }
}
</script>