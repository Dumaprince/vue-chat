<template>
    <div class="chat-container">
      <header>
        <span class="title">
          <div>Trollbox (접속자 수)</div>
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
          <!-- <span v-for="b in orderedUsers" :key="b.timestamp">{{b.timestamp}}</span> -->
        </div>
      </div>
    </div>
</template>
<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
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
              'timestamp':1641139601
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
    sort_date(i){

    }
  },
  // computed:{
  //   orderedUsers : function(){
  //       return _.orderBy(this.data, 'timestamp', 'asc');
  //   }
  // }


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