// keys for actiontypes
export const ActionTypes = {
  INCREMENT: 'INCREMENT',
  DECREMENT: 'DECREMENT',
};

export function increment() {
  return {
    type: ActionTypes.INCREMENT,
    payload: null,
  };
}

export function decrement() {
  return {
    type: ActionTypes.DECREMENT,
    payload: null,
  };
}

// example calls

/* GET */
// export function fetchPosts() {
//   return (dispatch) => {
//     axios.get(`${ROOT_URL}/posts`).then((response) => {
//       dispatch({
//         type: ActionTypes.FETCH_POSTS,
//         payload: response.data,
//       });
//     }).catch((error) => {
//       console.log(`Error in fetchPosts: ${error}`);
//       dispatch({ type: ActionTypes.ERROR, payload: { message: 'There is an error while fetching all posts', data: error } });
//     });
//   };
// }

/* PUT */
// export function updatePost(id, newPost) {
//   return (dispatch) => {
//     axios.put(`${ROOT_URL}/posts/${id}`, newP, { headers: { authorization: localStorage.getItem('token') } }).then((response) => {
//       dispatch({
//         type: ActionTypes.UPDATE_POST,
//         payload: response.data,
//       });
//     }).catch((error) => {
//       console.log(`Error in updatePost: ${error}`);
//       dispatch({ type: ActionTypes.ERROR, payload: { message: 'There is an error while updating one post', data: error } });
//     });
//   };
// }

/* POST */
// export function createPost(newPost, history) {
//   return (dispatch) => {
//     axios.post(`${ROOT_URL}/posts`, newP, { headers: { authorization: localStorage.getItem('token') } }).then((response) => {
//       dispatch({
//         type: ActionTypes.CREATE_POST,
//         payload: response.data,
//       });
//       history.push('/');
//     }).catch((error) => {
//       console.log(`Error in createPost: ${error}`);
//       dispatch({ type: ActionTypes.ERROR, payload: { message: 'There is an error while creating post', data: error } });
//       history.push('/');
//     });
//   };
// }
