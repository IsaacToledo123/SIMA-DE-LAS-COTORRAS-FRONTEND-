import React, { useState, useEffect } from 'react';
import sima from "../img/sima_cotorras_principañ.webp";
import fondo_cotorras from "../img/fondo_login.jpeg"
import pintura_manitas from "../img/aventuras/PINTURA-MANITAS.jpg"
import icono from "../img/icons8-adelante-50.png"
import icono2 from "../img/icons8-atrás-50.png"

const Carousel = () => {
      const [currentSlide, setCurrentSlide] = useState(0);
      const images = [
            sima,
            fondo_cotorras,
            pintura_manitas,
      ];

      const nextSlide = () => {
            setCurrentSlide((prevSlide) => (prevSlide === images.length - 1 ? 0 : prevSlide + 1));
      };

      const prevSlide = () => {
            setCurrentSlide((prevSlide) => (prevSlide === 0 ? images.length - 1 : prevSlide - 1));
      };

      useEffect(() => {
            const interval = setInterval(() => {
                  nextSlide();
            }, 3000); // Cambia la imagen cada 3 segundos (puedes ajustar este valor)

            return () => clearInterval(interval); // Limpia el intervalo cuando el componente se desmonta o actualiza
      }, [currentSlide]);

      return (
            <div
                  id="carouselExampleCaptions"
                  className="relative "
                  data-te-carousel-init
                  data-te-ride="carousel"
            >
                  {/* ... (Indicators) ... */}

                  <div className="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
                        {/* Carousel items */}
                        {images.map((image, index) => (
                              <div
                                    key={index}
                                    className={`relative float-left -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none ${currentSlide === index ? 'block' : 'hidden'
                                          }`}
                                    data-te-carousel-item
                                    style={{ backfaceVisibility: 'hidden' }}
                              >
                                    <img src={image} className="block w-full " alt={`Slide ${index + 1}`} />
                              </div>
                        ))}
                  </div>

                  {/* Carousel controls - prev item */}
                  <button
                        className="absolute bottom-0 left-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
                        type="button"
                        data-te-target="#carouselExampleCaptions"
                        data-te-slide="prev"
                        onClick={prevSlide}
                  >
                        {/* ... Previous button content ... */}
                        <img src={icono2} alt="" className='text-white' />
                  </button>

                  {/* Carousel controls - next item */}
                  <button
                        className="absolute bottom-0 right-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
                        type="button"
                        data-te-target="#carouselExampleCaptions"
                        data-te-slide="next"
                        onClick={nextSlide}
                  >
                        {/* ... Next button content ... */}
                        <img src={icono} alt="" className='rounded-full' />
                  </button>
            </div>
      );
};

export default Carousel;


