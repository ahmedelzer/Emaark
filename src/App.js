import Home from './component/Home';
// import * as All from './main'
import { BrowserRouter, Routes, Route, Outlet, Router, createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from './component/Header';
import Footer from './component/Footer';
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
