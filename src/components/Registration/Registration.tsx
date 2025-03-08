import QrImage from "@assets/qr-image.png";

const Registration = () => {
  return (
    <div className="container-primary px-4 xl:px-0 flex justify-center items-center mx-auto">
      <div className="flex flex-col xl:flex-row w-full max-w-[1280px] mx-auto">
        <div className="flex flex-col w-full xl:max-w-[566px] mr-auto text-white gap-3 md:gap-8">
          <p className="font-bold text-5xl text-center md:text-start md:text-7xl/[86.18px]">
            Registration
          </p>
          <p className="font-normal text-sm text-center md:text-start md:text-base font-space tracking-wide">
            For organizational and security reasons, every visitor to the FUN
            arena Cheb must register before entering the attraction. At the
            reception, your registration will be completed and you will receive
            a loyalty card which you will use for our services.
          </p>
        </div>
        <div className="flex mt-8 xl:mt-0 flex-col w-full xl:max-w-[634px]  font-space">
          <div className="flex flex-col w-full text-white">
            <div className="flex items-end w-full box-border">
              <div className="relative flex w-full max-w-[53px] h-[50px]">
                <span className="flex w-full h-full justify-center items-center bg-dark-100 rounded-[8px] z-1 -skew-x-[20deg]"></span>
                <p className=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[48%] font-bold text-7xl/[50px] text-[#009FE3] z-2 ">
                  1
                </p>
              </div>
              <div className="relative flex w-full h-[64px] pl-2 ">
                <span className="flex w-full h-full justify-center items-center bg-dark-100 rounded-[8px] z-1 -skew-x-[20deg]"></span>
                <p className=" absolute top-1/2 left-[8%] -translate-y-[50%] font-bold text-xl  md:text-2xl/[64px] text-[#009FE3] z-2 ">
                  Choose an Attraction
                </p>
              </div>
            </div>
            <p className="flex w-full font-normal pl-18 sm:pl-20 md:pl-25 pt-2 mb-12 tracking-wide">
              Choose from the attractions of the FUN arena.
            </p>
          </div>
          <div className="flex flex-col w-full text-white mt-4 sm:mt-12">
            <div className="flex items-end w-full box-border">
              <div className="relative flex w-full max-w-[53px] h-[50px]">
                <span className="flex w-full h-full justify-center items-center bg-dark-100/50 rounded-[8px] z-1 -skew-x-[20deg]"></span>
                <p className=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[48%] font-bold text-7xl/[50px] text-[#009FE3] z-2 ">
                  2
                </p>
              </div>
              <div className="relative flex w-full h-[64px] pl-2 ">
                <span className="flex w-full h-full justify-center items-center bg-dark-100 rounded-[8px] z-1 -skew-x-[20deg]"></span>
                <div className="flex md:justify-between items-center w-full xl:max-w-[368px] absolute top-1/2 left-[8%] -translate-y-[50%] z-2 ">
                  <p className="font-bold text-xl md:text-2xl/[64px] text-[#009FE3]">
                    Register
                  </p>
                  <button
                    type="button"
                    className="flex absolute right-12 sm:right-20 sm:mr-0 md:right-60 xl:right-0 px-2 py-1 bg-red-500 rounded-[8px] text-sm/[17.86px] font-bold w-[87px] h-[26px] cursor-pointer"
                  >
                    Click here
                  </button>
                </div>
                <img
                  className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 absolute top-20 -right-2 md:top-4 sm:right-5 z-2"
                  src={QrImage}
                  alt="qr"
                />
              </div>
            </div>
            <p className="flex w-full max-w-[70%] xs:max-w-[78%] xl:max-w-[468px] text-base/[24px] font-normal pl-18 sm:pl-20 md:pl-25 pt-2 mb-12 tracking-wide md:tracking-wider">
              You can register at the reception or by clicking the button above
              from the comfort of your home.
            </p>
          </div>
          <div className="flex flex-col w-full text-white mt-4 sm:mt-12">
            <div className="flex items-end w-full box-border">
              <div className="relative flex w-full max-w-[53px] h-[50px]">
                <span className="flex w-full h-full justify-center items-center bg-dark-100/50 rounded-[8px] z-1 -skew-x-[20deg]"></span>
                <p className=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[48%] font-bold text-7xl/[50px] text-[#009FE3] z-2 ">
                  3
                </p>
              </div>
              <div className="relative flex w-full h-[64px] pl-2 ">
                <span className="flex w-full h-full justify-center items-center bg-dark-100 rounded-[8px] z-1 -skew-x-[20deg]"></span>
                <p className=" absolute top-1/2 left-[8%] -translate-y-[50%] font-bold text-xl md:text-2xl/[64px] text-[#009FE3] z-2 ">
                  Have Fun
                </p>
              </div>
            </div>
            <p className="flex w-full xl:max-w-[434px] font-normal pl-18 sm:pl-20 md:pl-25 pt-2 tracking-wide">
              Thank you for your online registrations. For each purchase you get
              points, which you can apply to our services and attractions then.
              We look forward to you!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
