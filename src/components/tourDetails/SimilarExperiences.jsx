import React from "react";
import image_1 from "../../assets/media/image_17.jpg";
import image_2 from "../../assets/media/image_18.jpg";
import image_3 from "../../assets/media/image_19.jpg";
import image_4 from "../../assets/media/image_20.jpg";
import image_5 from "../../assets/media/image_21.jpg";
import image_6 from "../../assets/media/image_22.jpg";
import image_7 from "../../assets/media/image_23.jpg";
import image_8 from "../../assets/media/image_24.jpg";
import english from "../../assets/media/English.png";

import { MdDirectionsBike } from "react-icons/md";
import TourCardOne from "../cards/TourCardOne";
import TourCardTwo from "../cards/TourCardTwo";
import TourCardThree from "../cards/TourCardThree";

const SimilarExperiences = () => {
  return (
    <div className="px-4 md:px-16 lg:px-32">
      <section className="my-8">
        <h2 className="text-xl font-semibold text-gray-800">
          Similar experiences you'd love
        </h2>
        <div className="flex lg:flex-row flex-col items-center lg:justify-start justify-center gap-10 mt-6">
          {[image_1, image_2, image_3, image_4].map((item, index) => (
            <TourCardOne image={item} key={index} />
          ))}
        </div>
      </section>

      <section className="my-10">
        <h2 className="text-xl text-gray-800 font-semibold">
          Top things to do in Cappadocia
        </h2>
        <div className="flex lg:flex-row flex-col items-center lg:justify-start justify-center gap-10 mt-6">
          {[image_3, image_2, image_1, image_4].map((item, index) => (
            <TourCardTwo image={item} />
          ))}
        </div>
      </section>

      <section className="my-10">
        <h2 className="text-2xl font-semibold">Browse by themes</h2>
        <div className="flex flex-wrap gap-10 mt-4">
          {[
            "Hot Air Balloon Rides",
            "Day Trips",
            "Guided Tours",
            "Quad Biking",
            "Tours",
            "City Tours",
          ].map((theme, index) => (
            <button
              key={index}
              className="text-sm text-gray-600 flex gap-2 items-center underline"
            >
              <MdDirectionsBike />{theme}
            </button>
          ))}
        </div>
      </section>

      <section className="my-8">
        <h2 className="text-2xl font-semibold">Nearby cities to explore</h2>
        <div className="flex lg:flex-row flex-col items-center lg:justify-start justify-center gap-10 mt-6">
          {[image_5, image_6, image_7, image_8, image_5, image_6].map(
            (item, index) => (
             <TourCardThree image={item} />
            )
          )}
        </div>
      </section>

     
    </div>
  );
};

export default SimilarExperiences;
