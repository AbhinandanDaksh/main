import React from "react";
import hero_vid from "../../assets/videos/homepage_hero.mp4";
import image_1 from "../../assets/media/image_17.jpg";
import image_2 from "../../assets/media/image_18.jpg";
import image_3 from "../../assets/media/image_19.jpg";
import image_4 from "../../assets/media/image_20.jpg";
import image_5 from "../../assets/media/image_21.jpg";
import image_6 from "../../assets/media/image_22.jpg";
import image_7 from "../../assets/media/image_23.jpg";
import image_8 from "../../assets/media/image_24.jpg";
import TourCardThree from "../../components/cards/TourCardThree";
import TourCardOne from "../../components/cards/TourCardOne";
import ReviewComponents from "./ReviewComponents"

export default function HomePage() {
  const features = [
    {
      icon: "🌟",
      title: "Only the finest",
      description:
        "At Headout, you only find the best. We do the hard work so you don't have to.",
    },
    {
      icon: "💰",
      title: "Greed is good",
      description:
        "With quality, you also get lowest prices, last-minute availability and 24x7 support.",
    },
    {
      icon: "💖",
      title: "Experience every flavour",
      description:
        "Offbeat or mainstream, a tour or a show, a game or a museum - we have 'em all.",
    },
    {
      icon: "😎",
      title: "No pain, only gain",
      description:
        "Didn't love it? We'll give you your money back. Not cocky, just confident.",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <div className="relative w-full h-[550px] overflow-hidden">
        <video
          className="absolute top-1/2 left-1/2 w-auto min-w-full min-h-full -translate-x-1/2 -translate-y-1/2"
          autoPlay
          loop
          muted
        >
          <source src={hero_vid} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute bottom-16 left-12 w-[600px]">
          <h4 className="text-white font-medium text-4xl">
            The world's best experiences curated just for you
          </h4>
          <div className="flex-grow max-w-md hidden sm:flex mt-4">
            <input
              type="text"
              placeholder="Search for experiences and cities"
              className="w-full px-4 py-2 border rounded-l-lg focus:outline-none focus:ring focus:border-blue-400 placeholder:text-sm"
            />
            <button className="px-4 py-2 bg-gray-100 border rounded-r-lg">
              <i className="fa fa-search"></i>
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center">
        <div className="w-[84%]">
          {/*features Cards */}
          <div className="flex flex-wrap justify-between gap-10 py-10 px-4 mt-10">
            {features.map((feature, index) => (
              <div key={index} className="w-[240px] text-center">
                <div className="text-4xl mb-2">{feature.icon}</div>
                <h3 className="text-lg font-semibold">{feature.title}</h3>
                <p className="text-gray-600 text-sm mt-2">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          {/* Explore world's top destinations */}
          <section className="my-10">
            <h2 className="text-2xl font-semibold text-gray-700">
              Explore world's top destinations
            </h2>
            <div className="flex justify-start gap-x-10 mt-6">
              {[image_1, image_2, image_3, image_4].map((item, index) => (
                <TourCardThree image={item} key={index} />
              ))}
            </div>
          </section>

          {/* Headout’s top recommendations */}
          <section className="my-10">
            <h2 className="text-2xl font-semibold text-gray-700">
              Similar experiences you'd love
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mt-6">
              {[image_1, image_2, image_3, image_4].map((item, index) => (
                <TourCardOne image={item} key={index} />
              ))}
            </div>
          </section>
        </div>
      </div>
      <div className="bg-black h-screen w-full">
        <div className="flex justify-center items-center">
          <div className="text-3xl font-bold text-white mb-6 flex justify-center items-center text-center w-[40%]">
            <h2 className="text-end ">Millions love heading out with us 💖</h2></div>
          <div className="w-[60%] text-white"> <ReviewComponents /></div>

        </div>


      </div>
     
    </div>
  );
}
