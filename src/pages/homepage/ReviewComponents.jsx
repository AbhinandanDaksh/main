import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
};

const reviews = [
    {
        img: 'https://via.placeholder.com/300',
        name: 'D',
        location: 'Ireland',
        rating: 5,
        review: 'The Royal Palace is a feast for the eyes. It is beautiful with lots of rooms on show. The cost was very fair and we loved not having to queue to get out tickets.',
    },
    {
        img: 'https://via.placeholder.com/300',
        name: 'Ben',
        location: 'Belgium',
        rating: 5,
        review: 'The atmosphere created with the authentic set pieces on the real film location made you believe that you really have been in Hogwarts. Headout was very helpful in helping me book despite my disability.',
    },
    {
        img: 'https://via.placeholder.com/300',
        name: 'Sophie',
        location: 'France',
        rating: 5,
        review: 'A childhood dream, and I was waited for 10 years and it was worth the experience, a lot of fun. In for a day again!',
    }
];

const items = reviews.map((review, index) => (
    <div className=' p-4'>
        <div key={index} className="bg-gray-900 text-white rounded-2xl p-6 shadow-lg text-center">
        <img src={review.img} alt={review.name} className="w-24 h-24 object-cover rounded-full mx-auto" />
        <div className="mt-4">
            <h4 className="text-lg font-semibold">{review.name}</h4>
            <p className="text-sm text-gray-400">{review.location}</p>
            <p className="text-yellow-400">{'⭐'.repeat(review.rating)} {review.rating}/5</p>
            <p className="mt-2 text-gray-300">{review.review}</p>
        </div>
    </div>

    </div>
    
));

const Carousel = () => (
    <div className="max-w-6xl mx-auto py-12 text-center">
        
        <div className=' space-x-4'>
        <AliceCarousel
            mouseTracking
            items={items}
            responsive={responsive}
            autoPlay={true}
            infinite={true}
            disableDotsControls={true}
            disableButtonsControls={true}
            autoPlayInterval={3000}
        />

        </div>
       
    </div>
);

export default Carousel;
