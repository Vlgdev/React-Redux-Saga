import { CREATE_POST, FETCH_POSTS, SHOW_LOADER, HIDE_LOADER, SHOW_ALERT, HIDE_ALERT, REQUEST_POSTS } from './types'

export const createPost = (post) => ({
  type: CREATE_POST,
  payload: post,
})

export const showLoader = () => ({ type: SHOW_LOADER })
export const hideLoader = () => ({ type: HIDE_LOADER })
export const showAlert = text => {
  return dispatch => {
    dispatch({type: SHOW_ALERT, payload: text})
    setTimeout(() => {
      dispatch(hideAlert())
    }, 3000)
  }
}
export const hideAlert = () => ({type: HIDE_ALERT})

export const fetchPosts = () => {
  return {
    type: REQUEST_POSTS
  }
    // try{
    //   dispatch(showLoader())
    //   const response = await fetch(
    //     'https://jsonplaceholder.typicode.com/posts?_limit=5'
    //   )
    //   const json = await response.json()
    //   setTimeout(() => {
    //     dispatch({ type: FETCH_POSTS, payload: json })
    //     dispatch(hideLoader())
    //   }, 2000)
    // } catch (e){
    //   dispatch(showAlert('Что-то пошло не так при загрузке данных'))
    //   dispatch(hideLoader())
    // }
}
