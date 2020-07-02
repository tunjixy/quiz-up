<template>
  <div>
    <img
      class="block mx-auto rounded overflow-hidden shadow-md h-48 sm:h-56 md:h-70 object-cover"
      v-if="type === 'image'"
      :src="question"
    />
    <p v-else class="leading-relaxed text-light-grey text-center text-lg">
      {{ question }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'QuizQuestion',
  props: {
    type: {
      type: String,
      required: true
    },
    question: {
      type: String,
      required: true
    }
  }
}
</script>