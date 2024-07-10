import Card from "../components/Card";
import Mie_nyemek from "../assets/images/Makanan/Mie_nyemek.jpg";
import Pasta from "../assets/images/Makanan/Pasta.jpg";
import Mie_kuah from "../assets/images/Makanan/Mie_Kuah.jpg";
import Bihun_kuah from "../assets/images/Makanan/Bihun_kuah.jpg";
import Kwetiaw_nyemek from "../assets/images/Makanan/Kwetiau_nyemek.jpg";
import Spagetti from "../assets/images/Makanan/Spagetti.jpg";
import Mie_goreng from "../assets/images/Makanan/Mie_Goreng.jpg";
import Nasi_goreng from "../assets/images/Makanan/Nasi+Goreng.jpg";
import Nasi_goreng_lombok_ijo from "../assets/images/Makanan/Nai_GorengLombokIjo.jpg";
import Nasi_putih from "../assets/images/Makanan/Nasi_Putih.jpg";
import Ayam_krispi from "../assets/images/Makanan/Ayam_Krispi.jpg";
import Ayam_goremg from "../assets/images/Makanan/Ayam_Goreng.jpg";
import Chicken_steak from "../assets/images/Makanan/Chicken_Steak.jpg";
import Chicken_katsu from "../assets/images/Makanan/Chicken_Katsu.jpg";
import Ceker_Setan from "../assets/images/Makanan/Ceker_Setan.jpg";
import Sayap_setan from "../assets/images/Makanan/Sayap_Setan.jpg";

export default function Makanan() {
   return (
      <>
         <div className="makanan mt-8">
            <h1 className="font-bold font-barlow text-[30px] ">Makanan</h1>
            <h1 className="font-barlow text-[24px] mt-4">Mie</h1>

            <div className="makanan-wrapper mt-20 flex flex-wrap gap-44 justify-start">
               <Card image={Mie_nyemek} title={"Mie Nyemek"} desc={"IDR 15K"} />
               <Card image={Pasta} title={"Pasta Macaroni Cheese"} desc={"IDR 18K"} />
               <Card image={Mie_kuah} title={"Mie Kuah"} desc={"IDR 15K"} />
               <Card image={Bihun_kuah} title={"Bihun Kuah"} desc={"IDR 15K"} />
               <Card
                  image={Kwetiaw_nyemek}
                  title={"Kwetiaw Nyemek"}
                  desc={"IDR 18K"}
               />
               <Card image={Spagetti} title={"Spagetti"} desc={"IDR 18K"} />
               <Card image={Mie_goreng} title={"Mie Goreng"} desc={"IDR 15K"} />
            </div>
            <h1 className="mt-8 font-barlow text-[24px]">Nasi</h1>
            <div className="makanan-wrapper mt-20 flex flex-wrap gap-44 justify-start">
               <Card image={Nasi_goreng} title={"Nasi Goreng"} desc={"IDR 15K"} />
               <Card
                  image={Nasi_goreng_lombok_ijo}
                  title={"Nasi Goreng Lombok Ijo"}
                  desc={"IDR 18K"}
               />
               <Card image={Nasi_putih} title={"Nasi Putih"} desc={"IDR 5K"} />
            </div>
            <h1 className="mt-8 font-barlow text-[24px]">Ayam</h1>
            <div className="makanan-wrapper mt-20 flex flex-wrap gap-44 justify-start">
               <Card image={Ayam_krispi} title={"Ayam Krispi"} desc={"IDR 20K"} />
               <Card
                  image={Ayam_goremg}
                  title={"Ayam Goreng"}
                  desc={"IDR 20K"}
               />
               <Card image={Chicken_steak} title={"Chicken Steak"} desc={"IDR 20K"} />
               <Card image={Chicken_katsu} title={"Chicken Katsu"} desc={"IDR 20K"} />
               <Card image={Ceker_Setan} title={"Ceker Setan"} desc={"IDR 15K"} />
               <Card image={Sayap_setan} title={"Sayap Setan"} desc={"IDR 18K"} />
            </div>
         </div>
      </>
   );
}
