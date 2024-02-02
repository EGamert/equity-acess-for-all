import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Provider } from 'react-redux'
import store from './store/store.js'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import { Welcome, Post, Infos } from './components'

const router = createBrowserRouter(
  [
    {
      path:'/',
      element:<App/>,
      children:[
        {
          path:'/',
          element:<Welcome />
        },
        {
          path:'/post',
          element:<Post />
        },
        {
          path:'/info',
          element:<Infos />
        }
        // {
        //   path:'/login',
        //   element:(
            
        //       <></>
          
        //   ) 
        // },
        // {
        //   path:'/signup',
        //   element:(
            
        //       <></>
          
        //   ) 
        // },
        // {
        //   path:'/points',
        //   element:(
        //     <></>
        //   )
        // },
        // {
        //   path:'/post',
        //   element:(
        //     <PostForm/>
        //   )
        // },
        // {
        //   path:'/videos',
        //   element:(
        //     <Videos/>
        //   )
        // },
        // {
        //   path:'/all-posts',
        //   element:(
        //     <Protected authentication>
        //       <AllPost/>
        //     </Protected>
        //   ) 
        // },
        // {
        //   path:'/add-post',
        //   element:(
        //     <Protected authentication>
        //       {' '}
        //       <AddPost/>
        //     </Protected>
        //   ) 
        // },
        // {
        //   path:'/post/:slug',
        //   element:<Post/>
        // }
      ]
    }
  ]
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}/>
    </Provider>
    
  </React.StrictMode>,
)
