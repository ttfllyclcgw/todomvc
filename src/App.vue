<template>
  <div class="todoapp">
    <h1>{{ msg }}</h1>
    <!-- 1.文本框 -->
    <div class="todo-new">
      <label class="todo-checkall" v-show="countShow" @click="allContent()">ⱴ</label>
      <input placeholder="What needs to be done?" v-model.trim="strValue"
        class="new-todo" @keyup.enter="newContent({content:strValue,isExpand:false});
                                      resetStrValue();contentShow();getContentCount()" />
    </div>
    <!-- 2.生成内容区 -->
    <div class="todo-main">
        <router-view ref="all"></router-view>
    </div>
    <!-- 3.操作区 -->
    <div class="todo-operation" v-show="countShow">
      <span class="operation-item"><strong ref="contentCount">{{count}}</strong> item left</span>
      <ul class="operation-ul">
          <li><router-link to="/all" >All</router-link></li>
          <li><router-link to="/active" >Active</router-link></li>
          <li><router-link to="/completed" >Completed</router-link></li>
      </ul>
      <button class="clear-completed" v-show="clearShow">Clear completed</button>
    </div>
    <!-- 4.底部文案区 -->
    <div class="todo-info">
      <p>Double-click to edit a todo</p>
      <p>Written by Evan You</p>
      <p>Part of TodoMVC</p>
    </div>
  </div>
</template>

<script>
import {mapGetters,mapActions} from 'vuex'
export default {
  data(){
    return{
      msg: 'todos',
      strValue:'',
      clearShow:false,
      countShow:false,
      count: 0,
    }
  },
  //默认打开显示全部
  mounted(){
    this.$router.push('/all')
  },
  created(){

  },
  computed:{
    ...mapGetters({
      ctCount: 'getContentCount'
    })
  },
  methods:{
    ...mapActions({
      newContent: 'syncNewContentItem',
      checkedAll:'syncCheckedContent',
      contentCount:'syncContentCount',
      updateContent:'syncUpdateContent',
      clearAll:'syncClearCompleted'
    }),
    resetStrValue(){
      this.strValue = '';
    },
    //显示导航栏
    contentShow(){
      let contentCount = this.$store.state.count;
      if(contentCount>0){
        this.countShow = true
      }else{
        this.countShow = false
      }
    },
    getContentCount(){
      this.contentCount
      this.count = this.ctCount
    },
    editContent(that){
      let currentNode = that.currentTarget
      var nextCode = currentNode.nextElementSibling
      var parentCode = currentNode.parentNode
      nextCode.style.display = 'block'
      parentCode.style.height = '7vh'
      nextCode.focus()
    },
    editItem(that,index,isExpand){
      let currentNode = that.currentTarget
      var prevNode = currentNode.previousElementSibling
      var parentCode = currentNode.parentNode
      currentNode.style.display = 'none'
      parentCode.style.height = 'auto'
      this.updateContent({data:{content:currentNode.value,isExpand:isExpand},index:index})
    },
    clearCompletedShow(that){
      let currentNode = that.currentTarget
      var nextCode = currentNode.nextElementSibling
      console.log(currentNode)
      console.log(nextCode)
      if(currentNode.checked==true){
        nextCode.style.textDecoration = 'line-through';
        document.querySelector('.clear-completed').style.display = "block";
      }else{
        nextCode.style.textDecoration = "none";
        document.querySelector('.clear-completed').style.display = "none";
      }
    },
    allContent(){
      this.$refs.all.allContent()
    }
  }
}
</script>

<style>
.todoapp h1{
  position: absolute;
  top: -5vh;
  width: 99%;
  font-size: 100px;
  font-weight: 100;
  text-rendering: optimizeLegibility;
  text-align: center;
  color: rgba(175, 47, 47, 0.15);
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  display: block;
}
.todo-checkall{
  position: absolute;
  left: 35%;
  top: 23%;
  z-index: 2;
  font-size: 30px;
  cursor: pointer;
  color: #777;
}
.todo-new,.todo-main,.todo-operation{
  width: 100%;
}
.new-todo{
  padding: 16px 16px 16px 60px;
  border: none;
  background: rgba(0, 0, 0, 0.003);
  box-shadow: inset 0 -2px 1px rgba(0,0,0,0.03);
  position: relative;
  width: 32vw;
  height: 8vh;
  font-size: 24px;
  font-family: inherit;
  font-weight: inherit;
  line-height: 1.4em;
  color: inherit;
  padding: 6px;
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  background: white;
  padding-left: 3.5%;
  padding-right: 2%;
  border: 1px solid #ededed;
  outline: none;
  margin: 10% 0 0 33.8%;
}
input::-webkit-input-placeholder{
  color:#ededed;
}
.todo-info p{
  color: #bfbfbf;
  font-size: 12px;
  text-shadow: 0 1px 0 rgba(255, 255, 255, 0.5);
  text-align: center;
}
.todo-operation{
  padding: 16px 16px 16px 60px;
  background: rgba(0, 0, 0, 0.003);
  box-shadow: inset 0 -2px 1px rgba(0,0,0,0.03);
  position: relative;
  width: 32vw;
  height: 5vh;
  font-size: 15px;
  font-family: inherit;
  font-weight: inherit;
  line-height: 1.4em;
  color: #777;
  padding: 6px;
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  background: white;
  padding-left: 3vw;
  padding-right: 1.3vw;
  margin-left: 33.5vw;
  margin-top: -0.1vw;
  border: 1px solid #ededed;
}
.todo-operation ul{
  list-style: none;
  padding-inline-start: 0px;
  position: absolute;
  left: 30%;
  top: -27%;
}
.operation-item,.operation-ul,.clear-completed{
  float:left;
}
.operation-item{
  position: absolute;
  left: 3%;
}
.operation-item > strong{
  font-weight: 300;
}
.todo-operation ul > li{
  display: inline;
}
.operation-ul li > a{
    color: inherit;
    text-decoration: none;
    border: 1px solid transparent;
    border-radius: 3px;
}
.clear-completed{
  position: absolute;
  left: 73%;
  line-height: 22px;
  font-size: 16px;
  cursor: pointer;
  color: #777;
  background: none;
  border: 0;
  outline: none;
}
.clear-completed:hover{
  text-decoration: underline;
}

.todo-list{
  padding: 16px 16px 16px 60px;
  background: rgba(0, 0, 0, 0.003);
  box-shadow: inset 0 -2px 1px rgba(0,0,0,0.03);
  position: relative;
  margin: 0;
  width: 32vw;
  font-size: 24px;
  font-family: inherit;
  font-weight: inherit;
  line-height: 1.4em;
  color: inherit;
  padding: 6px;
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  background: white;
  padding-left: 3vw;
  padding-right: 1.3vw;
  margin-left: 33.5vw;
  margin-top: -0.1vw;
  border: 1px solid #ededed;
}
.checked-item{
  width: 20px;
  height: 15px;
  cursor: pointer;
  position: absolute;
  top: 0.8vw;
  left: 10px;
}
.list-item{
  word-break: break-all;
  word-wrap: break-word;
  z-index: 0;
}
.remove-item{
  color:#cc9a9a;
  border: none;
  font-size: 24px;
  background: white;
  cursor: pointer;
  position: absolute;
  left: 90%;
  top: 1.5vh;
}
.edit{
  z-index: 10;
  background: rgba(0, 0, 0, 0.003);
  position: relative;
  margin: 0;
  width: 25vw;
  font-size: 24px;
  line-height: 1.4em;
  color: inherit;
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  background: white;
  border: 0px solid #ededed;
  top: -5vh;
  display: none;
}
</style>

