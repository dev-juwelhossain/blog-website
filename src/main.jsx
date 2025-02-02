import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter ,
    RouterProvider,
    ScrollRestoration,
    
  } from'react-router-dom'
 
const router = createBrowserRouter([{
  path: '/',
  element: <App />,
  children: [
    
  ],
 
}])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}>
      <App />
      <ScrollRestoration />
    </RouterProvider>
  </StrictMode>
);