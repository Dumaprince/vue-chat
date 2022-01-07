<template>
  <div class="name-container" v-if="isShowName">
    <div>Welcom to BitMEX Chat!</div>
    <div class='name-text'>To get started. choose a public username.</div>
    <input 
      class='name-input'
      type="text"
      v-model="nickName"
      @keyup.enter="name_chk_value"
    >
    <div class='name-input-warning'>4~10자 사이 입력해주세요.</div>
    <div 
      class='name-button'
      @click="name_chk_value"
    >Start Chatting</div>
  </div>
  
</template>

<script>
export default {
  watch: {
    nickName(nickNameLength){
      const target = document.getElementsByClassName('name-input-warning')
      if(nickNameLength.length > 3 && nickNameLength.length < 11){
        target[0].style.color = "black"
        target[0].innerHTML=" "
      }else{
        target[0].style.color = "red"
        target[0].innerHTML="4~10자 사이 입력해주세요."
      }

    }
  },
  props : {
    isShowName : Boolean,
    inputName : String,
  },
  methods: {
    name_chk_value(){
      if(this.nickName.length > 3 && this.nickName.length < 11){
        this.$emit('close-name-modal',this.nickName)
      }else{
        alert("4~10자 사이 입력해주세요.")
        return
      }
    }
  },
  name: 'nameModal',
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
  margin-bottom:10px;
}
.name-input-warning{
  margin-bottom:10px;
  font-size: 12px;
  text-align: center;
  color: rgb(255, 0, 0);
  height: 15px;
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