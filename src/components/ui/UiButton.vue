<template>
  <button
    :rounded="rounded"
    :roundedFull="roundedFull"
    :raised="raised"
    :full="full"
    :small="small"
    :primary="primary"
    :outline="outline"
    :center="center"
    :class="{
      'py-2': small,
      'py-5': large,
      'btn-primary': primary,
      'btn-outline': outline,
      'shadow-btn': raised,
      rounded: rounded,
      'rounded-full': roundedFull,
      'w-full': full,
      'mx-auto': center
    }"
    :type="type"
    :disabled="disabled"
    class="block btn"
    @click="$emit('click')"
  >
    <slot>Submit</slot>
  </button>
</template>

<script>
export default {
  name: 'UiButton',
  props: {
    primary: {
      type: Boolean,
      default: false
    },
    outline: {
      type: Boolean,
      default: false
    },
    small: {
      type: Boolean,
      default: false
    },
    large: {
      type: Boolean,
      default: false
    },
    raised: {
      type: Boolean,
      default: false
    },
    rounded: {
      type: Boolean,
      default: false
    },
    roundedFull: {
      type: Boolean,
      default: false
    },
    full: {
      type: Boolean,
      default: false
    },
    center: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: 'button'
    },
    disabled: {
      type: Boolean,
      default: false
    }
  }
}
</script>
