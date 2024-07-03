const Card = ({ image, title, desc }) => {
  return (
    <>
      <div className="card w-[280px] h-[360px] relative flex flex-col justify-end">
        <div className="card-wrapper w-full h-[90%] bg-primary rounded-xl">
          <div className="image-wrapper absolute -top-10 w-full flex justify-center">
            <img
              src={image}
              alt="kopi_aidas"
              width={180}
              height={180}
              className=" rounded-full"
            />
          </div>

          <div className="desc-wrapper flex flex-col gap-2 items-center justify-end w-full h-full pb-16 font-barlow text-[26px]">
            <h1 className="font-medium">{title}</h1>
            <p className="font-light">{desc}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
