<template>
  <div class="container">
    <transition name="fade">
      <div
        v-if="showQuestion"
        class="h-screen py-1 flex flex-col justify-center max-w-xl mx-auto"
      >
        <div
          class="flex items-baseline justify-between text-light-grey text-lg font-bold"
        >
          <h1 class="font-bold text-primary capitalize">
            {{ $route.params.title }} Quiz
          </h1>
          <span class="text-primary">{{ time }}</span>
          <div class="flex items-baseline">
            <span class="mr-3"> {{ currentQuestion + 1 }} </span>
            of
            <div
              class="bg-secondary shadow-md h-8 w-8 p-2 text-sm rounded-full flex items-center justify-center text-primary ml-3"
            >
              {{ questions.length }}
            </div>
          </div>
        </div>
        <quiz-question
          class="mt-3"
          :type="questions[currentQuestion].type"
          :question="questions[currentQuestion].question"
        />
        <quiz-options
          class="mt-2"
          :answer="questions[currentQuestion].answer"
          :selectedOption="userAnswer"
          :options="shuffledOptions"
          :disable="disable"
          @submit="submitAnswer"
        />
      </div>
    </transition>

    <ui-modal :show="quizIsOver">
      <template #body>
        <quiz-result
          :score="correct"
          :failed="wrong"
          :totalQuestions="questions.length"
          :percentage="scorePercentage"
          :categoryId="$route.params.id"
          @goHome="goHome"
          @playAgain="playAgain"
        />
      </template>
    </ui-modal>

    <ui-modal :show="timeIsUP">
      <template #body>
        <time-up-dialog @viewResult="viewResult" />
      </template>
    </ui-modal>
  </div>
</template>

<script>
import Music from '../json/music.json'
import QuizQuestion from '@/components/QuizQuestion'
import QuizOptions from '@/components/QuizOptions'
import QuizResult from '@/components/QuizResult'
import UiModal from '@/components/ui/UiModal'
import TimeUpDialog from '@/components/TimeUpDialog'

export default {
  components: { QuizResult, QuizQuestion, QuizOptions, UiModal, TimeUpDialog },
  data() {
    return {
      questions: [],
      options: [],
      currentQuestion: 0,
      userAnswer: null,
      correct: 0,
      wrong: 0,
      scorePercentage: null,
      quizIsOver: false,
      disable: false,
      showQuestion: false,
      time: 10,
      timeIsUP: false
    }
  },
  mounted() {
    this.getQuestions()
  },
  computed: {
    shuffledOptions() {
      const options = this.shuffle(this.questions[this.currentQuestion].options)
      return options
    }
  },
  methods: {
    async getQuestions() {
      if (this.$route.params.title === 'music') {
        this.questions = this.shuffle(Music)
        this.showQuestion = true
      }
      this.startTimer()
    },
    startTimer() {
      this.interval = setInterval(() => {
        if (this.time === 0) {
          this.timeIsUP = true
          this.calculateResults()
          clearInterval(this.interval)
        } else {
          this.time--
        }
      }, 1000)
    },
    submitAnswer(e) {
      this.disable = true
      setTimeout(() => {
        this.showQuestion = false
      }, 500)
      this.userAnswer = e.target.value
      if (this.questions[this.currentQuestion].answer === this.userAnswer) {
        this.correct++
      } else {
        this.wrong++
      }

      if (this.currentQuestion + 1 === this.questions.length) {
        this.calculateResults()
        this.quizIsOver = true
        clearInterval(this.interval)
      } else {
        setTimeout(() => {
          this.disable = false
          this.currentQuestion++
          this.showQuestion = true
          this.userAnswer = null
          this.time = 10
          this.startTimer
        }, 500)
      }
    },
    calculateResults() {
      this.scorePercentage = Math.round(
        (this.correct / this.questions.length) * 100
      )
    },
    viewResult() {
      this.timeIsUP = false
      this.showQuestion = false
      this.quizIsOver = true
    },
    goHome() {
      this.$router.go(-1)
    },
    playAgain() {
      this.questions = []
      this.options = []
      this.currentQuestion = 0
      this.userAnswer = null
      this.correct = 0
      this.wrong = 0
      this.scorePercentage = null
      this.quizIsOver = false
      this.disable = false
      this.showQuestion = false
      this.time = 10
      this.timeIsUP = false
      this.getQuestions()
    },
    shuffle(value) {
      let j, x, i
      for (i = value.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1))
        x = value[i]
        value[i] = value[j]
        value[j] = x
      }
      return value
    }
  },
  beforeRouteLeave(to, from, next) {
    if (confirm('Quit playing?')) {
      next()
    } else {
      next(false)
    }
  }
}
</script>
