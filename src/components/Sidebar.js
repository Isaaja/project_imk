import { ReactComponent as Logo } from "../assets/Logo.svg";
import { ReactComponent as Home } from "../assets/Home.svg";
import { ReactComponent as Pie } from "../assets/Pie.svg";
import { ReactComponent as Envelope } from "../assets/Envelope.svg";
import { ReactComponent as Setting } from "../assets/Setting.svg";
import { ReactComponent as Bell } from "../assets/Bell.svg";
import { ReactComponent as Exit } from "../assets/Exit.svg";
const Sidebar = () => {
   return (
      <>

         <div className="sidebar  w-[7.5%] min-h-screen bg-[#1F1D2B] fixed left-0">
            <div className="sidebar-wrapper w-full flex justify-center h-full relative">
               <div className="text-white flex gap-14 flex-col mt-6">
                  <Logo width={40}/>
                  <Home width={40} />
                  <Pie width={40} />
                  <Envelope width={40} />
                  <Bell width={40} />
                  <Setting width={40} />
               </div>
            </div>
            <div className="exit-wrapper flex justify-center w-full">
               <div className="absolute rounded-lg bottom-10 text-white bg-red-500 w-[55px] h-[55px] flex justify-center ">
                  <Exit width={40} />
               </div>
            </div>
         </div>
      </>
   );
};

export default Sidebar;
