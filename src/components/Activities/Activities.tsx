import PolygonIcon from "@assets/icons//polygon-icon.svg?react";
import { useRef, useState } from "react";
import Dot from "../Dot/Dot";
import ActivitiesCard from "./ActivitiesCard/ActivitiesCard";
import { ActivitiesData } from "./data";

const Activities = () => {
  const [currentCard, setCurrentCard] = useState<number>(0);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const handleChangeActiviesCard = (index: number) => {
    setCurrentCard(index);
  };

  const handleSwipe = () => {
    if (touchStartX.current - touchEndX.current > 50) {
      setCurrentCard((prev) => Math.min(prev + 1, ActivitiesData.length - 1));
    } else if (touchEndX.current - touchStartX.current > 50) {
      setCurrentCard((prev) => Math.max(prev - 1, 0));
    }
  };

  const handleTouchStart = (e: React.TouchEvent | React.MouseEvent) => {
    touchStartX.current = "touches" in e ? e.touches[0].clientX : e.clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent | React.MouseEvent) => {
    touchEndX.current =
      "changedTouches" in e ? e.changedTouches[0].clientX : e.clientX;
    handleSwipe();
  };

  return (
    <div className="flex flex-col gap-12 w-full max-w-[1280px] mx-auto px-4 xl:px-0">
      <div className="flex flex-col md:flex-row justify-between items-center w-full text-white font-space">
        <p className="font-bold text-5xl md:text-7xl/[86.18px] font-big">
          OUR ATTRACTIONS
        </p>
        <div className="flex gap-6">
          <p>Multiple activities at Fun Arena Cheb</p>
          <div className="flex">
            <PolygonIcon className="text-[#E30613]" />
            <PolygonIcon className="text-[#009FE3]" />
          </div>
        </div>
      </div>
      <div className="flex w-full items-center ">
        <div className="hidden md:flex flex-col w-full md:max-w-[40%] xl:max-w-[500px] gap-3">
          {ActivitiesData.map((item, index) => (
            <ActivitiesCard
              item={item}
              key={item.id}
              isActive={currentCard === index}
              setIsActive={() => handleChangeActiviesCard(index)}
            />
          ))}
        </div>
        <div className="relative flex w-full  md:max-w-[780px] md:ml-auto">
          <div
            className="relative flex w-full clip-mask"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            onMouseDown={handleTouchStart}
            onMouseUp={handleTouchEnd}
          >
            <div className="flex flex-row absolute -top-7 right-7 gap-1 md:hidden">
              {ActivitiesData.map((item, index) => (
                <Dot
                  key={item.id}
                  isActive={index === currentCard}
                  onClick={() => handleChangeActiviesCard(index)}
                />
              ))}
            </div>
            <div className="relative w-full md:max-w-[780px] h-[320px] md:h-[518px]">
              <img
                src={ActivitiesData[currentCard].poster}
                alt="Clipped Image"
                className="absolute w-full h-full object-cover clip-svg rounded-[20px] md:rounded-none"
              />
              <svg
                width="100%"
                height="100%"
                className="absolute top-0 left-0 md:w-[780px] h-[320px] md:h-[518px]"
              >
                <defs>
                  <clipPath id="clipPath">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M24 0H732C754.627 0 765.941 0 772.971 7.02944C780 14.0589 780 25.3726 780 48V418.97C780 441.598 780 452.912 772.971 459.941C765.941 466.97 754.627 466.97 732 466.97H653.294C642.752 466.97 637.48 466.97 632.999 468.865C630.04 470.116 627.363 471.949 625.126 474.253C621.737 477.744 619.828 482.658 616.01 492.485C612.193 502.312 610.284 507.226 606.895 510.717C604.657 513.022 601.98 514.854 599.022 516.105C594.54 518 589.269 518 578.726 518H24C10.7452 518 0 507.255 0 494V24C0 10.7452 10.7452 0 24 0Z"
                      fill="#D6D6D6"
                    />
                  </clipPath>
                </defs>
              </svg>

              <div className="absolute inset-0 bottom-0 bg-gradient-to-tr from-black/90 via-black/30 to-transparent p-4 rounded-bl-[20px]"></div>
              <p className="absolute bottom-13 md:bottom-[20px] left-[10px] text-white text-base/[20.42px] font-normal w-full max-w-[90%] md:max-w-[366px] tracking-wide">
                <span className="font-semibold text-2xl text-white font-space md:hidden">
                  {ActivitiesData[currentCard].name}
                </span>
                <br />
                Arena with lots of attractions for children and adults of all
                ages. Trampolines, climbing wall, ninja track and other
                attractions.
              </p>
            </div>
          </div>
          <button
            type="button"
            className="absolute bottom-2 right-1 md:bottom-0 md:right-0 bg-white text-black px-6 py-3 rounded-full font-bold text-base/[20.42px] cursor-pointer hover:opacity-80"
          >
            Find out more
          </button>
        </div>
      </div>
    </div>
  );
};

export default Activities;
