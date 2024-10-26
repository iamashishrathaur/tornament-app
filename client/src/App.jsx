import {RouterProvider,createBrowserRouter } from 'react-router-dom'
import HostTournamentPage from './pages/TournamentsPage';
import Home from './pages/Home';

const App = () => {
  const router =createBrowserRouter([
    {
      element:<Home/>,
      path:'/'
    },
    {
      element:<HostTournamentPage/>,
      path:'/tournaments'
    },
    {
      element:<HostTournamentPage/>,
      path:'/host'
    }
  ])
 return(
  <>
   <RouterProvider router={router}/>
  </>
 )
};

export default App;