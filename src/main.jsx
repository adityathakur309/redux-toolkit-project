import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './App.jsx'

// import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { HomePage } from './pages/Home.jsx'
import { ErrorPage } from './pages/ErrorPage.jsx'
import { CartPage } from './pages/CartPage.jsx'
import { Provider } from 'react-redux'
import { store } from './store/index.js'


// router 
const router = createBrowserRouter([
    {
        path: "/", element: <App></App>,
        errorElement:<ErrorPage/>,
        children: [
            {
                path: "/", element: <HomePage />
            },
        
            {
                path: "/cart", element: <CartPage />
            },
            
           
        ]
    }
])
// end 

createRoot(document.getElementById('root')).render(

    <Provider store={store}>
    <RouterProvider router={router}>
        <App />
    </RouterProvider>
</Provider>



)
