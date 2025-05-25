import logo from './logo.svg';
import './App.css';
import React from "react";
import Header from "./Header";
import Hero from "./Hero";
import Features from "./Features";
import Footer from "./Footer";
import Gallery from "./Gallery";
import "./styles.css";
import ImageCarousel from './ImageCarousel';

function App() {
  return (
    <div className="App">
       <Header />
      <Hero />
    {/*   <Gallery />  */}
    <ImageCarousel />
      <Features />
      <Footer />
    </div>
  );
}

export default App;
