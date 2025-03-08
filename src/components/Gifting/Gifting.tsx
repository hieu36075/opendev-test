import GiftImage from "@assets/gift-image.png";

const Gifting = () => {
  return (
    <div className="container-primary mx-auto px-4 xl:px-0 ">
      <div className="relative flex flex-col items-center bg-[#E30613] w-full max-w-[1000px]  xl:h-[109px] mx-auto rounded-[24px] px-4 py-2 gap-2 xl:p-0 xl:gap-0">
        <img
          className="absolute hidden xl:block -top-1/2 left-[1px] w-50 h-50"
          loading="lazy"
          src={GiftImage}
          alt="gift"
        />
        <div className="flex w-full  flex-col text-white text-center font-medium font-space ml-auto mr-[105px]">
          <p className="text-xl xl:text-[32px]/[40.83px]">
            Make somebody happy with a gift voucher{" "}
          </p>
          <p className="text-sm xl:text-base/[20.42px]">
            The voucher is valid for all services. Unforgettable experiences for
            children and adults!
          </p>
        </div>
        <button
          type="button"
          className="xl:absolute bg-white xl:top-1/2 xl:-right-[57.5px] xl:-translate-y-1/2  font-bold text-base/[20.42px] py-2 xl:py-3 px-4 xl:px-6 rounded-[8px] font-space cursor-pointer hover:opacity-90"
        >
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default Gifting;
