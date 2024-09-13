import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Hero = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <div className="relative top-4">
      <Slider {...settings}>
        {/* Slide 1 */}
        <div>
          <section
            className="text-center relative py-16 bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1668528378557-26ddb7e432a1?q=80&w=1904&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
            }}
          >
            <div className="py-16 px-4">
              <h1 className="text-5xl font-bold text-white mb-4">
                Beyond the Cities - Explore The Rural Charm
              </h1>
              <p className="text-lg text-white mb-8">
                Explore hidden gems, experience rural life, and share your
                own adventures.
              </p>
              <a
                href="/add-area"
                className="px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-blue-500 transition duration-300"
              >
                Add Your Area
              </a>
            </div>
          </section>
        </div>

        {/* Slide 2 */}
        <div>
          <section
            className="text-center relative py-16 bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://plus.unsplash.com/premium_photo-1694475501793-0d378480d190?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
            }}
          >
            <div className="py-16 px-4">
              <h1 className="text-5xl font-bold text-white mb-4">
              Beyond the Cities - Explore The Rural Charm
              </h1>
              <p className="text-lg text-white mb-8">
              Explore hidden gems, experience rural life, and share your
              own adventures.
              </p>
              <a
                href="/VirtualTour"
                className="px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-blue-500 transition duration-300"
              >
                Virtual Tour
              </a>
            </div>
          </section>
        </div>

        {/* Slide 3 */}
        <div>
          <section
            className="text-center relative py-16 bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://images.pexels.com/photos/2095948/pexels-photo-2095948.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
            }}
          >
            <div className=" py-16 px-4">
              <h1 className="text-5xl font-bold text-white mb-4">
                Experience the Rural Lifestyle
              </h1>
              <p className="text-lg text-white mb-8">
                Join the journey to explore rural life, from culture to
                nature.
              </p>
              <a
                href="/add-area"
                className="px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-blue-500 transition duration-300"
              >
                Add Your Adventure
              </a>
            </div>
          </section>
        </div>
      </Slider>
    </div>
  );
};

export default Hero;
