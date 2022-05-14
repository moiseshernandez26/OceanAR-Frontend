import { lazy, Suspense, useContext } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { AppContext, AppContextProvider } from './context/state'
import './App.css'
import './themes/variables.css'
import Loading from './components/Loading'

const Home = lazy(() => import('./views/Home'))
const SignIn = lazy(() => import('./views/SignIn'))
const SignUp = lazy(() => import('./views/SignUp'))

function ARPlacesAPP () {
  const { state } = useContext(AppContext)

  return (
    <div className='App'>
      <Router>
        <Suspense fallback={<Loading />}>
          {state.isLoggedin
            ? (
              <Routes>
                <Route path='/home' element={<Home />} />
                <Route path='*' element={<Home />} />
              </Routes>
              )
            : (
              <Routes>
                <Route path='/sign-in' element={<SignIn />} />
                <Route path='/sign-up' element={<SignUp />} />
                <Route path='*' element={<SignIn />} />
              </Routes>
              )}
        </Suspense>
      </Router>
    </div>
  )
}

const App = () => {
  return (
    <AppContextProvider>
      <ARPlacesAPP />
    </AppContextProvider>
  )
}
export default App
