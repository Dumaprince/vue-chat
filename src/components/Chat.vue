<template>
  <div class="chat-container">
    <transition name="chat-modal-fade">
      <NameModal @close-name-modal="close_name_modal" v-model="inputName" v-if="isShowName" :isShowName="isShowName" :inputName="inputName"/>
    </transition>
    <header class="chat-title">
      <div class="chat-title-entrant">Trollbox ({{data.length}})</div>
      <div class="chat-title-setting">설정</div>
    </header>
    <div class="body">
      <div class="chat-widget">
        <div class="chat-section">
          <span v-for="a in data" :key="a.chat">
            <span class="short-date" v-if="isNaN(a.timestamp)">{{a.timestamp}}</span>
            <span class="short-date" v-else>{{timestamp_to_date(a.timestamp)}}</span>
            <a href="#" v-bind:title="a.timestamp" class="user">{{a.name}}: </a>
            <span class="message">{{a.chat}}</span>
            <br/>
          </span>
        </div>
      </div>
      <div class="chat-input-wrapper">
        <textarea v-model="inputText" @keyup.enter="push_data()" class="chatInput form-control"/>
      </div>
    </div>
  </div>
</template>
<script>
import NameModal from './NameModal.vue'
import io from 'socket.io-client';

export default {
  name: 'HelloWorld',
  components: { NameModal },
  created(){
      this.socket.on('chat',(data)=>{
        this.data.push(data)
      })
  },
  methods: {
    close_name_modal(name){
      this.isShowName = false
      this.inputName = name
    },
    timestamp_to_date(news){
      var date = new Date(news * 1000 - 60 * 60 * 9 * 1000)
      var hour = this.correction_date(date.getHours())
      var min = this.correction_date(date.getMinutes())
      return `${hour}:${min}`
    },
    correction_date(i){
      return i >= 10 ? i : '0' + i
    },
    sort_date(){
      this.data.sort( (a,b) => parseFloat(b.timestamp) - parseFloat(a.timestamp ) )
    },
    push_data(){
      var inputDate = (Date.now() /1000 | 0)
      var pushData = {
        'name' : this.inputName,
        'chat' : this.inputText,
        'timestamp' : this.timestamp_to_date(inputDate)
      }
      // this.data.push(pushData)
      this.inputText = ''

      this.socket.emit('send_chat', {
        socketId: this.socket.id,
        ...pushData
      }) // 서버에 전송
    },
  },
  watch: {
    immediate: true,
    handler(newValue, oldValue){
      if(newValue == oldValue) return
      this.sort_date()
    }
  },
  data () {
    return {
      isShowName: true,
      inputName: '',
      inputText: '',
      socket : io('http://localhost:3000'),
      data:[
      ]
    }
  },

}
</script>
<style>
.chat-modal-fade-leave-active {
  transition: opacity 0.5s;
}
.chat-modal-fade-leave-to {
  opacity: 0;
}


.chat-container{
  position:absolute;
  height: 300px; 
  width:300px;
  background: #eaecef;
  bottom:50px;
  left: 50px;
  right: 50%;
}

.chat-section{
  text-align: left;
  margin-top: 10px;
  margin-left: 10px;
}

.chat-widget{
  flex:1
}

.chat-title{
  width: 100%;
  height: 20px;
  background-color: rgb(22, 22, 22);
  padding-top: 5px;
  padding-bottom: 5px;
  color: #ffffff;
}

.chat-title-entrant{
  float: left;
  margin-left: 10px;
}

.chat-title-setting{
  float: right;
  margin-right: 10px;
}

.form-control{
  width: 100%;
  box-sizing: border-box;
}

.chat-input-wrapper{
  width: 100%;
}

.body{
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  overflow:auto;
}
</style>