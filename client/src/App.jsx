import {RouterProvider,createBrowserRouter } from 'react-router-dom'
import HostTournamentPage from './pages/TournamentsPage';
import Home from './pages/Home';
import MyPage from './pages/My';
import ProfilePage from './pages/Profile';

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
    },
    {
      element:<MyPage/>,
      path:'/profile'
    }
  ])
 return(
  <>
   <RouterProvider router={router}/>
  </>
 )
};

export default App;