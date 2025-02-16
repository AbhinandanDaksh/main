// import React from 'react';
// import AliceCarousel from 'react-alice-carousel';
// import 'react-alice-carousel/lib/alice-carousel.css';
// import review1 from "../../assets/media/review1.jpg";

// const responsive = {
//     0: { items: 1 },
//     568: { items: 2 },
//     1024: { items: 2 },
// };

// const reviews = [
//     {
//         img: review1,
//         name: 'Daek john',
//         location: 'Ireland',
//         rating: 5,
//         review: 'The Royal Palace is a feast for the eyes. It is beautiful with lots of rooms on show. The cost was very fair and we loved not having to queue to get out tickets.',
//     },
//     {
//         img: review1,
//         name: 'Ben',
//         location: 'Belgium',
//         rating: 5,
//         review: 'The atmosphere created with the authentic set pieces on the real film location made you believe that you really have been in Hogwarts. Headout was very helpful in helping me book despite my disability.',
//     },
//     {
//         img: review1,
//         name: 'Sophie',
//         location: 'France',
//         rating: 5,
//         review: 'A childhood dream, and I was waited for 10 years and it was worth the experience, a lot of fun. In for a day again!',
//     }
// ];

// const items = reviews.map((review, index) => (
//     <div key={index} className="p-4">
//         <div className="flex flex-col justify-start items-center min-w-[320px] max-w-auto h-[600px] 
//         text-white backdrop-blur-md overflow-hidden rounded-lg shadow-lg border border-1 border-gray-800">
//             <img src={review.img} alt={review.name} className="w-full h-full object-cover rounded-t-lg" />
//             <div className="mt-4 text-center p-5">
//                 <div className='flex justify-between'>
//                     <div>
//                         <h4 className="text-lg font-semibold">{review.name}</h4>
//                         <p className="text-sm text-gray-400">{review.location}</p>
//                     </div>
//                     <div>
//                         <p className="text-yellow-400">{'⭐'.repeat(review.rating)} {review.rating}/5</p>
//                     </div>
//                 </div>
//                 <p className="mt-2 text-gray-300">{review.review}</p>
//             </div>
//         </div>
//     </div>
// ));

// const Carousel = () => (
//     <div className=" py-12 text-center">
//         <div className='w-full'>
//             <AliceCarousel
//                 mouseTracking
//                 items={items}
//                 responsive={responsive}
//                 autoPlay
//                 infinite
//                 disableDotsControls
//                 disableButtonsControls
//                 autoPlayInterval={3000}
//                 stagePadding={{ paddingLeft: 20, paddingRight: 20 }} // Extra spacing to prevent overlap
//                 paddingLeft={20}
//                 paddingRight={20}
//             />
//         </div>
//     </div>
// );

// export default Carousel;


import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import review1 from "../../assets/media/review1.jpg";

const responsive = {
    0: { items: 1 },
    768: { items: 2 },
    1024: { items: 2 },
};

const reviews = [
    {
        img: review1,
        name: 'Daek John',
        location: 'Ireland',
        rating: 5,
        review: 'The Royal Palace is a feast for the eyes. It is beautiful with lots of rooms on show. The cost was very fair and we loved not having to queue to get out tickets.',
    },
    {
        img: review1,
        name: 'Ben',
        location: 'Belgium',
        rating: 5,
        review: 'The atmosphere created with the authentic set pieces on the real film location made you believe that you really have been in Hogwarts. Headout was very helpful in helping me book despite my disability.',
    },
    {
        img: review1,
        name: 'Sophie',
        location: 'France',
        rating: 5,
        review: 'A childhood dream, and I was waited for 10 years and it was worth the experience, a lot of fun. In for a day again!',
    }
];

const items = reviews.map((review, index) => (
    <div key={index} className="p-4 w-full">
        <div className="flex flex-col justify-start items-center w-full 
        h-[550px] text-white backdrop-blur-md overflow-hidden 
        rounded-lg shadow-lg border border-gray-800">
            <img src={review.img} alt={review.name} className="w-full h-[50%] object-cover rounded-t-lg" />
            <div className="p-6 w-full text-center">
                <div className='flex justify-between'>
                    <div>
                        <h4 className="text-lg font-semibold">{review.name}</h4>
                        <p className="text-sm text-gray-400">{review.location}</p>
                    </div>
                    <div>
                        <p className="text-yellow-400">{'⭐'.repeat(review.rating)} {review.rating}/5</p>
                    </div>
                </div>
                <p className="mt-4 text-gray-300">{review.review}</p>
            </div>
        </div>
    </div>
));

const Carousel = () => (
    <div className="w-full py-12">
        <AliceCarousel
            mouseTracking
            items={items}
            responsive={responsive}
            autoPlay
            infinite
            disableDotsControls
            disableButtonsControls
            autoPlayInterval={3000}
            paddingLeft={10}
            paddingRight={10}
        />
    </div>
);

export default Carousel;
