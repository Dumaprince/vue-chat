<template>
    <div class="chat-container">
      <header>
        <span class="title">
          <div>Trollbox ({{data.length}})</div>
        </span>
        <span>
          <a href="#">설정</a>
        </span>
      </header>
      <div class="body">
        <div class="chat-widget">
          <div class="chat-section">
            <span v-for="a in data" :key="a.chat">
              <span class="short-date">{{timestamp_to_date(a)}}</span>
              <a class="user">{{a.name}}: </a>
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
export default {
  name: 'HelloWorld',
  data () {
    return {
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
  methods: {
    timestamp_to_date(news){
      var date = new Date(news.timestamp * 1000 - 60 * 60 * 9 * 1000)
      var hour = this.correction_date(date.getHours())
      var min = this.correction_date(date.getMinutes())
      return `${hour}:${min}`
    },
    correction_date(i){
      return i >= 10 ? i : '0' + i
    },
    sort_date(){
      this.data.sort( (a,b) => parseFloat(a.timestamp) - parseFloat(b.timestamp ) )
    },
    // 이곳 포맷 하고 넣어야되는지 .... 56줄 계산해보니까 now 자릿수랑 똑같아서 의문임 그리고 되지도 않음ㅅㅂㅅㅂ
    // push_data(){
    //   // alert(this.inputText);
    //   var inputDate = Date.now();
    //   var hour = this.correction_date(inputDate.getHours())
    //   var min = this.correction_date(inputDate.getMinutes())
    //   alert(`${hour}:${min}`)
    // }
  },
  // error - 라이프사이클 훅 의문.. 처음 랜더링 될때 데이터 정리하고 보여주려고 하는데 안됨 ㅠ
  beforeMount(){
    sort_date();
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
</style>