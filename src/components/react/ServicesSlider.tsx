import { cn } from "@utils/cn"
import { Triangle } from "lucide-react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation } from "swiper/modules"
import { servicesWithLongDescription } from "@utils/data"
import { ServicesSliderCard } from "./ServicesSliderCard"

const buttonStyle = 'absolute top-1/2 -translate-y-1/2 z-10 bg-purple-400 rounded-full 2xl:p-3 lg:p-2 after:hidden cursor-pointer'
export const ServicesSlider = () => {
  return (
    <div className="relative w-full h-full mx-auto">
    <button className={cn(buttonStyle, 'custom-prev left-0 -rotate-90')}>
      <Triangle fill="white" className="2xl:size-6 lg:size-5"/>
    </button>
    <button className={cn(buttonStyle, 'custom-next right-0 rotate-90')}>
      <Triangle fill="white" className="2xl:size-6 lg:size-5"/>
    </button>

  <Swiper
    slidesPerView={3}
    spaceBetween={10}
    loop
    className="mySwiper h-full w-9/10"
    navigation={{
      nextEl: ".custom-next",
      prevEl: ".custom-prev",
    }}
    modules={[ Navigation ]}
  >
    {servicesWithLongDescription.map((service) => (
      <SwiperSlide key={service.id} className="h-full">
        <ServicesSliderCard
          title={service.title}
          subtitle={service.subtitle}
          description={service.description}
          image={service.image}
        >
          <service.icon strokeWidth={1.5} className="2xl:size-11 xl:size-10 lg:size-9"/>
        </ServicesSliderCard>
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
  )
}
