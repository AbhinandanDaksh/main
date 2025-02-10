import React, { useEffect, useRef, useState } from "react";
import {
  FaClock,
  FaMapMarkerAlt,
  FaBus,
  FaPlus,
  FaCheckCircle,
  FaStar,
} from "react-icons/fa";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { GrMapLocation } from "react-icons/gr";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "../../styles/marqueeVertical.css";
import image_1 from "../../assets/media/image_17.jpg";
import image_2 from "../../assets/media/image_18.jpg";
import image_3 from "../../assets/media/image_19.jpg";
import image_4 from "../../assets/media/image_20.jpg";
import image_5 from "../../assets/media/image_21.jpg";
import image_6 from "../../assets/media/image_22.jpg";
import image_7 from "../../assets/media/image_23.jpg";
import image_8 from "../../assets/media/image_24.jpg";

// Images
import flag1 from "../../assets/media/au.svg";
import flag2 from "../../assets/media/ae.svg";
import flag3 from "../../assets/media/at.svg";

const images = [
  image_1,
  image_2,
  image_3,
  image_4,
  image_5,
  image_6,
  image_7,
  image_8,
];

const TourInfo = () => {
  const [highlight, setHighlight] = useState(true);
  const [inclusions, setInclusions] = useState(true);
  const [exclusions, setExclusions] = useState(true);
  const [itinerary, setItinerary] = useState(true);
  const [cancellation, setCancellation] = useState(true);
  const [experience, setExperience] = useState(true);
  const [reviews, setReviews] = useState(true);
  const [cautions, setCautions] = useState(true);
  const [tickets, setTickets] = useState(true);
  const [place, setPlace] = useState(true);
  const [showNavbar, setShowNavbar] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById("hero");
      if (heroSection) {
        setShowNavbar(window.scrollY > heroSection.offsetHeight);
      }

      // Detect which section is active
      const sections = [
        "highlights",
        "inclusions",
        "exclusions",
        "itinerary",
        "cancellation",
        "reviews",
        "experience",
        "know",
        "tickets",
        "where",
      ];

      let currentSection = "";
      const offset = 150; // Adjust based on header height

      sections.forEach((id) => {
        const section = document.getElementById(id);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= offset && rect.bottom >= offset) {
            currentSection = id;
          }
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const swiperRef = useRef(null);

  useEffect(() => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.params.navigation.prevEl = ".swiper-button-prev";
      swiperRef.current.swiper.params.navigation.nextEl = ".swiper-button-next";
      swiperRef.current.swiper.navigation.init();
      swiperRef.current.swiper.navigation.update();
    }
  }, []);

  // Smooth Scroll with Offset
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      const offset = 120; // Adjust this value for extra space
      const sectionPosition =
        section.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: sectionPosition, behavior: "smooth" });
    }
  };

  return (
    <section className="bg-white w-full m-auto">
      <div
        className={`fixed top-[110px] left-0 w-full bg-white shadow-md transition-transform duration-300 z-50 hidden lg:block ${showNavbar ? "translate-y-0" : "-translate-y-full"
          }`}
      >
        <div className="flex justify-center gap-6 py-3 text-sm border-b">
          {[
            { id: "highlights", label: "Highlights" },
            { id: "inclusions", label: "Inclusions" },
            { id: "exclusions", label: "Exclusions" },
            { id: "itinerary", label: "Itinerary", isNew: true },
            { id: "cancellation", label: "Cancellation Policy" },
            { id: "reviews", label: "Reviews" },
            { id: "experience", label: "Your Experience" },
            { id: "know", label: "Know Before You Go" },
            { id: "tickets", label: "My Tickets" },
            { id: "where", label: "Where?" },
          ].map(({ id, label, isNew }) => (
            <button
              key={id}
              onClick={() => scrollToSection(id)}
              className={`px-2 transition-colors duration-200 ${activeSection === id
                ? "font-semibold border-b-2 border-black"
                : "text-gray-500"
                }`}
            >
              {label}
              {isNew && (
                <span className="ml-2 bg-pink-500 text-white text-[10px] px-2 py-0.5 rounded-full">
                  New
                </span>
              )}
            </button>
          ))}
        </div>
      </div>
      <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
            {[
              { icon: "⏱️", text: "Duration", content: "3 hours" },
              {
                icon: "✅",
                text: "Free cancellation",
                content: "Free cancellation up to 3 days before the start of your experience",
              },
              { icon: "🚐", text: "Transfers included", content: "" },
              {
                icon: "🍴",
                text: "Meals included",
                content: "Indulge in a sumptuous meal as a part of your experience",
              },
              { icon: "📱", text: "Mobile ticket", content: "" },
              { icon: "✔️", text: "Instant confirmation", content: "" },
            ].map((feature, idx) => (
              <div key={idx} className=" rounded-lg">
                <div className="flex items-center space-x-2">
                  <span className="text-4xl">{feature.icon}</span>
                  <div className="flex flex-col">
                    {/* Other Indexes → Bold Heading */}
                    <p className={`text-base text-gray-700 ${idx !== 0 ? "font-medium" : ""}`}>
                      {feature.text}
                    </p>

                    {/* Index 0 → Bold Description */}
                    {feature.content && (
                      <p className={`text-xs text-gray-700 ${idx === 0 ? "font-medium" : ""}`}>
                        {feature.content}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>




          <div className="">
            <p className="text-gray-700 md:text-base text-sm">
              Experience the magic of a sunrise hot air balloon ride over the
              landscapes of the Goreme Valley of Cappadocia, complete with
              snacks, champagne toast, and a flight certificate/medal.
            </p>
          </div>
          <div className="border">

          </div>

          {/* Highlights */}
          <div className="" id="highlights">
            <div className="flex justify-between">
              <h2 className="text-lg font-semibold text-gray-800 mb-4">
                Highlights
              </h2>
              <button
                className="-mt-2"
                onClick={() => {
                  setHighlight(!highlight);
                }}
              >
                {highlight ? (
                  <MdKeyboardArrowUp className="text-xl cursor-pointer" />
                ) : (
                  <MdKeyboardArrowDown className="text-xl cursor-pointer" />
                )}
              </button>
            </div>
            <ul
              className={`list-disc list-inside space-y-2 text-gray-600 md:text-base text-sm ${highlight ? "h-auto" : "h-[0px]"
                } overflow-hidden`}
            >
              <li>
                Soar high above the mystical landscapes of Cappadocia, witnessing the sun's first rays painting the Goreme Valley landscape gold, on a hot air balloon ride.
              </li>
              <li>Kickstart your adventure with a pick-up from your hotel, a hot cup of coffee or tea, and some breakfast snacks to fuel your flight.</li>
              <li>
                Float over the ancient caves, vineyards orchards, and rock-cut dwellings, soaking in panoramic views.
              </li>
              <li>
                Upon landing, celebrate your journey with a traditional champagne toast, a flight certificate to take home, or a royal medal to take home.
              </li>
              <li>
                Get to choose how intimate your experience is, fly with 28 other adventurers on the standard flight, or limit it to 20 on the premium flight/royal queen flight.
              </li>
              <li>
                Fun Fact: Hidden beneath Cappadocia’s exquisite landscape are over 50 underground cities!
              </li>
            </ul>
          </div>
          <div className="border-b"></div>

          {/* Inclusions */}
          <div id="inclusions">
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-semibold text-gray-800">Inclusions</h2>
              <button
                className="p-1 focus:outline-none"
                onClick={() => setInclusions(!inclusions)}
                aria-label={inclusions ? "Collapse inclusions" : "Expand inclusions"}
              >
                {inclusions ? (
                  <MdKeyboardArrowUp className="text-xl cursor-pointer" />
                ) : (
                  <MdKeyboardArrowDown className="text-xl cursor-pointer" />
                )}
              </button>
            </div>
            <ul
              className={`text-gray-600 md:text-base text-sm transition-all duration-300  ${inclusions ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
                } overflow-hidden`}
            >
              {[
                "50-75-minute Goreme Valley balloon flight",
                "Hotel pickup & drop-off.",
                "Transfer to the takeoff area",
                "Breakfast",
                "Non-alcoholic champagne",
                "Champagne toast & flight medal (as per option selected)",
                "Insurance",
                "After flight certification",
                "Group of 28 in standard flight (as per option selected)",
                "Group of 20 in premium flight (as per option selected)",
                "Group of 20-24 (as per option selected)",

              ].map((item, index) => (
                <li key={index} className="flex items-center gap-3 leading-8">
                  <img
                    src="https://www.headout.com/static/svg/tick.svg"
                    alt="Tick icon"
                    className="w-6 h-6"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="border-b"></div>

          {/* Exclusions */}
          <div className="" id="exclusions">
            <div className="flex justify-between">
              <h2 className="text-lg font-semibold text-gray-800 mb-4">
                Exclusions
              </h2>
              <button
                className="-mt-2"
                onClick={() => {
                  setExclusions(!exclusions);
                }}
              >
                {exclusions ? (
                  <MdKeyboardArrowUp className="text-xl cursor-pointer" />
                ) : (
                  <MdKeyboardArrowDown className="text-xl cursor-pointer" />
                )}
              </button>
            </div>
            <p
              className={`flex text-gray-600 md:text-base text-sm gap-3 ${exclusions ? "h-auto" : "h-[0px]"
                } overflow-hidden`}
            >
              <img src="https://www.headout.com/static/svg/close.svg"/>Photography & video (unavailable on the Royal queen bright morning flight)
            </p>
          </div>
          <div className="border-b"></div>

          {/* Itinerary */}
          <div className="bg-white md:px-0 lg:px-0" id="itinerary">
            <section className="my-8">
              <div
                className={` pb-16 mt-4 ${itinerary ? "h-auto" : "h-[0px]"
                  } overflow-hidden`}
              >
                <div className="flex justify-between mb-10">
                  <h2 className="text-lg font-medium">Itinerary</h2>
                  <button
                    className="-mt-2"
                    onClick={() => {
                      setItinerary(!itinerary);
                    }}
                  >
                    {itinerary ? (
                      <MdKeyboardArrowUp className="text-xl cursor-pointer" />
                    ) : (
                      <MdKeyboardArrowDown className="text-xl cursor-pointer" />
                    )}
                  </button>
                </div>
                <div className="flex md:flex-row flex-col md:items-center items-start justify-between border-b pb-4 md:text-base text-sm">
                  <div className="flex items-center space-x-2">
                    <FaClock className="text-gray-500" />
                    <span className="text-gray-700 text-sm">
                      Total Duration: 3 hours
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <FaPlus className="text-gray-500" />
                    <span className="text-gray-700 text-sm">
                      Mode of Transfer: Hot Air Balloon
                    </span>
                  </div>
                </div>

                <div className="mt-6">
                  <div className="relative flex items-start space-x-4">
                    <div className="absolute left-6 top-2 w-1 h-full bg-purple-500" />
                    <div className="w-5 h-5 bg-purple-500 rounded-full z-10" />
                    <div>
                      <h3 className="font-medium md:text-base text-sm">
                        Start Point: Cappadocia
                      </h3>
                      <a href="#" className="text-sm text-pink-600 underline">
                        Get direction
                      </a>
                      <p className="text-gray-700 mt-2 md:text-base text-sm">
                        Enjoy...
                      </p>
                      <div className="flex items-center mt-2 space-x-2">
                        <FaBus className="text-gray-500" />
                        <span className="text-gray-700 text-sm">A/C Bus</span>
                      </div>
                    </div>
                  </div>

                  <div className="relative flex items-start space-x-4 mt-8">
                    <div className="absolute left-6 top-2 w-1 h-full bg-gray-300" />
                    <div className="w-5 h-5 bg-gray-300 rounded-full z-10" />
                    <div>
                      <h3 className="font-medium md:text-base text-sm">
                        Passes By: Goreme Valley
                      </h3>
                      <button className="md:text-sm text-xs text-blue-600 underline flex items-center">
                        <FaPlus className="mr-1" />
                        View Details
                      </button>
                    </div>
                  </div>

                  <div className="relative flex items-start space-x-4 mt-8">
                    <div className="absolute left-2.5 top-2 w-1 bg-gray-300" />
                    <div className="w-5 h-5 bg-gray-300 rounded-full z-10" />
                    <div>
                      <h3 className="font-medium md:text-base text-sm">
                        End Point: Cappadocia
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
          <div className=" border-b"></div>

          {/* Cancellation Policy */}
          <div className="bg-white p-6 shadow rounded-lg" id="cancellation">
            <div className="flex justify-between">
              <h2 className="text-lg font-semibold text-gray-800 mb-4">
                Cancellation Policy
              </h2>
              <button
                className="-mt-2"
                onClick={() => {
                  setCancellation(!cancellation);
                }}
              >
                {cancellation ? (
                  <MdKeyboardArrowUp className="text-xl cursor-pointer" />
                ) : (
                  <MdKeyboardArrowDown className="text-xl cursor-pointer" />
                )}
              </button>
            </div>
            <p
              className={`text-gray-600 md:text-base text-sm ${cancellation ? "h-auto" : "h-[0px]"
                } overflow-hidden`}
            >
              ❌ You can cancel these tickets up to 3 days before the experience
              begins and get a full refund.
            </p>
          </div>

          {/* Reviews */}
          <div className="bg-white p-6 shadow rounded-lg" id="reviews">
            <div className="flex justify-between">
              <h2 className="text-lg font-semibold text-gray-800 mb-4">
                Reviews
              </h2>
              <button
                className="-mt-2"
                onClick={() => {
                  setReviews(!reviews);
                }}
              >
                {reviews ? (
                  <MdKeyboardArrowUp className="text-xl cursor-pointer" />
                ) : (
                  <MdKeyboardArrowDown className="text-xl cursor-pointer" />
                )}
              </button>
            </div>
            <div
              className={` text-gray-600 md:text-base text-sm ${reviews ? "h-auto" : "h-[0px]"
                } overflow-hidden`}
            >
              <div className="flex justify-between mb-8">
                <div className="flex items-center space-x-4">
                  <div className="text-4xl font-bold text-pink-500">4.6</div>
                  <div>
                    <div className="text-sm text-gray-600">(435 ratings)</div>
                    <div className="text-sm text-gray-500">
                      Guests from 20+ countries loved this experience.
                    </div>
                  </div>
                </div>
                <div className="w-1/2">
                  {[1, 2, 3, 4, 5].map((stars) => (
                    <div key={stars} className="flex items-center gap-2">
                      <span className="text-[#f60607] text-lg w-[100px] text-end">
                        {"★".repeat(stars)}
                      </span>
                      <div className="h-2 bg-gray-200 w-full rounded overflow-hidden">
                        <div
                          className="h-full bg-pink-500"
                          style={{ width: `${stars * 20}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              {/* Banner */}
              <div className="h-[80px] rounded-lg bg-[#fff5fc] flex gap-4 justify-start items-center p-8">
                <div className="relative w-[50px] h-[50px] overflow-hidden rounded-lg">
                  <div className="absolute w-full marquee">
                    {[flag1, flag2, flag3, flag1, flag2].map((item) => (
                      <img
                        src={item}
                        className="w-full mb-4 rounded-md"
                        alt=""
                      />
                    ))}
                  </div>
                </div>

                <span className="text-sm font-normal">
                  Guests from <span className="font-medium">India</span>,{" "}
                  <span className="font-medium">France</span>,{" "}
                  <span className="font-medium">Italy</span> and over{" "}
                  <span className="font-medium">29 countries</span> have loved
                  this experience
                </span>
              </div>
              {/* Swiper */}
              <div className="w-full max-w-5xl mx-auto">
                {/* Heading + Navigation Buttons in One Row */}
                <div className="flex justify-between items-center mt-8 mb-4">
                  <h2 className="text-lg font-semibold text-gray-800">
                    Snapshots from our guests
                  </h2>

                  {/* Navigation Buttons (Visible and Functional) */}
                  {/* <div className="flex space-x-2">
                    <button className="swiper-button-prev bg-white p-2 rounded-full shadow-md border">
                      ◀
                    </button>
                    <button className="swiper-button-next bg-white p-2 rounded-full shadow-md border">
                      ▶
                    </button>
                  </div> */}
                </div>

                {/* Swiper Carousel */}
                <div className="relative">
                  <Swiper
                    ref={swiperRef}
                    modules={[Navigation]}
                    slidesPerView={4}
                    spaceBetween={16}
                    // navigation={{}}
                    breakpoints={{
                      1024: { slidesPerView: 4 },
                      768: { slidesPerView: 2 },
                      640: { slidesPerView: 1 },
                    }}
                    className=""
                  >
                    {images.map((img, index) => (
                      <SwiperSlide key={index}>
                        <img
                          src={img}
                          alt={`Slide ${index}`}
                          className="rounded-xl w-[180px]"
                        />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </div>

              {/* Review details */}
              <div className="mt-8">
                {[
                  {
                    name: "Misha",
                    rating: 5,
                    comment:
                      "We have been reorganized on another day, since due to weather conditions it could not be carried out, the organization was good. I would repeat.!",
                  },
                  {
                    name: "Dayana",
                    rating: 5,
                    comment:
                      "That was fantastic. Anyone who is here should not miss it. Do the balloon ride and you'll see that it's an experience of a lifetime. The team was great. They were friendly, helpful, patient, hospitable and very",
                  },
                  {
                    name: "Eleonora",
                    rating: 5,
                    comment:
                      "The organization of the activity very efficient. They picked us up from the hotel and took us to Love Valley from where we left for the flight. The day before the activity they contacted me to confirm every",
                  },
                ].map((review, idx) => (
                  <div key={idx} className="border-b py-4">
                    <div className="flex justify-between items-center">
                      <div className="flex gap-4 justify-start items-center">
                        <div className="w-12 h-12 flex items-center justify-center bg-green-300 rounded-full text-lg font-bold">
                          😴
                        </div>
                        <div className="">
                          <h4 className="text-sm font-semibold m-0">
                            {review.name}
                          </h4>
                          <span className="text-sm text-pink-500 m-0">
                            {review.rating}{" "}
                            <span className="text-base mx-1">
                              {"★".repeat(5)}
                            </span>
                          </span>
                        </div>
                      </div>
                      <div className="text-gray-700 text-sm">Dec, 2024</div>
                    </div>
                    <p className="text-sm text-gray-600 mt-4">
                      {review.comment}
                    </p>
                  </div>
                ))}
                <button className="border border-black text-gray-800 text-sm px-4 py-2 rounded-lg mt-8 font-medium">
                  Show All Reviews
                </button>
              </div>
            </div>
          </div>

          {/* Your experience */}
          <div className="bg-white p-6 shadow rounded-lg" id="experience">
            <div className="flex justify-between">
              <h2 className="text-lg font-semibold text-gray-800 mb-4">
                Your experience
              </h2>
              <button
                className="-mt-4"
                onClick={() => {
                  setExperience(!experience);
                }}
              >
                {experience ? (
                  <MdKeyboardArrowUp className="text-xl cursor-pointer" />
                ) : (
                  <MdKeyboardArrowDown className="text-xl cursor-pointer" />
                )}
              </button>
            </div>
            <div
              className={` space-y-2 text-gray-600 md:text-base text-sm ${experience ? "h-auto" : "h-[0px]"
                } overflow-hidden`}
            >
              <div className="my-6">
                <h6 className="text-gray-800 md:text-base text-sm font-semibold">
                  Floating dream over mystical Cappadocia
                </h6>
                <p className="text-gray-600 md:text-base text-sm mt-4">
                  Embark on a magical adventure as you rise with the sun over
                  the enchanting landscape of Cappadocia. Your day starts with a
                  comfortable hotel pick-up, whisking you away to the launch
                  site. As you sip warm coffee, tea and enjoy breakfast snacks,
                  watch the spectacle of your hot air balloon being prepared
                  against the backdrop of the dawn sky. As you ascend, the sun's
                  first rays illuminate the scene below; a spectacular sight of
                  the vast valleys, and ancient cave dwellings.
                </p>
              </div>
              <div className="">
                <h6 className="text-gray-800 md:text-base text-sm font-semibold">
                  An aerial symphony of silence and beauty
                </h6>
                <p className="text-gray-600 md:text-base text-sm mt-4">
                  Begin your bucket-list journey, floating over vineyards,
                  orchards, and unique geological formations. The silence of the
                  sky is only broken by the occasional roar of the balloon's
                  burner and the gasps of awe from your fellow adventurers. As
                  your journey ends, celebrate the experience with a
                  non-alcoholic/alcoholic champagne toast and a commemorative
                  flight certificate. You will also receive a medal if you opt
                  for the Royal queen bright morning flight, another keepsake
                  from your flight. You’ll be shuttled back to your hotel,
                  leaving you to soak in the memories of the morning.
                </p>
              </div>
            </div>
          </div>

          {/* Before you go */}
          <div className="bg-white p-6 shadow rounded-lg" id="know">
            <div className="flex justify-between">
              <h2 className="text-lg font-semibold text-gray-800 mb-4">
                Know Before you go
              </h2>
              <button
                className="-mt-2"
                onClick={() => {
                  setCautions(!cautions);
                }}
              >
                {cautions ? (
                  <MdKeyboardArrowUp className="text-xl cursor-pointer" />
                ) : (
                  <MdKeyboardArrowDown className="text-xl cursor-pointer" />
                )}
              </button>
            </div>
            <div
              className={`list-disc list-inside  text-gray-600 md:text-base text-sm ${cautions ? "h-auto" : "h-[0px]"
                } overflow-hidden`}
            >
              <div className="mb-4 mt-6">
                <h6 className="text-gray-800 md:text-base text-sm font-semibold mb-2">
                  What to bring
                </h6>
                <ul
                  className={`list-disc list-inside space-y-2 text-gray-600 md:text-base text-sm`}
                >
                  <li>Please carry a valid Photo ID or passport.</li>
                  <li>
                    Bring along a light jacket as the weather can be chilly in
                    the morning.
                  </li>
                </ul>
              </div>
              <div className="mt-6">
                <h6 className="text-gray-800 md:text-base text-sm font-semibold mb-2">
                  What's not allowed
                </h6>
                <ul
                  className={`list-disc list-inside space-y-2 text-gray-600 md:text-base text-sm`}
                >
                  <li>
                    This experience is restricted for pregnant women, those with
                    mobility impairments and guests aged 4 and below.
                  </li>
                </ul>
              </div>
              <div className="mt-6">
                <h6 className="text-gray-800 md:text-base text-sm font-semibold mb-2">
                  Additional Information
                </h6>
                <ul
                  className={`list-disc list-inside space-y-2 text-gray-600 md:text-base text-sm`}
                >
                  <li>
                    Please note: While all flights take place in the morning, a
                    sunrise flight cannot be guaranteed in advance. The provider
                    offers one flight at sunrise and the other 15-30 mins after
                    sunrise. The assignment of the flight times is subject to
                    operational considerations provided by the government.
                  </li>
                  <li>
                    In the event of a weather-related cancellation, you are
                    entitled to a full refund or to reschedule your flight.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* My Tickets */}
          <div className="bg-white p-6 shadow rounded-lg" id="tickets">
            <div className="flex justify-between">
              <h2 className="text-lg font-semibold text-gray-800 mb-4">
                My Tickets
              </h2>
              <button
                className="-mt-2"
                onClick={() => {
                  setTickets(!tickets);
                }}
              >
                {tickets ? (
                  <MdKeyboardArrowUp className="text-xl cursor-pointer" />
                ) : (
                  <MdKeyboardArrowDown className="text-xl cursor-pointer" />
                )}
              </button>
            </div>
            <ul
              className={`list-disc list-inside space-y-2 text-gray-600 md:text-base text-sm ${tickets ? "h-auto" : "h-[0px]"
                } overflow-hidden`}
            >
              <li>Your voucher will be emailed to you shortly.</li>
              <li>
                Display the voucher on your mobile phone with a valid photo ID
                at the meeting point.
              </li>
              <li>
                Please arrive at the meeting point 15 minutes before the
                scheduled time of your tour to avoid any delays.
              </li>
              <li>
                Experience panoramic views of valleys, orchards, and more.
              </li>
              <li>
                Fun Fact: Cappadocia has over 50 underground cities waiting to
                be explored!
              </li>
            </ul>
          </div>

          {/* My Map */}
          <div className="bg-white p-6 shadow rounded-lg" id="where">
            <div className="flex justify-between">
              <h2 className="text-lg font-semibold text-gray-800 mb-4">
                Where ?
              </h2>
              <button
                className="-mt-2"
                onClick={() => {
                  setPlace(!place);
                }}
              >
                {place ? (
                  <MdKeyboardArrowUp className="text-xl cursor-pointer" />
                ) : (
                  <MdKeyboardArrowDown className="text-xl cursor-pointer" />
                )}
              </button>
            </div>
            <div
              className={`list-disc list-inside space-y-2 text-gray-600 md:text-base text-sm ${place ? "h-auto" : "h-[0px]"
                } overflow-hidden`}
            >
              <div className="flex gap-3 items-center">
                <GrMapLocation className="text-xl" />{" "}
                <span className="text-[#037b95]">Cappadocia, Cappadocia</span>
              </div>
              <iframe
                title="Map"
                src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d100138.497446985!2d35.09016036987305!3d38.34138870239258!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzjCsDIwJzI5LjAiTiAzNcKwMDUnMjQuNiJF!5e0!3m2!1sen!2sin!4v1738688412936!5m2!1sen!2sin"
                className="w-full mt-2"
                height={450}
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>

        {/* Sticky Availability Section */}
        <div className="lg:col-span-1">

          <div className=" sticky top-32 ">
            <section className=" bg-white border rounded-2xl shadow-lg p-6">
              {/* Pricing Section */}
              <div>
                <p className="text-sm text-gray-500 line-through">from ₹11,765</p>
                <p className="text-2xl font-semibold text-black">
                  ₹5,883{" "}
                  <span className="text-sm text-green-600 font-medium">
                    You save 50%
                  </span>
                </p>

                <div className="mt-4">
                  <label
                    htmlFor="select-date"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Select a date
                  </label>
                  <select
                    id="select-date"
                    className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm py-2 px-2 focus:outline-none focus:ring-[#ff4141] focus:border-[#ff4141] sm:text-sm text-xs"
                  >
                    <option>Select a date</option>
                    <option>January 26, 2025</option>
                    <option>January 27, 2025</option>
                    {/* Add more options as needed */}
                  </select>
                </div>

                <button className="mt-4 w-full bg-[#8000ff] text-white font-normal py-3 rounded-lg shadow-md hover:bg-[#8000ee] focus:outline-none focus:ring-2 focus:ring-[#ff4141] text-sm">
                  Check availability
                </button>
              </div>

              {/* Why Headout Section */}


            </section>
            <section className=" bg-white border rounded-2xl shadow-lg mt-4">
              <div className="mt-10" >
                <h3 className="text-lg font-semibold m-3  px-4">Why Headout?</h3>
                <div className="border"></div>
                <ul className="space-y-2 text-sm text-gray-600 m-3  px-4 ">
                  <li className="flex items-start">
                    <FaCheckCircle className="text-green-500 mt-1 mr-2" />
                    <span>Trusted platform used by 100K+ people, each month</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheckCircle className="text-green-500 mt-1 mr-2" />
                    <span>
                      Get the lowest prices and last minute availability
                    </span>
                  </li>
                  <li className="flex items-start">
                    <FaCheckCircle className="text-green-500 mt-1 mr-2" />
                    <span>Discover and connect with 10,000+ experiences</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheckCircle className="text-green-500 mt-1 mr-2" />
                    <span>
                      Browse verified reviews and professional photographs
                    </span>
                  </li>
                  <li className="flex items-start">
                    <FaCheckCircle className="text-green-500 mt-1 mr-2" />
                    <span>Have a question? Live chat with our experts 24/7</span>
                  </li>
                </ul>
              </div>

            </section>
          </div>
        </div>

        {/* <div className="lg:sticky lg:top-6">
          <div className="bg-white p-6 shadow rounded-lg">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">
              Check Availability
            </h2>
            <p className="text-gray-600 text-sm">
              Select your dates to see availability and prices.
            </p>
            <button className="mt-4 w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg md:text-base text-sm">
              Check Availability
            </button>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default TourInfo;
