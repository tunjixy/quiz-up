<template>
  <div class="py-6">
    <h1 class="text-3xl font-bold text-center text-light-grey">Quiz Up</h1>
    <h2 class="text-center sm:text-lg mt-1 mb-5">
      Collection of trvia quizzes
    </h2>
    <div class="container">
      <category-card />
    </div>
  </div>
</template>

<script>
import CategoryCard from '@/components/CategoryCard'

export default {
  name: 'Home',
  components: { CategoryCard }
}
</script>
