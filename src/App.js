import { BrowserRouter, Route, Routes } from "react-router-dom";
import WorkerReg from "./admin/WorkerReg";
import Workerdetails from "./admin/Workerdetails";
import ClientReg from "./worker-client/ClientReg";
import Clientdetails from "./worker-client/Clientdetails";

import React from "react";
import Adminlog from "./admin/Adminlog";
import Navbar from "./nav/Navbar";
import UserTypeSelection from "./admin/UserTypeSelection";



function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          
          <Route path={'/'} element={<Adminlog method='post' />}></Route>
             <Route path="/user" element={<UserTypeSelection method="post"/>}></Route>
            <Route path="/WorkerReg" element={<WorkerReg method="post"/>}></Route>
            <Route path="/Workerdetails" element={<Workerdetails method="get"/>}></Route>

            <Route path="/ClientReg" element={<ClientReg method="post"/>}></Route>
          <Route path="/Clientdetails" element={<Clientdetails method="get" />}></Route>
          
           
           </Routes>
           </BrowserRouter>
           
    </div>
  );
}

export default App;
