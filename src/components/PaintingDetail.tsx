import React from 'react';

interface PaintingDetail {
  title: string;
  artist: string;
  year: number;
  description: string;
  price: string;
  shipping: string;
  images: string[];
}

const PaintingDetail: React.FC = () => {
  const painting: PaintingDetail = {
    title: "Wallowing Breeze",
    artist: "Hettie Richards",
    year: 2008,
    description: "Oil on canvas, 2008\n26 in x 23 in\nDescribes and absolve abstraction and texture. Plays between the lines of chaos and serenity. Perfect to be modern and contemporary styled interiors.",
    price: "$12,000",
    shipping: "Estimated to ship in 10 - 20 working days worldwide",
    images: ["public/IMG_4506.JPG", "public/DSC00954.jpg", "public/DSC08545.jpg"],
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans p-6">
      <main className="flex flex-col md:flex-row gap-6">
        <div className="w-full md:w-1/2">
          <img src={painting.images[0]} alt={painting.title} className="w-full h-96 object-cover rounded-lg shadow-md" />
          <div className="flex gap-2 mt-4">
            {painting.images.slice(1).map((img, index) => (
              <img key={index} src={img} alt={`${painting.title} thumbnail ${index + 1}`} className="w-24 h-24 object-cover rounded-lg shadow-md" />
            ))}
          </div>
        </div>
        <div className="w-full md:w-1/2 bg-white p-6 rounded-lg shadow-md">
          <a href="#" className="text-gray-600 hover:text-gray-800 mb-4 inline-block">← BACK</a>
          <h1 className="text-3xl font-bold mb-2">{painting.title}</h1>
          <p className="text-gray-600 mb-4">{painting.artist}</p>
          <p className="mb-4 whitespace-pre-line">{painting.description}</p>
          <p className="text-2xl font-bold mb-2">{painting.price}</p>
          <p className="text-gray-600 mb-4">{painting.shipping}</p>
          <button className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800">ADD TO CART</button>
          <p className="text-sm text-gray-500 mt-2">Taxes and shipping fees will apply upon checkout</p>
          <div className="flex gap-4 mt-4">
            <button className="text-gray-600 hover:text-gray-800">👁️ View in a room</button>
            <button className="text-gray-600 hover:text-gray-800">🔗 Share</button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PaintingDetail;