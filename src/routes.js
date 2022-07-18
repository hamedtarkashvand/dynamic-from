import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import Index from './Pages/Index';
import AddUsers from './Pages/addUsers';
import AddProduct from './Pages/addProduct';

import {Header} from "./Component/Header";

  const RoutesApp = () =>{
    return (
      <Router>
          <Header/>
        <Routes>
            <Route  path="/" element={<Index />}/>
            <Route  path="addUsers" element={<AddUsers />}  />
            <Route  path="product" element={<AddProduct />}  />
        </Routes>
     </Router>
    )
  }





  export default RoutesApp