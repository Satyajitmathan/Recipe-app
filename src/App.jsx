import React from "react";
import MainRoutes from "./routes/MainRoutes";
import Navbar from "./components/Navbar";

const App = () => {
return ( 
     <div className="relative min-h-screen overflow-y-auto text-white bg-[#0f172a]">

        <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/10 blur-3xl rounded-full pointer-events-none"></div>

        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 blur-3xl rounded-full pointer-events-none"></div>


    <div className="relative px-[8%] py-8">
      <Navbar />
      <MainRoutes />
    </div>

</div>


);
};

export default App;
