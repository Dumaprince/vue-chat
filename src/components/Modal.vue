<template>
  <div class="black-bg" v-if="modal == true">
    <div class="white-bg">
      <input 
        type="text"
        :value ="value"
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
    value:{
      inputName : String,
      required: true
    }
  }
}
</script>

<style>

</style>