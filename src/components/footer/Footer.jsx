import React from "react";
import apple from "../../assets/media/en.png";
import google from "../../assets/media/en-342.png";
import english from "../../assets/media/English.png";

export default function Footer() {
  const features = [
    {
      icon: "🌟",
      title: " Trusted by Travelers",
      description:
        "Rated 4.9 on TripAdvisor| 10,000+ happy adventurers sharing their stories.",
    },
    {
      icon: "💰",
      title: "50,000+ Journeys Completed",
      description:
        "From desert safaris to luxury cruises, weâve made dream vacations a reality.",
    },
    {
      icon: "💖",
      title: "Featured Worldwide",
      description:
        "Recognized by top travel blogs and media as a go-to agency for unforgettable trips.",
    },
    {
      icon: "😎",
      title: "24/7 Travel Support",
      description:
        "Questions? Need help? Our experts are just a call or message away, any time.",
    },
  ];
  return (
    <div >
      <div className="flex justify-center w-11/12 md:w-9/12 mx-auto ">
        <section className="my-8 rounded-lg p-6 flex md:flex-row flex-col-reverse gap-10 justify-between w-full">
          <div className="flex flex-col justify-center md:w-1/2 w-full md:px-6 px-0">
            <h2 className="text-2xl font-semibold">World at your tap.</h2>
            <p className="text-base text-gray-700 mt-2">
              Get the Headout app to get tickets on your phone and access app-only
              deals. Talk about win-win.
            </p>
          </div>
          <div className="flex flex-col md:flex-row items-end justify-end mt-4 gap-4 md:w-1/2 w-full">
            <img
              src={english}
              alt="App preview"
              className="w-full md:w-[450px] rounded-lg"
            />
          </div>
        </section>
      </div>
      <div className="w-11/12 md:w-9/12 mx-auto py-10">
        <div className="flex flex-wrap justify-center gap-6 py-10">
          {features.map((feature, index) => (
            <div key={index} className="w-11/12 sm:w-[240px] text-center">
              <div className="text-4xl mb-2">{feature.icon}</div>
              <h3 className="text-lg font-semibold">{feature.title}</h3>
              <p className="text-gray-600 text-sm mt-2">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
      <div className=" bg-gray-100  ">
        <footer className="py-20 mt-16 text-sm w-11/12 md:w-9/12 mx-auto">
          <div className="container mx-auto px-4 md:px-6 lg:px-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-lg font-semibold">Get Help 24/7</h3>
                <ul className="mt-4 space-y-2">
                  <li>📞 Call +13478970100</li>
                  <li>📧 support@headout.com</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold">Cities</h3>
                <ul className="mt-4 space-y-1">
                  <li>New York</li>
                  <li>Rome</li>
                  <li>Paris</li>
                  <li>+155 more</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold">Headout</h3>
                <ul className="mt-4 space-y-1">
                  <li>Our story</li>
                  <li>Careers</li>
                  <li>Newsroom</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold">We Accept</h3>
                <ul className="flex space-x-2 mt-4">
                  <li>Visa</li>
                  <li>PayPal</li>
                </ul>
                <div className="mt-4 bg-white rounded-lg shadow p-4 flex gap-4 md:justify-between justify-start">
                  <img src={apple} alt="QR Code" className="w-[110px] h-8" />
                  <img src={google} alt="QR Code" className="w-[110px] h-8" />
                </div>
              </div>
            </div>
          </div>
        </footer>

      </div>

    </div>
  );
}
