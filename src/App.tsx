import React from 'react'
import { authProtectedRoutes } from './routes/allRoutes'
import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'


function App() {
  return (
    <React.Fragment>
      <Routes>
        {authProtectedRoutes.map((route, idx) => (
          <Route 
            path={route.path}
            key={idx}
            element={
              <React.Fragment>
                <Layout>{route.component}</Layout>
              </React.Fragment>
            }
          >
          </Route>
        ))}
      </Routes>
    </React.Fragment>
  )
}

export default App
