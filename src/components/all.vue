<template>
  <div>
    <div class="todo-list" v-for="(item,index) in contentItem" :key="index">
      <input type="checkbox" class="checked-item" :checked="item.isExpand" @click="item.isExpand!=item.isExpand" />
      <label class="list-item">{{item.content}}</label>
      <button class="remove-item" @click="removeTargetContent({content:item.content});
                                          contentShow()">×</button>
    </div>
  </div>
</template>

<script>
import {mapGetters,mapActions} from 'vuex'
export default {
  data(){
    return{
      isExpand:false
    }
  },
  computed:{
    ...mapGetters({
      contentItem: 'getContentItem'
    })
  },
  methods:{
    ...mapActions({
      removeTargetContent: 'syncRemoveOneContent'
    }),
    contentShow(){
      this.$parent.contentShow();
    },

  }
}
</script>

<style scoped>
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
</style>
