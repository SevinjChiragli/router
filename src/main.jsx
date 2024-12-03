import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ProductList from './copmponents/Products/ProductList.jsx'
import Bag from './copmponents/Bag/Bag.jsx'
import OrdersList from './copmponents/Orders/OrdersList.jsx'

const router=createBrowserRouter(
    [
        {
            path:'/',
            element:<App/>,
            children:[
                {
                    index: true,
                    element: <ProductList /> 
                  },
                {
                    path:'/bag',
                    element:<Bag/>
                },
                {
                    path:'/orders',
                    element:<OrdersList/>
                }
            ]
        }
    ]
)

createRoot(document.getElementById('root')).render(
    <RouterProvider router={router}/>
)
