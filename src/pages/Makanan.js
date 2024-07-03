import Card from "../components/Card";
import image from "../assets/images/kopi_aidas.jpg";

export default function Makanan() {
  return (
    <>
      <div className="makanan mt-8">
        <h1 className="font-barlow text-[24px]">Makanan</h1>

        <div className="makanan-wrapper mt-20 flex flex-wrap gap-44 justify-start">
          <Card image={image} title={"Kopi Aidas"} desc={"IDR 8K"} />
          <Card image={image} title={"Kopi Aidas"} desc={"IDR 8K"} />
          <Card image={image} title={"Kopi Aidas"} desc={"IDR 8K"} />
          <Card image={image} title={"Kopi Aidas"} desc={"IDR 8K"} />
          <Card image={image} title={"Kopi Aidas"} desc={"IDR 8K"} />
          <Card image={image} title={"Kopi Aidas"} desc={"IDR 8K"} />
          <Card image={image} title={"Kopi Aidas"} desc={"IDR 8K"} />
          <Card image={image} title={"Kopi Aidas"} desc={"IDR 8K"} />
        </div>
      </div>
    </>
  );
}
