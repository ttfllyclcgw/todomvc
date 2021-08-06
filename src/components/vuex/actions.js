export default{
  syncNewContentItem(context,content){
    context.commit('newContentItem',content)
  },
  syncRemoveOneContent(context,content){
    context.commit('removeOneContent',content)
  },
  syncContentCount(context){
    context.commit('contentCount')
  },
  syncUpdateContent(context,content){
    context.commit('updateContent',content)
  },
  syncClearCompleted(context,isExpand){
    context.commit('clearCompleted',isExpand)
  }
}
