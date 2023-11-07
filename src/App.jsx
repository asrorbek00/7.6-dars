import { RouterProvider, createBrowserRouter } from "react-router-dom"
import MainLayout from "./layout/MainLayout"
import Home from "./pages/Home"
import Tickets from "./pages/Tickets"
import Ticket from "./pages/Ticket"
import TicketForm from "./components/TicketForm"



function App() {

  const routes = createBrowserRouter([
  {
    path:"/",
    element:<MainLayout/>,
    children:[
      {
        index: true ,
        element:<Home/>
      },
      {
        path:"tickets",
        element:<Tickets/>
      },
      {
        path:"tickets/ticket/:id",
        element:<Ticket/>
      },
      {
        path:"tickets/create",
        element:<TicketForm/>
      }
      
    ]
  },
])


  return  <RouterProvider router={routes}/>
}

export default App