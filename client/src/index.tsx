import React from 'react'
import ReactDOM from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'

import Router from 'main/routes/router'
import ThemeProvider from './presentation/theme'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)

root.render(
  // <React.StrictMode>
      <HelmetProvider>
        <ThemeProvider>
            <Router />
        </ThemeProvider>
      </HelmetProvider>
  // </React.StrictMode>
)