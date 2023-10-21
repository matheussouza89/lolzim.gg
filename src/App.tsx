import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import { hot } from 'react-hot-loader/root'
import Champions from 'views/champions'
import DetailsChampion from 'views/detailsChampion'
import { Provider } from 'react-redux'
import store from 'store'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Champions />} />
          <Route path=":idChampion" element={<DetailsChampion />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}

export default hot(App)
