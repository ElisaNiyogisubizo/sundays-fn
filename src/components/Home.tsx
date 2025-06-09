import React from 'react';

interface Painting {
  id: number;
  title: string;
  artist: string;
  year: number;
  image: string;
}

interface Artist {
  id: number;
  name: string;
  image: string;
}

const Home: React.FC = () => {
  const paintings: Painting[] = [
    { id: 1, title: "Wallowing Breeze", artist: "Hettie Richards", year: 2008, image: "public/2024-08-18-12-53-25-516.jpg" },
    { id: 2, title: "I Resistance", artist: "Eugenia Cohen", year: 2015, image: "public/DSC08156.jpg" },
    { id: 3, title: "Warm Racket", artist: "Jemy Hubbard", year: 2012, image: "public/Eustache_Art work.jpg" },
    { id: 4, title: "The Mondegut", artist: "Ria Avanti", year: 2009, image: "public/DSC08506.jpg" },
  ];
  const artists: Artist[] = [
    { id: 1, name: "Mike Lambert", image: "public/Eustache.jpg" },
    { id: 2, name: "Eugenia Cohen", image: "public/DSC08133.jpg" },
    { id: 3, name: "Jemy Hubbard", image: "public/Muirwa - Copy.jpg" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans p-6">
      <section className="mb-12">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">Featured Paintings</h2>
          <a href="#" className="text-gray-600 hover:text-gray-800">→</a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {paintings.map((painting) => (
            <div key={painting.id} className="bg-white shadow-md rounded-lg overflow-hidden">
              <img src={painting.image} alt={painting.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-semibold">{painting.title}</h3>
                <p className="text-sm text-gray-600">{painting.artist}, {painting.year}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-4">Featured Artists</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {artists.map((artist) => (
            <div key={artist.id} className="bg-white shadow-md rounded-lg overflow-hidden text-center">
              <img src={artist.image} alt={artist.name} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-semibold">{artist.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;