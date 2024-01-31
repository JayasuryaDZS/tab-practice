import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import rootReducer from './slices/index.ts'

const store = configureStore({
  reducer: rootReducer,
  devTools: true,
  middleware: (gDM) => gDM({
    serializableCheck: false
  })
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  // <React.StrictMode>
  <Provider store={store}>
    <React.Fragment>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.Fragment>
  </Provider>
  // </React.StrictMode>,
)
