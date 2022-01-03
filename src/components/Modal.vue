<template>
  <div class="black-bg" v-if="modal == true">
    <div class="white-bg">
      <input 
        type="text"
        @input="$emit('input', $event.target.value)"
        @keyup.enter="$emit('closeModal')"
      >
    </div>
  </div>
</template>

<script>
export default {
  name: 'Modal',
  props : {
    modal : Boolean,
    inputName : String,
  }
}
</script>

<style>

</style>