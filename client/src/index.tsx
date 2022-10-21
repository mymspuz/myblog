import React from 'react'
import ReactDOM from 'react-dom/client'

import Router from 'main/routes/router'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)

root.render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>
)