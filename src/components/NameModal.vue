<template>
  <div class="name-container" v-if="nameModal">
    <div>Welcom to BitMEX Chat!</div>
    <div class='name-text'>To get started. choose a public username.</div>
    <input 
      class='name-input'
      type="text"
      v-model="nickName"
      @input="$emit('input', nickName)"
      @keyup.enter="name_chk_value();"
    >
    <div 
      class='name-button'
      @input="$emit('input', nickName)"
      @click="name_chk_value(); "
    >Start Chatting</div>
  </div>
</template>

<script>
export default {
  name: 'nameModal',
  props : {
    nameModal : Boolean,
    inputName : String,
  },
  methods: {
    name_chk_value(){
      if(this.nickName == ''){
        alert("null")
        return
      }else{
        // 여기 넣는건 사실 몰라서 넣은거고 @click이나, @keyup.enter 옆에 넣으니까 안되서 포기
        $emit('close-name-modal')
      }
    }
  },
  data () {
    return {
      nickName: ''
    }
  },
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

.name-container{
  display:block;
  width: 100%;
  height:100%;
  background: rgba(255, 255, 255, 0.9);
  position: absolute;

  box-sizing: border-box; /* padding 크기로 인한 크기 증가 방지*/
  padding : 10px;
  padding-top:20px;

}
</style>