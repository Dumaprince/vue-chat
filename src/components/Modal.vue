<template>
  <div class="black-bg" v-if="modal == true">
    <div class="white-bg">
      <input 
        type="text"
        @input="$emit('input', $event.target.value)"
      >
      <button @click="$emit('closeModal')">Submit</button>
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