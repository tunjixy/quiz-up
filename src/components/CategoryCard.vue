<template>
  <div class="flex flex-wrap items-start sm:-mx-2">
    <div
      v-for="(category, index) in categories"
      :key="index"
      class="w-full sm:w-1/2 lg:w-1/3 sm:px-2 mt-4"
    >
      <div class="bg-secondary rounded-lg shadow-lg overflow-hidden">
        <div class="relative pb-2/3">
          <img
            :src="category.image"
            class="absolute h-full w-full object-cover"
          />
        </div>
        <div class="py-4 px-6 flex flex-col">
          <h2 class="text-lg text-light-grey font-bold">
            {{ category.title }}
          </h2>
          <p class="leading-relaxed mt-1">
            {{ category.description }}
          </p>
          <ui-button
            @click="viewCategory(category)"
            rounded
            outline
            raised
            small
            class="self-end mt-4 px-5"
          >
            Start Quiz
          </ui-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CategoryCard',
  data() {
    return {
      categories: [
        {
          title: 'Music',
          description: 'Trivia question about musuc',
          image:
            'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260'
        }
      ]
    }
  },
  methods: {
    viewCategory(category) {
      this.$router.push(`/quiz/${category.title.toLowerCase()}`)
    }
  }
}
</script>
