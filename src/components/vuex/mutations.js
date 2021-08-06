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
  },
  contentCount(state){
    state.count = state.contentItem.filter(item=>item.isExpand===false).length
  },
  updateContent(state,content){
    state.contentItem.splice(content.index,1,content.data)
  },
  clearCompleted(state,isExpand){
    state.contentItem = state.contentItem.filter(item=>item.isExpand!=content.isExpand)
    state.count = state.contentItem.length
  }
}
