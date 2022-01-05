<template>
  <div class="chat-container">
    <header>
      <Modal @close-modal="modal = false" v-model="inputName" :modal="modal" :inputName="inputName"/>
      <span class="title">
        <div>Trollbox ({{Array.from(new Set(data.name))}})</div>
      </span>
      <span>
        <a href="#">설정</a>
      </span>
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
import Modal from './Modal.vue'
export default {
  components: { Modal },
  watch: {
    immediate: true,
    handler(newValue, oldValue){
      if(newValue == oldValue) return
      this.sort_date()
    }
  },

  methods: {
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
      this.data.push(pushData);
    }
  },

  name: 'HelloWorld',
  data () {
    return {
      modal: true,
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
    bottom:0px;
    right: 50%;
}

.black-bg{
  position: fixed;
  top:0; left: 0; bottom: 0; right: 0;
  background: rgba(0, 0, 0, 0.8);
}

.white-bg{
  position: absolute;
  top: calc(50vh - 100px); left: calc(50vw - 200px);
  background-color: white;
  display: -webkit-inline-box; justify-content: center;
  align-items: center;
  border-radius: 10px;
  width: 400px;
  height: 200px;
}
</style>