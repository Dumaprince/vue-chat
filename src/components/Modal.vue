<template>
  <div class="black-bg" v-if="modal">
    <div class="white-bg">
      이름을 입력하세요.
      <br/><br/>
      <input 
        type="text"
        @input="$emit('input', $event.target.value)"
        @keyup.enter="$emit('close-modal')"
      >
    </div>
  </div>
</template>

<script>
export default {
  name: 'nameModal',
  props : {
    modal : Boolean,
    inputName : String,
  }
}
</script>

<style>

</style>