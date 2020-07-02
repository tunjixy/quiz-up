<template>
  <transition name="modal-fade">
    <div
      v-if="show"
      class="fixed overflow-auto inset-0 z-30 bg-black bg-opacity-75 py-6 px-5"
    >
      <div class="max-w-md mx-auto" role="dialog">
        <div class="bg-secondary rounded-lg shadow-lg py-6 px-8">
          <slot name="body" />
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'UiModal',
  props: {
    show: {
      type: Boolean,
      default: false
    }
  },
  watch: {
    show: {
      immediate: true,
      handler: (show) => {
        if (process.client) {
          if (show) {
            document.body.style.setProperty('overflow', 'hidden')
          } else {
            document.body.style.removeProperty('overflow')
          }
        }
      }
    }
  }
}
</script>

<style scoped>
.modal-fade-enter,
.modal-fade-leave-active {
  opacity: 0;
}

.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.5s ease;
}
</style>
