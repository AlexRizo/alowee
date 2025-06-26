import { cn } from "@utils/cn";

interface Props {
  title: string;
  description: string;
  children: React.ReactNode;
}

const cardGradient = 'lg:bg-neutral-600 bg-gradient-to-t from-[#822D78] to-[#6E2B66] group-hover:bg-primary-600 transition-colors'

export const HomeSliderCard = ({ title, description, children }: Props) => {
  return (
    <div
      role="group"
      className="p-[2px] rounded-lg bg-gradient-to-br lg:from-success-50 lg:to-[#B47EF4] from-[#B47EF4] to-info-50 w-min xl:hover:scale-110 lg:hover:scale-105 transition-all duration-300 cursor-pointer group mx-auto"
    >
      <div
        role="contentinfo"
        className={cn(cardGradient, "flex flex-col items-center justify-center xl:px-6 lg:px-4 px-2 rounded-lg xl:gap-3 gap-2 2xl:w-64 2xl:h-56 xl:w-58 xl:h-50 lg:w-50 lg:h-40 w-53.5 h-65")}
      >
        {children}
        <h3 className="text-center font-space-grotesk font-bold 2xl:text-2xl xl:text-xl lg:text-lg text-base lg:text-white text-[#F7F0F0]">{title}</h3>
        <p className="text-center xl:text-base lg:text-sm text-sm lg:text-white text-[#F7F0F0]">{description}</p>
      </div>
    </div>
  )
}
