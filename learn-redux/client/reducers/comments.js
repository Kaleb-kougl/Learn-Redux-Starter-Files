// handles updating individual comment
function postComments(state, action) {
  // if no comments, create empty object
  if (state === undefined) {
    state = {};
  }
  switch (action.type) {
    case 'ADD_COMMENT':
      // return existing state + new comment
      return [...state, {
        user: action.author,
        text: action.comment,
      }];
    case 'REMOVE_COMMENT':
      return [
        ...state.slice(0, action.i),
        ...state.slice(action.i + 1)
      ];
    default:
      return state;
  }
  return state;
}

function comments(state = [], action) {
  console.log(action.postId);
  if (typeof action.postId !== 'undefined') {
    return {
      ...state,
      // overwrite post with new one
      [action.postId]: postComments(state[action.postId], action)
    }
  } else {
    console.log('eek, theres no postid');
  }
  return state;
}

export default comments;