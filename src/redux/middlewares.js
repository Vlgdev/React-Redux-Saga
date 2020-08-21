import { CREATE_POST } from "./types"
import { showAlert } from "./actions"

const forbidden = ['fuck', 'spam', 'shit']

export const forbiddenWords = ({dispatch}) => next => action => {
  if (action.type === CREATE_POST){
    const found = forbidden.filter(w => action.payload.title.includes(w))
    if (found.length){
      return dispatch(showAlert('Вы использовали некорректные слова'))
    }
  }

  return next(action)
}