export default{
  newContentItem(state,content){
    if(content.content){
      state.contentItem.push(content)
      state.count = state.contentItem.length
    }
  },
  removeOneContent(state,content){
    state.contentItem = state.contentItem.filter(item=>item.content!==content.content)
    state.count = state.contentItem.length
  }
}
