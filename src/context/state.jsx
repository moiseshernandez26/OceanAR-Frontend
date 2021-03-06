import React, { createContext, useReducer, useEffect } from 'react'
import { useLocalStorage } from './useLocalStoraje'

const AppContext = createContext()

const initialState = {
  isLoggedin: false,
  token: undefined,
  user: undefined,
  urlMap: undefined,
  idUser: undefined
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'set-is-loggedin':
      return { ...state, isLoggedin: action.isLoggedin }
    case 'set-token':
      return { ...state, token: action.token }
    case 'set-user':
      return { ...state, user: action.user }
    case 'set-url-map':
      return { ...state, urlMap: action.urlMap }
    case 'set-id-user':
      return { ...state, idUser: action.idUser }
    default:
      return state
  }
}

function AppContextProvider (props) {
  const fullInitialState = {
    ...initialState
  }

  const [data, setData] = useLocalStorage('oceanar', fullInitialState)
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
