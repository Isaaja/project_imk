import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Makanan from "./Makanan";
import Minuman from "./Minuman";
import Cemilan from "./Cemilan";
import { ReactComponent as Search } from "../assets/Search.svg";
import { ReactComponent as Arrow } from "../assets/Arrow.svg";

export default function Dashboard() {
   // State to track the active tab
   const [activeTab, setActiveTab] = useState("Makanan");
   const [isOpen, setIsOpen] = useState(false);

   return (
      <>
         <div
            className={`w-full h-screen relative ${
               !isOpen ? "overflow-hidden" : "overflow-auto"
            }`}
         >
            <div className=" w-[70px] h-[70px] rounded-full bg-primary flex justify-center items-center fixed bottom-10 right-10">
               <button
                  className="text-5xl"
                  onClick={() =>
                     isOpen === false ? setIsOpen(true) : setIsOpen(false)
                  }
               >
                  &uarr;
               </button>
            </div>
            <div
               className={`w-full h-screen bg-dashboardBg bg-center bg-cover flex justify-center transition-transform duration-[800ms] ease-in-out items-center absolute top-0 z-50 ${
                  isOpen ? "transform -translate-y-full" : "transform"
               }`}
            >
               <div className="text-white w-1/3 text-center">
                  <h1 className="text-shadow-lg font-['bubble'] text-[105px] shadow-black">
                     D'AIDAS CAFE
                  </h1>
                  <p className="text-4xl font-['buda']">
                     Gg. Pakel, Plangitan, Kec. Pati, Kabupaten Pati, Jawa
                     Tengah 59113
                  </p>
                  <button
                     className="mt-6 bg-[#D9D9D9] font-['buda'] rounded-2xl h-[37px] w-[150px] text-xl text-black flex justify-center items-center mx-auto"
                     onClick={() =>
                        isOpen === false ? setIsOpen(true) : setIsOpen(false)
                     }
                  >
                     <span>Menu</span>
                     <Arrow className="ml-2" width={24} height={24} />
                  </button>
               </div>
            </div>
            <div className="flex justify-end">
               <Sidebar />
               <div className="w-[93.5%] px-10 min-h-screen bg-[#2B2C2D] text-white ">
                  <div className="sticky top-0 bg-[#2B2C2D] z-10">
                     <div className="mt-10 font-['barlow'] flex justify-between items-center ">
                        <div>
                           <h1 className="text-4xl">D'Aidas Cafe</h1>
                           <p className="font-normal leading-loose text-2xl">
                              Gg. Pakel, Plangitan, Kec. Pati, Kabupaten Pati,
                              Jawa Tengah 59113
                           </p>
                        </div>
                        <div className="relative form-control text-black">
                           <Search
                              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-primary"
                              width={24}
                              height={24}
                           />
                           <input
                              type="text"
                              placeholder="Search"
                              className="input input-bordered w-64 pl-12 font-barlow"
                           />
                        </div>
                     </div>
                     <div className="flex flex-col relative">
                        <div className="font-['barlow'] mt-12 flex space-x-8">
                           <button
                              onClick={() => setActiveTab("Makanan")}
                              className={`px-4 py-3 ${
                                 activeTab === "Makanan"
                                    ? " border-b-4 border-solid border-red-400 text-red-400"
                                    : "bg-transparent text-white"
                              }`}
                           >
                              Makanan
                           </button>
                           <button
                              onClick={() => setActiveTab("Minuman")}
                              className={`px-4 py-3 ${
                                 activeTab === "Minuman"
                                    ? " border-b-4 border-solid border-red-400 text-red-400"
                                    : "bg-transparent text-white"
                              }`}
                           >
                              Minuman
                           </button>
                           <button
                              onClick={() => setActiveTab("Cemilan")}
                              className={`px-4 py-3 ${
                                 activeTab === "Cemilan"
                                    ? " border-b-4 border-solid border-red-400 text-red-400"
                                    : "bg-transparent text-white"
                              }`}
                           >
                              Cemilan
                           </button>
                        </div>
                        <span className="w-full h-[2px] bg-white absolute bottom-0 -z-10"></span>
                     </div>
                  </div>

                  <div className="mt-5">
                     {activeTab === "Makanan" && <Makanan />}
                     {activeTab === "Minuman" && <Minuman />}
                     {activeTab === "Cemilan" && <Cemilan />}
                  </div>
               </div>
            </div>
         </div>
      </>
   );
}
