export default{
  syncNewContentItem(context,content){
    context.commit('newContentItem',content)
  },
  syncRemoveOneContent(context,content){
    context.commit('removeOneContent',content)
  }
}