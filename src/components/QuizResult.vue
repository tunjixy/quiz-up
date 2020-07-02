<template>
  <div>
    <h2 class="text-2xl text-primary text-center font-bold">Results</h2>
    <div class="mt-3 flex items-center justify-center">
      <vue-circle
        :progress="percentage"
        :size="100"
        :reverse="false"
        line-cap="round"
        :fill="fill"
        empty-fill="rgba(0, 0, 0, .1)"
        :animation-start-value="0.0"
        :start-angle="0"
        insert-mode="append"
        :thickness="5"
        :show-percent="true"
      >
      </vue-circle>
    </div>
    <p class="leading-relaxed text-center text-light-grey mt-3">
      You scored {{ score }}
    </p>
    <div class="mt-3 text-gray-light">
      <div class="flex items-baseline justify-between">
        <span class="text-light-grey">Total Questions</span>
        <span
          class="bg-dark-blue shadow-md text-primary font-bold rounded-full h-8 w-8 flex items-center justify-center"
          >{{ totalQuestions }}</span
        >
      </div>
      <div class="flex items-baseline justify-between mt-2">
        <span class="text-light-grey">Correct</span>
        <span
          class="bg-green-700 shadow-md text-white font-bold rounded-full h-8 w-8 flex items-center justify-center"
          >{{ score }}</span
        >
      </div>
      <div class="flex items-baseline justify-between mt-2">
        <span class="text-light-grey">Failed</span>
        <span
          class="bg-red-700 shadow-md text-white font-bold rounded-full h-8 w-8 flex items-center justify-center"
          >{{ failed }}</span
        >
      </div>
    </div>
    <p class="text-center leading-relaxed text-light-grey mt-4">
      {{ resultInfo }}
    </p>
    <ui-button
      class="mt-5"
      @click="$emit('goHome')"
      full
      rounded
      raised
      outline
    >
      Go Home
    </ui-button>
    <ui-button
      @click="$emit('playAgain')"
      class="mt-2"
      primary
      full
      rounded
      raised
    >
      Play Again
    </ui-button>
  </div>
</template>

<script>
export default {
  name: 'QuizResult',
  props: {
    score: {
      type: Number,
      required: true
    },
    failed: {
      type: Number,
      required: true
    },
    totalQuestions: {
      type: Number,
      required: true
    },
    percentage: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      fill: { color: '#77f1ca' },
      lowScoreReview: [
        "Wow, that's a low score, we're pretty embrassed at you right now, hit that play again button to fix it.",
        "Practice, Practice, Practice! You'll be a genius as Albert Einstein in no time.",
        'Seriously, is that what you score, you can do better than that, qucikly hit the play again button.',
        `Seriously you scored ${this.score}. i don't have to tell that's embrassing, fix it.`
      ],
      averageScoreReview: [
        'Not too shabby! Have a bottle of coke and then try again!',
        "Nice but we believe you can do better than that, don't you?",
        'Keep trying you will be a quiz legend in no time'
      ],
      highScoreReview: [
        "Very good! Have another go and you'll will be top of the leaderboard.",
        "Good! That's a leaderboard score to beat, keep it up.",
        "Nice job! You're becoming a quiz legend, you'll be top of the leaderboard in no time."
      ]
    }
  },
  computed: {
    resultInfo() {
      let info
      if (this.score < 5) {
        info = this.lowScoreReview[
          Math.floor(Math.random() * this.lowScoreReview.length)
        ]
      }
      if (this.score >= 10 && this.score < 15) {
        info = this.averageScoreReview[
          Math.floor(Math.random() * this.averageScoreReview.length)
        ]
      }
      if (this.score >= 15) {
        info = this.highScoreReview[
          Math.floor(Math.random() * this.highScoreReview.length)
        ]
      }
      if (this.score === 20) {
        info =
          'Congratulations, You have got all questions right, Nice work! You have some serious wizard wisdom!.'
      }

      return info
    }
  }
}
</script>
