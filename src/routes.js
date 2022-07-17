import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import Index from './Pages/Index';
import AddUsers from './Pages/addUsers';
import EndGame from './Pages/endGame';
import {Header} from "./Component/Header";

  const RoutesApp = () =>{
    return (
      <Router>
          <Header/>
        <Routes>
            <Route  path="/" element={<Index />}/>
            <Route  path="addUsers" element={<AddUsers />}  />
            <Route  path="product" element={<EndGame />}  />
        </Routes>
     </Router>
    )
  }

  export default RoutesApp