import { cn } from "@utils/cn";
import gsap from "gsap";

interface Props {
  title: string;
  subtitle: string;
  description: string;
  children: React.ReactNode;
  image: string;
}

export const MobileServiceCard = ({
  title,
  subtitle,
  description,
  children,
  image,
}: Props) => {

  return (
    <div 
      className="size-64 bg-[#1F1E21] border border-[#F7F0F0]/25 text-[#F7F0F0] rounded-lg relative shadow-md shadow-pink-800"
    >
      <div 
        className="w-full h-full absolute top-0 left-0 rounded-lg bg-cover bg-center"
        style={{ backgroundImage: `url('/img/${image}')` }}
      >
        <div className="w-full h-full bg-black/65 rounded-lg"></div>
      </div>
      <article className="relative z-1 flex flex-col items-center justify-center gap-3 h-full p-1.5">
        <div className="p-1.5 border-2 border-dashed rounded bg-neutral-600/20">
          {children}
        </div>
        <article className="text-center font-manrope">
          <h3 className="font-semibold">{title}</h3>
          <h4 className="text-xs underline decoration-error-300 underline-offset-4">{subtitle}</h4>
        </article>
        <p className="text-center font-light text-sm text-[#F5F5F5]">
          {description}
        </p>
      </article>
    </div>
  );
};
