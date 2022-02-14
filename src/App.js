import React from 'react';
import './App.css';
import Person from './components/Person';
import Header from './components/Header';
import Banner from './components/Banner';
import Body from './components/Body';
import Section from './components/Section';
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">
    <Header/>
    <Banner/>
    <Body/>
    <Section/>
    <Footer/>
    </div>
  );
}

export default App;
