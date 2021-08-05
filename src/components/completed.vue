<template>
  <div>
    <div class="todo-list" v-for="(item,index) in contentItem" :key="index" v-show="item.isExpand?false:true">
      <input type="checkbox" class="checked-item" :checked="item.isExpand" v-on:click="item.isExpand!=item.isExpand" @click="checkedCount" />
      <label class="list-item">{{item.content}}</label>
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
    checkedCount(e){
      alert(e.target);
    }
  }
}
</script>

<style>

</style>
