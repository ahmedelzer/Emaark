import Home from './component/Home';
// import * as All from './main'
import { Outlet, createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from './component/Header';
import Footer from './component/Footer';
import Department from './component/Department';

const Layout=()=>{
  return(
    <div>
      <Header/>
      <Outlet/>
      <Footer/>
    </div>
  );
};

const router = createBrowserRouter([
  {
    element: <Layout />,
    children:[
      {path :'/', element:<Home/>},
      {path :'/Department/:id', element:<Department/>},
    ],
  },
]);
function App() {
  return (
    <>
      <RouterProvider router={router}/>
    </>
  );
  
}

export default App;
