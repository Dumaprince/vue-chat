<template>
  <div class="chat-container">
    <NameModal @close-name-modal="close_name_modal" v-model="inputName" :isShowName="isShowName" :inputName="inputName"/>
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
        <textarea v-model="inputText" class="chatInput form-control"></textarea>
        <div @click="push_data()" class="submit-progress">전송</div>
      </div>
    </div>
  </div>
</template>
<script>
import NameModal from './NameModal.vue'
export default {
  components: { NameModal },
  watch: {
    immediate: true,
    handler(newValue, oldValue){
      if(newValue == oldValue) return
      this.sort_date()
    }
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
      this.data.push(pushData)
      this.inputText = ''
    }
  },

  name: 'HelloWorld',
  data () {
    return {
      isShowName: true,
      inputName: '',
      inputText: '',
      data:[
          {
              'name':'Duma',
              'chat':'응애 나애기개발자',
              'timestamp':1641135601
          },          
          {
              'name':'Duma',
              'chat':'응애',
              'timestamp':1641137701
          },
          {
              'name':'Minsu',
              'chat':'응애 나는 정자개발자',
              'timestamp':1641120601
          },
      ]
    }
  },

}
</script>
<style>
.chat-container{
  position:absolute;
  height: 329px; 
  width:300px;
  background: #eaecef;
  bottom:50px;
  left: 50px;
  right: 50%;
}

.chat-section{
  text-align: left;
  margin-left: 10px;
}

.chat-title{
  width: 100%;
  height: 20px;
  background-color: rgb(22, 22, 22);
  padding-top: 4px;
  padding-bottom: 4px;
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

</style>