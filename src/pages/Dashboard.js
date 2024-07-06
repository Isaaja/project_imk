import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Makanan from "./Makanan";
import Minuman from "./Minuman";
import Cemilan from "./Cemilan";

export default function Dashboard() {
   // State to track the active tab
   const [activeTab, setActiveTab] = useState("Makanan");

   return (
      <>
         <div className="flex justify-end">
            <Sidebar />
            <div className="w-[92.5%] px-10 min-h-screen bg-[#2B2C2D] text-white ">
               <div className="sticky top-0 bg-[#2B2C2D] z-10">
                  <div className="mt-10 font-['barlow'] flex justify-between items-center ">
                     <div>
                        <h1 className="text-4xl">D'Aidas Cafe</h1>
                        <p className="font-normal leading-loose text-2xl">
                           Jln asdasdas
                        </p>
                     </div>
                     <div className="form-control text-black">
                        <input
                           type="text"
                           placeholder="Search"
                           className="input input-bordered w-64 font-barlow"
                        />
                     </div>
                  </div>
                  <div className="font-['barlow'] mt-12 flex space-x-8 ">
                     <button
                        onClick={() => setActiveTab("Makanan")}
                        className={`px-4 py-2 ${
                           activeTab === "Makanan"
                              ? "bg-white text-black"
                              : "bg-[#3A3A3A] text-white"
                        }`}
                     >
                        Makanan
                     </button>
                     <button
                        onClick={() => setActiveTab("Minuman")}
                        className={`px-4 py-2 ${
                           activeTab === "Minuman"
                              ? "bg-white text-black"
                              : "bg-[#3A3A3A] text-white"
                        }`}
                     >
                        Minuman
                     </button>
                     <button
                        onClick={() => setActiveTab("Cemilan")}
                        className={`px-4 py-2 ${
                           activeTab === "Cemilan"
                              ? "bg-white text-black"
                              : "bg-[#3A3A3A] text-white"
                        }`}
                     >
                        Cemilan
                     </button>
                  </div>
                  <div className="mt-3">
                     <hr
                        style={{
                           background: "white",
                           height: "3px",
                        }}
                     />
                  </div>
               </div>

               <div className="mt-5">
                  {activeTab === "Makanan" && <Makanan />}
                  {activeTab === "Minuman" && <Minuman />}
                  {activeTab === "Cemilan" && <Cemilan />}
               </div>
            </div>
         </div>
      </>
   );
}
