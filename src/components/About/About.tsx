import ArrowRight from "@assets/icons/arrow-right.svg?react";
import { useRef, useState } from "react";
const About = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };
  return (
    <div className="container-primary mx-auto px-4">
      <div className="flex flex-col w-full max-w-[1280px] mx-auto gap-6 sm:gap-12">
        <div className="flex flex-col w-full max-w-[1047px] font-space text-white ml-auto gap-4 sm:gap-[32px]">
          <p className="text-4xl text-center md:text-7xl/[86.18px] md:text-start font-bold max-w-[390px] md:max-w-[578px] tracking-wider md:tracking-wide uppercase break-words md:break-all font-big mx-auto md:mx-0">
            New entertainment centre near Cheb
          </p>
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-0 items-end">
            <p className="text-center sm:text-start sm:max-w-[365px] text-base/[24px] sm:tracking-wide">
              We have been entertaining children and adults in western Bohemia
              for more than 10 years!
            </p>
            <button
              className="flex gap-3 py-[2px] items-center ml-auto cursor-pointer hover:opacity-80"
              type="button"
            >
              Find more abouts us
              <ArrowRight />
            </button>
          </div>
        </div>
        <div className="relative">
          <video
            className="rounded-[24px] object-cover max-h-[567px]"
            ref={videoRef}
            onClick={togglePlay}
            poster="https://s3-alpha-sig.figma.com/img/d63b/e1c5/ceaeb9ad7bd86f8ece75610b5cdc54b3?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Rqn3-7wGzHLFxEYazyd-6Jd8ARRTZBUhv3pKlceJue4QBoALUCGjr7NHwYdEsPxfFbkckU91x~w0b6UADEHazEHd7a-~TRwt8iRpgLR3Ni5Gkmmi76ZQ1T4OpgSBJ56J4h433qLr33ob69NkVO9ogLKnYEignXerqsFfNn1nZ1Wy4KbT47rpM88vus7Vpnf84Q2UqO5IO9OFLkVkEFc7K-yw2ca4h7-4MhHXgvjGTTdbNPyW1etuC4vgAPRBXDVJPMAEVROAGB9FyC2gNbg3M3zykliRth1Jx4rgpBCfmK1AZowUaDTZiZi81MiBWxnm4NbZzgcwnEiCliKAXUF2Sw__"
            width="1280"
            height="567"
          >
            <source />
            Trình duyệt của bạn không hỗ trợ video.
          </video>
          <button
            onClick={togglePlay}
            className={`absolute top-1/2 left-1/2 -translate-1/2 inset-0 flex items-center justify-center bg-[#009FE3] w-15 h-15 sm:w-20 sm:h-20 rounded-[12px] text-white text-3xl sm:text-4xl transition-opacity ${
              isPlaying ? "opacity-0" : "opacity-100"
            }`}
          >
            {isPlaying ? "⏸" : "▶"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
