import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import dubaiParks from "../../assets/media/fcb.avif";
import disneyland from "../../assets/media/uffizi-gallery.avif";
import empireState from "../../assets/media/disneyland-paris.avif";
import vatican from "../../assets/media/historic-royal-palaces.avif";

const ClientsCarousel = () => {
  const logos = [dubaiParks, disneyland, empireState,vatican,dubaiParks, disneyland, empireState,vatican,dubaiParks, disneyland, empireState,vatican,dubaiParks, disneyland, empireState,];

  return (
    <div className="w-full bg-white py-4">
     
      <Swiper
        modules={[Autoplay]}
        spaceBetween={15}
        // slidesPerView={10}
        loop={true}
        autoplay={{ delay: 0, disableOnInteraction: false,reverseDirection:true }}
        speed={3000}
        className="w-full"
        breakpoints={{
            320: { slidesPerView: 2, spaceBetween: 10 }, // Mobile
            480: { slidesPerView: 3, spaceBetween: 15 }, // Small screens
            768: { slidesPerView: 5, spaceBetween: 20 }, // Tablets
            1024: { slidesPerView: 7, spaceBetween: 25 }, // Laptops
            1280: { slidesPerView: 10, spaceBetween: 30 }, // Desktops
          }}
        // rev
      >
        {logos.map((logo, index) => (
          <SwiperSlide key={index} className="flex justify-center items-center">
            <img 
              src={logo} 
              alt={`Partner ${index + 1}`} 
              className="h-16 sm:h-20 md:h-24 lg:h-28 xl:h-32 w-auto object-contain" 
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ClientsCarousel;
