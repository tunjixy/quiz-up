<template>
  <div>
    <div v-for="(option, index) in options" :key="index">
      <button
        :disabled="disable"
        :class="{
          'bg-green-700 border-green-700 text-white hover:bg-green-700':
            selectedOption === option && option === answer,
          'bg-red-700 border-red-700 text-white hover:bg-red-700':
            selectedOption === option && selectedOption !== answer
        }"
        @click="submitAnswer"
        :value="option"
        class="w-full btn btn-outline rounded shadow-btn mt-2"
      >
        {{ option }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'QuizOptions',
  props: {
    answer: {
      type: String,
      required: true
    },
    selectedOption: {
      type: String,
      default: null
    },
    options: {
      type: Array,
      required: true
    },
    disable: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    submitAnswer(e) {
      this.$emit('submit', e)
    }
  }
}
</script>