import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="bg-gray-100">
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <h2 className="text-5xl font-extrabold text-center mb-12 text-gray-800 tracking-tight">
          What Our Visitors Say
        </h2>
        <Slider {...settings} className="mx-auto">
          {/* Testimonial 1 */}
          <div className="bg-gray-300 shadow-lg rounded-lg p-8 transition-transform duration-300 hover:scale-105 mx-4">
            <p className="text-gray-700 text-lg leading-relaxed italic mb-6">
              "Our trip to the countryside was life-changing! The people were so welcoming, and the scenery was breathtaking."
            </p>
            <p className="text-right text-gray-900 font-semibold">- Alex Johnson</p>
          </div>

          {/* Testimonial 2 */}
          <div className="bg-gray-300 shadow-lg rounded-lg p-8 transition-transform duration-300 hover:scale-105 mx-4">
            <p className="text-gray-700 text-lg leading-relaxed italic mb-6">
              "I loved exploring the rural areas, from the charming villages to the open landscapes. I'll definitely be back!"
            </p>
            <p className="text-right text-gray-900 font-semibold">- Emily Carter</p>
          </div>

          {/* Testimonial 3 */}
          <div className="bg-gray-300 shadow-lg rounded-lg p-8 transition-transform duration-300 hover:scale-105 mx-4">
            <p className="text-gray-700 text-lg leading-relaxed italic mb-6">
              "If you're looking to get away from the city and experience real tranquility, this is the place to go!"
            </p>
            <p className="text-right text-gray-900 font-semibold">- Daniel Parker</p>
          </div>
        </Slider>
      </section>
    </div>
  );
};

export default Testimonials;
