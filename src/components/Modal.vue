<template>
  <div class="black-bg" v-if="modal">
    <div>Welcom to BitMEX Chat!</div>
    <div class="white-bg"> <!-- 변수이름 너무 간단함. -->
      <div class='name-text'>To get started. choose a public username.</div>
      <input 
        class='name-input'
        type="text"
        @input="$emit('input', $event.target.value)"
        @keyup.enter="$emit('close-modal')"
      >
      <div class='name-button'>Start Chatting</div>
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
.name-text{
  margin-top:10px;
  margin-bottom:10px;
  font-size: 12px;
  text-align: left;
}
.name-input{
  box-sizing: border-box;
  width: 100%;
  margin-bottom:20px;
}
.name-button{
  padding:5px 10px 5px 10px;
  background: #10cb81;
  font-size:11px;
  color:#fff;
  border: 1px solid #000;
  width: 50%;
  margin:0px auto;
}
</style>