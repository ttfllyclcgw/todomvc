export default{
  newContentItem(state,content){
    if(content.content){
      state.contentItem.push(content)
    }
  },
  removeOneContent(state,content){
    state.contentItem = state.contentItem.filter(item=>item.content!==content.content)
  }
}
