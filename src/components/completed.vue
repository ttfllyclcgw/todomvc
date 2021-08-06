<template>
  <div>
    <div class="todo-list" v-for="(item,index) in contentItem" :key="index" v-show="item.isExpand?false:true">
      <input type="checkbox" class="checked-item" :checked="item.isExpand" v-on:click="item.isExpand=!item.isExpand" @click="getContentCount()" />
      <label class="list-item" @dblclick="editContent($event)">{{item.content}}</label>
      <input class="edit" :value="item.content" @blur="editItem($event,index,item.isExpand)"  />
      <button class="remove-item" @click="removeTargetContent({content:item.content});
                                          contentShow()">×</button>
    </div>
  </div>
</template>

<script>
import {mapGetters,mapActions} from 'vuex'
export default {
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
    getContentCount(){
      this.$parent.getContentCount();
    },
    editContent(that){
      this.$parent.editContent(that)
    },
    editItem(that,index,isExpand){
      this.$parent.editItem(that,index,isExpand)
    }
  }
}
</script>

<style>

</style>
