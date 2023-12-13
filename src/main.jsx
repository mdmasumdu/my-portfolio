import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { RouterProvider } from 'react-router-dom'
import mycreatedroute from './Routes/Routes.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
 <div className='container mx-auto'>
 <RouterProvider router={mycreatedroute}></RouterProvider>
 </div>
  </React.StrictMode>,
)
