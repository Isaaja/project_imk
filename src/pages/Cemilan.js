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
                  title={"Kopi Aidas"}
                  desc={"IDR 8K"}
               />
               <Card image={Nugget} title={"Kopi Aidas"} desc={"IDR 8K"} />
               <Card image={SosilKecil} title={"Kopi Aidas"} desc={"IDR 8K"} />
               <Card image={SosisBesar} title={"Kopi Aidas"} desc={"IDR 8K"} />
               <Card
                  image={TeloKrispiCokju}
                  title={"Kopi Aidas"}
                  desc={"IDR 8K"}
               />
               <Card
                  image={TeloKrispiOri}
                  title={"Kopi Aidas"}
                  desc={"IDR 8K"}
               />
               <Card
                  image={PisangKrispi}
                  title={"Kopi Aidas"}
                  desc={"IDR 8K"}
               />
               <Card image={PisangBakar} title={"Kopi Aidas"} desc={"IDR 8K"} />
               <Card
                  image={PisangGulungCoklat}
                  title={"Kopi Aidas"}
                  desc={"IDR 8K"}
               />
               <Card image={Piscok} title={"Kopi Aidas"} desc={"IDR 8K"} />
               <Card image={MendoanTahu} title={"Kopi Aidas"} desc={"IDR 8K"} />
               <Card image={Bakwan} title={"Kopi Aidas"} desc={"IDR 8K"} />
               <Card image={Cireng} title={"Kopi Aidas"} desc={"IDR 8K"} />
               <Card image={OnionRing} title={"Kopi Aidas"} desc={"IDR 8K"} />
               <Card image={RotiBakar} title={"Kopi Aidas"} desc={"IDR 8K"} />
               <Card image={RotiMaryam} title={"Kopi Aidas"} desc={"IDR 8K"} />
            </div>
         </div>
      </>
   );
}
