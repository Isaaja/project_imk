import Card from "../components/Card";
import KentangGoreng from "../assets/images/Cemilan/KentangGoreng.jpg";
import Nugget from "../assets/images/Cemilan/Nugget.jpg";
import SosilKecil from "../assets/images/Cemilan/SosisKecil.jpg";
import SosisBesar from "../assets/images/Cemilan/SosisBesar.jpg";
import TeloKrispiOri from "../assets/images/Cemilan/TeloKrispiOri.jpg";
import TeloKrispiCokju from "../assets/images/Cemilan/TeloKrispiCokju.jpg";
import PisangKrispi from "../assets/images/Cemilan/PisangKrispi.jpg";
import PisangBakar from "../assets/images/Cemilan/PisangBakar.jpg";
import PisangGulungCoklat from "../assets/images/Cemilan/PisangGulungCok.jpg";
import Piscok from "../assets/images/Cemilan/Piscok.jpg";
import MendoanTahu from "../assets/images/Cemilan/MendoanTahu.jpg";
import Bakwan from "../assets/images/Cemilan/Bakwan.jpg";
import Cireng from "../assets/images/Cemilan/Cireng.jpg";
import OnionRing from "../assets/images/Cemilan/OnionRing.jpg";
import RotiBakar from "../assets/images/Cemilan/RotiBakar.jpg";
import RotiMaryam from "../assets/images/Cemilan/RotiMaryam.jpg";

export default function Cemilan() {
   return (
      <>
         <div className="makanan mt-8">
            <h1 className="font-bold font-barlow text-[30px] ">Cemilan</h1>

            <div className="makanan-wrapper mt-20 flex flex-wrap gap-44 justify-start">
               <Card
                  image={KentangGoreng}
                  title={"Kentang Goreng"}
                  desc={"IDR 10K"}
               />
               <Card image={Nugget} title={"Nugget"} desc={"IDR 10K"} />
               <Card image={SosilKecil} title={"Sosis Kecil"} desc={"IDR 10K"} />
               <Card image={SosisBesar} title={"Sosis Besar"} desc={"IDR 15K"} />
               <Card
                  image={TeloKrispiCokju}
                  title={"Telo Krispi Cokju"}
                  desc={"IDR 10K"}
               />
               <Card
                  image={TeloKrispiOri}
                  title={"Telo Krispi Ori"}
                  desc={"IDR 8K"}
               />
               <Card
                  image={PisangKrispi}
                  title={"Pisang Krispi"}
                  desc={"IDR 12K"}
               />
               <Card image={PisangBakar} title={"Pisang Bakar"} desc={"IDR 12K"} />
               <Card
                  image={PisangGulungCoklat}
                  title={"Pisang GUlung Coklat"}
                  desc={"IDR 15K"}
               />
               <Card image={Piscok} title={"Piscok"} desc={"IDR 10K"} />
               <Card image={MendoanTahu} title={"Mendoan Tahu / Tempe"} desc={"IDR 8K"} />
               <Card image={Bakwan} title={"Bakwan Sayur / Jagung"} desc={"IDR 8K"} />
               <Card image={Cireng} title={"Cireng"} desc={"IDR 10K"} />
               <Card image={OnionRing} title={"Onion Ring"} desc={"IDR 15K"} />
               <Card image={RotiBakar} title={"Roti Bakar"} desc={"IDR 15K"} />
               <Card image={RotiMaryam} title={"Roti Maryam"} desc={"IDR 15K"} />
            </div>
         </div>
      </>
   );
}
