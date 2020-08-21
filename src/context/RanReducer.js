import { SET_CURRENT_COUNTRY, SET_FETCHED_DATA } from './types'

export default (state, action) => {
  switch(action.type){
    case SET_CURRENT_COUNTRY:
      return{
        ...state,
        _currentCountry: action.payload
      }
    case SET_FETCHED_DATA:
      return{
        ...state,
        _data: action.payload
      }
    default: 
    throw Error(`Unhandled Action: ${action.type}`)
  }
}