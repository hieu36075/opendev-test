import ArrowUpIcon from "@assets/icons/arrow-up.svg?react";
import MailIcon from "@assets/icons/email-icon.svg?react";
import FacebookIcon from "@assets/icons/facebook-icon.svg?react";
import InstagramIcon from "@assets/icons/instagram-icon.svg?react";
import PhoneIcon from "@assets/icons/phone-icon.svg?react";
import LogoImage from "@assets/image.png";

const Footer = () => {
  return (
    <footer className="flex flex-col justify-center w-full md:h-[319px] gap-6 bg-primary p-4 md:p-0">
      <div className="flex flex-col md:flex-row gap-3 md:items-center md:justify-between w-full max-w-[1280px] md:mx-auto px-5 py-2 md:p-0">
        <div className="max-h-[95px] max-w-[200px]">
          <img
            className="w-full h-full object-cover"
            src={LogoImage}
            loading="lazy"
            alt="logo"
          />
        </div>
        <p className="text-sm/[21px] max-w-[300px] font-space text-white">
          New entertainment centre FUN arena Cheb. You will find entertainment
          and sports activities for children and adults here.
        </p>
        <address className="flex md:items-end flex-col text-sm/[21px] font-normal gap-[10px] font-space text-white">
          Potočiště 3, 350 02 Odrava
          <br />
          <a
            className="text-sm/[18px] font-normal"
            href="mailto:fun@funarenacheb.cz"
          >
            fun@funarenacheb.cz
          </a>
          <a className="text-sm/[18px] font-normal" href="tel:+420737878891">
            +420737878891
          </a>
        </address>
      </div>
      <div className="flex flex-col md:flex-row items-center md:items-start justify-between w-full max-w-[1280px] mx-auto">
        <div className="flex gap-3 py-1 px-3 bg-dark-100 w-max rounded-[300px]">
          <FacebookIcon className="cursor-pointer" />
          <InstagramIcon className="cursor-pointer" />
          <MailIcon className="text-white cursor-pointer" />
          <div className="w-[32px] h-[32px] flex justify-center items-center">
          <PhoneIcon className="cursor-pointer w-[12px] h-[12px]" />
          </div>
        </div>
        <div className="flex items-center w-full md:max-w-[382px] px-5 md:px-0">
          <p className="font-normal font-space text-sm/[17.86px] text-center text-white mr-auto">
            © 2025 FUN Arena Cheb. All rights Reserved.
          </p>
          <button
            type="button"
            className="flex justify-center items-center bg-dark-100 rounded-full w-10 h-10 cursor-pointer"
          >
            <ArrowUpIcon className="text-[#D9D9D9]" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
