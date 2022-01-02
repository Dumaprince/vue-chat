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
        <div class="chatWidget">
          <div class="chatSection">
            <span v-for="(a,i) in data" :key="i">
              <a class="user">{{data[i].name}}</a>
              <span class="message">: {{data[i].chat}}</span>
              <br/>
            </span>
          </div>
        </div>
        <div class="chatInputWrapper">
          
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
              'chat':'응애 나도 나애기개발자',
              'timestamp':1641139601
          },
      ]
    }
  }
}
</script>
<style>
.chat-container{
    position:absolute;
    height: 329px; 
    width:200px;
    background: #eaecef;
    bottom:0px;
    right: 50%;
}
</style>