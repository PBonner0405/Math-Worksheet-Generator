import React from 'react';

import Routes from './routes';
import Header from './pages/header';
import Footer from './pages/footer';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes></Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
