import FlagImage from "@assets/flag-image.png";
import PhoneIcon from "@assets/icons/phone-icon.svg?react";
import MaskBackgroud from "@assets/mask.svg?react";
import { useRef, useState } from "react";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Dot from "../Dot/Dot";
import { BannerData } from "./data";

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const swiperRef = useRef<SwiperType | null>(null);
  const handleClickDot = (index: number) => {
    if (swiperRef.current) {
      swiperRef.current.slideTo(index);
    }
    setCurrentSlide(index);
  };

  const handleSlideChange = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative w-full max-w-[1520px] mx-auto">
      <Swiper
        modules={[Autoplay]}
        slidesPerView={1}
        onSlideChange={(swiper) => {
          handleSlideChange(swiper.activeIndex);
        }}
        allowSlideNext
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        mousewheel={true}
        direction={"horizontal"}
        className="relative h-[660px] xl:h-[720px]"
        autoplay={{ delay: 5000 }}
      >
        {BannerData.map((item, index) => (
          <SwiperSlide
            className="flex flex-col relative w-screen h-full"
            key={index}
          >
            <div className="flex flex-col relative xl:absolute xl:bottom-[50px] xl:left-12 gap-4 xl:gap-6 pb-8 xl:pb-0  px-4 xl:px-0 z-5">
              <p className="font-bold text-7xl xl:text-[120px]/[143.62px] text-white font-big-shoulders-stencil">
                GO-KARTS
              </p>
              <div className="flex flex-col xl:flex-row text-[#D9D9D9] gap-3 xl:pr-[31px] justify-between">
                <p className="font-space font-normal text-sm/[17.86px] w-full xl:max-w-[347px] ">
                  Enjoy an adrenaline ride in any weather. Outdoor track and
                  indoor hall at a professional level with Sodi go-karts.
                </p>
                <div className="relative w-max xl:w-auto ml-auto flex cursor-pointer hover:opacity-50">
                  <span className="-skew-x-[20deg] rounded-[8px] border border-white w-[162px] h-[49px]"></span>
                  <p className="absolute top-1/2 left-1/2 -translate-1/2 w-[107px] font-space font-medium text-base/[20.42px]">
                    Find out more
                  </p>
                </div>
              </div>
              <div className="absolute bottom-2 xl:static flex gap-2">
                {BannerData.map((item, index) => (
                  <Dot
                    key={item.id}
                    isActive={index === currentSlide}
                    onClick={() => handleClickDot(index)}
                  />
                ))}
              </div>
            </div>
            <img
              className="w-full h-full object-cover"
              src={item.poster}
              alt={item.name}
            />
            <div className="absolute inset-0 bottom-0 bg-gradient-to-t from-black/90 via-black/10 to-transparent p-4 rounded-bl-[20px]"></div>
            <div
              className={`absolute bg-dark-100/50 sm:bg-transparent rounded-3xl flex flex-col bottom-6 xl:bottom-[50px] w-[90%] max-w-[382px] h-[150px] right-1 xl:right-12 text-[#D9D9D9] gap-3`}
            >
              <MaskBackgroud className="hidden sm:flex absolute xl:-top-0 xl:-left-0" />
              <div className="relative flex justify-end pr-4">
                <img
                  className="absolute -top-[40px] -left-[12px] w-[87px] h-[87px] object-center"
                  src={FlagImage}
                  alt="flag"
                />
                <p className="font-big font-normal text-xl sm:text-[32px]/[38.3px] max-w-[300px] ml-[60px]">
                  Everyday fun for everyone
                </p>
              </div>
              <p className="w-full sm:max-w-[352px] z-2 ml-[14px] font-space text-xs sm:text-sm">
                A few kilometers from Cheb, we have built a new entertainment
                centre{" "}
                <span className="bg-gradient-to-r from-[#009FE3] via-white to-[#E30613] bg-clip-text text-transparent">
                  FUN Arena Cheb
                </span>{" "}
                for you. You will find entertainment and sports activities for
                children and adults here.
              </p>
              <a
                className="bg-[#D9D9D9] font-lexend-deca font-bold text-base absolute -bottom-4 md:-bottom-4 right-0 md:right-0 flex items-center gap-2.5 text-dark-100 w-max ml-auto py-[4px] pl-[12px] rounded-[50px] pr-[4px] z-3 "
                href="tel:+420737878891"
              >
                +420737878891
                <span className="bg-[#E30613] w-[30px] h-[30px] p-2 rounded-full">
                  <PhoneIcon className="text-transparent w-[16px] h-[16px]" />
                </span>
              </a>
              <div className="bg-gradient-to-l from-[#E30613] via-transparent to-[#009FE3]/80 w-[100px] h-[100px] absolute -top-[50px] left-[120px] rounded-full blur-[30px]"></div>
              <div className="bg-gradient-to-b from-[#009FE3]/10 via-transparent to-[#E30613]/80 w-[168px] h-[168px] absolute -top-[3px] left-[150px] rounded-full blur-[30px]"></div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div
        className="hidden xl:flex absolute -bottom-15 left-[20%] xl:-bottom-8 xl:left-1/2 xl:-translate-x-1/2 z-[999] group
                  before:absolute before:-inset-10 before:rounded-full before:-z-10 
                  before:bg-gradient-to-l before:from-[#E30613] before:to-[#009FE3] 
                  before:blur-[15px] before:opacity-15 group-hover:before:opacity-100 
                  transition-opacity duration-300 before:w-[266px] before:rotate-[20deg] before:-top-9 before:left-[20px]"
      >
        <div
          className="absolute top-0 left-[98px] w-[166px] h-[65px] -skew-x-[20deg] rounded-[8px] 
                  "
        ></div>

        <div
          className="absolute top-0 left-[98px] w-[166px] h-[65px] -skew-x-[20deg] bg-[#E30613] 
                  rounded-[8px] transition-transform duration-300 group-hover:scale-105"
        ></div>

        <div
          className="w-[166px] h-[65px] -skew-x-[20deg] bg-[#009FE3] rounded-[8px] 
                  transition-transform duration-300 group-hover:scale-105"
        ></div>
        <span
          className="z-[99] absolute top-1/2 left-[30px] -translate-y-1/2 font-big w-max text-[#D9D9D9] 
               uppercase font-bold text-[32px]/[32px] transition-all duration-300 
               group-hover:scale-110 group-hover:text-white"
          style={{ wordSpacing: "50px" }}
        >
          Reverse now!
        </span>
      </div>
    </div>
  );
};

export default Banner;
