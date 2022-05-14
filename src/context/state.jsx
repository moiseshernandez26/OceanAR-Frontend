import React, { createContext, useReducer, useEffect } from 'react'
import { useLocalStorage } from './useLocalStoraje'

const AppContext = createContext()

const initialState = {
  isLoggedin: false,
  token: undefined,
  user: undefined,
  interest: true,
  objInterest: []
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'set-is-loggedin':
      return { ...state, isLoggedin: action.isLoggedin }
    case 'set-token':
      return { ...state, token: action.token }
    case 'set-interest':
      return { ...state, interest: action.interest }
    case 'set-user':
      return { ...state, user: action.user }
    case 'set-obj-interest':
      return { ...state, objInterest: action.objInterest }
    default:
      return state
  }
}

function AppContextProvider (props) {
  const fullInitialState = {
    ...initialState
  }

  const [data, setData] = useLocalStorage('arplaces', fullInitialState)
  const [state, dispatch] = useReducer(reducer, data)
  const value = { state, dispatch }

  useEffect(() => {
    setData(state)
  }, [state, setData])

  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  )
}

const AppContextConsumer = AppContext.Consumer

export { AppContext, AppContextProvider, AppContextConsumer }
