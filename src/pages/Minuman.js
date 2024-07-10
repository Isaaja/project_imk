import Card from "../components/Card";
import Kopi_aidas from "../assets/images/Minuman/Kopi_Aidas.jpg";
import Kopi_jolong from "../assets/images/Minuman/Kopi_Jolong.jpg";
import Kopi_susu from "../assets/images/Minuman/KopiSusu.jpg";
import Kopi_hitam from "../assets/images/Minuman/Kopi_Hitam.jpg";
import Wedang_jahe from "../assets/images/Minuman/Wedang_Jahe.jpg";
import Wedang_jahesusu from "../assets/images/Minuman/Wedang_JaheSusu.jpg";
import Wedang_rotisusu from "../assets/images/Minuman/Wedang_RotiSusu.jpg";
import Teh from "../assets/images/Minuman/Teh.jpg";
import Jeruk from "../assets/images/Minuman/Jeruk.jpg";
import Jus_alpukat from "../assets/images/Minuman/JusAlpukat.jpg";
import Jus_buahnaga from "../assets/images/Minuman/JusBuahNaga.jpg";
import Jus_jambu from "../assets/images/Minuman/JusJambu.jpg";
import Jus_jeruk from "../assets/images/Minuman/JusJeruk.jpg";
import Jus_melon from "../assets/images/Minuman/JusMelon.jpg";
import Jus_stroberi from "../assets/images/Minuman/JusStroberi.jpg";
import Shake_milo from "../assets/images/Minuman/Milo_MlikShake.jpg";
import Shake_oreo from "../assets/images/Minuman/OreoMilkShake.jpg";
import Shake_melon from "../assets/images/Minuman/MelonMilkShake.jpg";
import Shake_banana from "../assets/images/Minuman/BananaMilkShake.jpg";
import Shake_alpukat from "../assets/images/Minuman/AlpukatMilkShake.jpg";
import Shake_stroberi from "../assets/images/Minuman/StroberiMilkShake.jpg";
import Squash_leci from "../assets/images/Minuman/YakultLeci.jpg";
import Squash_manggo from "../assets/images/Minuman/YakultManggo.jpg";
import Squash_orange from "../assets/images/Minuman/YakultOrange.jpg";
import Squash_strawberry from "../assets/images/Minuman/YakultStrawberry.jpg";


export default function Minuman() {
   return (
      <>
         <div className="makanan mt-8">
            <h1 className="font-bold font-barlow text-[30px] ">Minuman</h1>
            <div className="makanan-wrapper mt-20 flex flex-wrap gap-44 justify-start">
               <Card image={Kopi_aidas} title={"Kopi Aidas"} desc={"IDR 8K"} />
               <Card image={Kopi_jolong} title={"Kopi Jolong"} desc={"IDR 8K"} />
               <Card image={Kopi_susu} title={"Kopi Susu"} desc={"IDR 10K"} />
               <Card image={Kopi_hitam} title={"Kopi Hitam"} desc={"IDR 8K"} />
               <Card image={Wedang_jahe} title={"Wedang Jahe Gula Merah"} desc={"IDR 8K"} />
               <Card
                  image={Wedang_jahesusu}
                  title={"Wedang Jahe Susu"}
                  desc={"IDR 10K"}
               />
               <Card
                  image={Wedang_rotisusu}
                  title={"Wedang Roti Susu"}
                  desc={"IDR 15K"}
               />
               <Card image={Teh} title={"Teh"} desc={"IDR 5K"} />
               <Card image={Jeruk} title={"Jeruk"} desc={"IDR 8K"} />
            </div>
            <h1 className="mt-8 font-barlow text-[24px]">Jus</h1>
            <div className="makanan-wrapper mt-20 flex flex-wrap gap-44 justify-start">
               <Card image={Jus_alpukat} title={"Jus Alpukat"} desc={"IDR 12K"} />
               <Card
                  image={Jus_buahnaga}
                  title={"Kopi Aidas"}
                  desc={"IDR 8K"}
               />
               <Card image={Jus_jambu} title={"Jus Jambu"} desc={"IDR 10K"} />
               <Card image={Jus_jeruk} title={"Jus Jeruk"} desc={"IDR 10K"} />
               <Card image={Jus_melon} title={"Jus Melon"} desc={"IDR 10K"} />
               <Card
                  image={Jus_stroberi}
                  title={"Jus Stroberi"}
                  desc={"IDR 10K"}
               />
            </div>
            <h1 className="mt-8 font-barlow text-[24px]">Shake</h1>
            <div className="makanan-wrapper mt-20 flex flex-wrap gap-44 justify-start">
               <Card
                  image={Shake_alpukat}
                  title={"Alpukat MilkShake"}
                  desc={"IDR 15K"}
               />
               <Card
                  image={Shake_banana}
                  title={"Pisang MilkShake"}
                  desc={"IDR 15K"}
               />
               <Card image={Shake_melon} title={"Melon MilkShake"} desc={"IDR 15K"} />
               <Card image={Shake_milo} title={"Milo MilkShake"} desc={"IDR 15K"} />
               <Card image={Shake_oreo} title={"Oreo MilkShake"} desc={"IDR 15K"} />
               <Card
                  image={Shake_stroberi}
                  title={"Stroberi MilkShake"}
                  desc={"IDR 15K"}
               />
            </div>
            <h1 className="mt-8 font-barlow text-[24px]">Squash</h1>
            <div className="makanan-wrapper mt-20 flex flex-wrap gap-44 justify-start">
               <Card image={Squash_leci} title={"Yakult Leci"} desc={"IDR 15K"} />
               <Card
                  image={Squash_manggo}
                  title={"Manggo Leci"}
                  desc={"IDR 15K"}
               />
               <Card
                  image={Squash_orange}
                  title={"Yakult Orange"}
                  desc={"IDR 15K"}
               />
               <Card
                  image={Squash_strawberry}
                  title={"Yakult Strawberry"}
                  desc={"IDR 15K"}
               />
            </div>
         </div>
      </>
   );
}
