import { ReactComponent as Logo } from "../assets/Logo.svg";
import { ReactComponent as Home } from "../assets/Home.svg";
import { ReactComponent as Pie } from "../assets/Pie.svg";
import { ReactComponent as Envelope } from "../assets/Envelope.svg";
import { ReactComponent as Setting } from "../assets/Setting.svg";
import { ReactComponent as Bell } from "../assets/Bell.svg";
import { ReactComponent as Exit } from "../assets/Exit.svg";
const Sidebar = ({ isOpen }) => {
   return (
      <>
         <div className="sidebar  w-[6.5%] min-h-screen bg-[#1F1D2B] fixed left-0">
            <div className="sidebar-wrapper w-full h-full flex justify-center relative">
               <div className="text-white flex gap-2 flex-col mt-6 w-full justify-between items-center ms-4 h-screen  pb-20 ">
                  <Logo width={200} />
                  <div className="w-full flex flex-col gap-8">
                     <div className="w-full h-28 flex justify-center ">
                        <Home className="" width={30} strokeWidth={1.6} />
                     </div>
                     <div className="w-full h-28 flex justify-center bg-[#2B2C2D] rounded-l-2xl">
                        <Pie width={30} strokeWidth={1.6} />
                     </div>
                     <div className="w-full  h-28 flex justify-center">
                        <Envelope width={30} strokeWidth={1.6} />
                     </div>
                     <div className="w-full  h-28 flex justify-center">
                        <Bell width={30} strokeWidth={1.6} />
                     </div>
                     <div className="w-full h-28 flex justify-center">
                        <Setting width={30} strokeWidth={1.6} />
                     </div>
                  </div>
                  <div className="rounded-2xl text-black bg-[#EE4E4E] w-[70px] h-[70px] flex justify-center mt-8">
                     <Exit width={40} />
                  </div>
               </div>
            </div>
         </div>
      </>
   );
};

export default Sidebar;
