<template>
  <div id="app" class="font-karla antialiased text-light-grey-secondary">
    <transition name="fade" mode="out-in">
      <router-view />
    </transition>
  </div>
</template>

<style>
@import 'assets/css/tailwind.css';

body {
  background: #0a192f;
}
</style>
