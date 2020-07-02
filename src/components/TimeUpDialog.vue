<template>
  <div>
    <h2 class="text-light-grey text-xl font-bold text-center">Time is up</h2>
    <p class="leading-relaxed text-center mt-2">
      Ooops, we're sorry to see you stop playing but your time is up, better
      luck next time.
    </p>
    <ui-button
      class="mt-4"
      @click="$emit('viewResult')"
      full
      rounded
      raised
      primary
    >
      View Result
    </ui-button>
  </div>
</template>

<script>
export default {
  name: 'TimeUpDialog'
}
</script>
