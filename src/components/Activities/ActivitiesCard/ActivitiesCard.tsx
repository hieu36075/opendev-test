import { ActivitiesCardProps } from "./type";

const ActivitiesCard = ({
  isActive,
  setIsActive,
  item,
}: ActivitiesCardProps) => {
  const { name, poster } = item;
  const scaleClass = [isActive ? "" : "group-hover:scale-105"]
    .filter(Boolean)
    .join(" ");

  const bgClass = isActive
    ? "bg-gradient-to-l from-black/100 via-black/90 to-black/50 w-full"
    : "bg-gradient-to-l from-white via-white/100 to-transparent ";

  const textClass = isActive ? "text-white right-[55px]" : "text-dark-100 ";
  return (
    <div className="relative flex w-full max-w-[520px] h-[72px]">
      <div
        className={`absolute top-0 left-0 group cursor-pointer rounded-[8px] transition-all duration-300 ease-in-out ${
          isActive ? "w-[110%] xl:w-[520px]" : " -left-0 w-[90%] xl:w-[460px]"
        }`}
        onClick={setIsActive}
      >
        <img
          className={`w-full max-w-[280px] max-h-[72px] -skew-x-[20deg] object-cover object-[70%_30%] rounded-[8px] transition-all duration-300 ease-in-out overflow-hidden
            ${scaleClass}`}
          src={poster}
          alt={name}
        />

        <span
          className={`absolute inset-0 -skew-x-[20deg] rounded-[8px] transition-all duration-300 ease-in-out ${bgClass} ${scaleClass} `}
        />
        <p
          className={`absolute top-1/2 right-[33px] -translate-y-1/2 font-normal transition-all duration-300 ease-in-out font-big text-[32px]/[38.3px] ${textClass}`}
        >
          {name}
        </p>
      </div>
    </div>
  );
};

export default ActivitiesCard;
