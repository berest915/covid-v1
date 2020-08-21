import React, { useReducer } from 'react'

import RanContext from './RanContext'
import RanReducer from './RanReducer'

import { SET_CURRENT_COUNTRY,SET_FETCHED_DATA } from './types'
import { fetchData } from '../api'

const RanState = props => {
  const initialState = {
    _currentCountry: '',
    _data: '',
  }
  const [state, dispatch] = useReducer(RanReducer, initialState)

  const _handleCountryChange = async (country) => {
    dispatch({
      type: SET_CURRENT_COUNTRY,
      payload: country
    })

    const data = await fetchData(country)
    
    dispatch({
      type: SET_FETCHED_DATA,
      payload: data
    })
  
    
  }

  return(
    <RanContext.Provider
      value={{
        _currentCountry: state._currentCountry,
        _data: state._data,
        _handleCountryChange
      }}
    >
      {props.children}
    </RanContext.Provider>
  )

}
export default RanState