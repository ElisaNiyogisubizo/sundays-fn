import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import PaintingDetail from './components/PaintingDetail';

const App: React.FC = () => {
  const [page, setPage] = useState<'home' | 'detail'>('home');

  return (
    <div>
      <Navbar />
      {page === 'home' ? <Home /> : <PaintingDetail />}
      <button
        onClick={() => setPage(page === 'home' ? 'detail' : 'home')}
        className="m-4 p-2 bg-blue-500 text-white rounded"
      >
        Toggle to {page === 'home' ? 'Painting Detail' : 'Home'}
      </button>
    </div>
  );
};

export default App;