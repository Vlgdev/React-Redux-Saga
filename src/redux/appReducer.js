const { SHOW_LOADER, HIDE_LOADER, SHOW_ALERT, HIDE_ALERT } = require("./types")

const initialState = {
  loading: false,
  alert: null
}

const appReducer = (state = initialState, action) => {
  switch (action.type){
    case SHOW_LOADER:
      return {...state, loading: true}
    case HIDE_LOADER:
      return {...state, loading: false}
    case SHOW_ALERT:
      return {...state, alert: {
        text: action.payload
      }}
    case HIDE_ALERT:
      return {...state, alert: null}
    default:
      return state
  }
}

export default appReducer