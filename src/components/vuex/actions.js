export default{
  syncNewContentItem(context,content){
    context.commit('newContentItem',content)
  },
  syncRemoveOneContent(context,content){
    context.commit('removeOneContent',content)
  },
  syncCheckedContent(context,content){
    context.commit('checkedContent',content)
  }
}
