// fn => action creator
// {} => action
// when these are used it's called dispatching an action
// increment
export function increment(index) {
  return {
    type: 'INCREMENT_LIKES',
    index
  }
}

// add comment
export function addComment(postId, author, comment) {
  console.log('dispatching add comment');
  return {
    type: 'ADD_COMMENT',
    postId,
    author,
    comment
  }
}

// remove comment
export function removeComment(postId, i) {
  console.log('dispatching remove comment');
  return {
    type: 'REMOVE_COMMENT',
    postId,
    i
  }
}