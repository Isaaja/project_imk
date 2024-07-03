import Sidebar from "../components/Sidebar";
import Card from "../components/Card";
import image from "../assets/images/kopi_aidas.jpg";
import Makanan from "./Makanan";

export default function Dashboard() {
  return (
    <>
      <div className="flex justify-end">
        <Sidebar />

        <div className="w-[92.5%] px-10 min-h-screen bg-[#2B2C2D] text-white ">
          <div className="mt-10 font-['barlow'] flex justify-between items-center">
            <div>
              <h1 className=" text-4xl">D'Aidas Cafe</h1>
              <p className="font-normal leading-loose text-2xl">Jln asdasdas</p>
            </div>
            <div className="form-control text-black">
              <input
                type="text"
                placeholder="Search"
                className="input input-bordered w-64"
              />
            </div>
          </div>
          <div className="font-['barlow'] mt-12 flex space-x-8 ">
            <button>Makanan</button>
            <button>Minuman</button>
            <button>Cemilan</button>
          </div>
          <div className="mt-3">
            <hr
              style={{
                background: "white",
                height: "3px",
              }}
            />
          </div>

          <Makanan />
        </div>
      </div>
    </>
  );
}
