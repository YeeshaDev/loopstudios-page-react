import React from 'react';
import Navbar from './components/Navbar';
import Main from './components/Main';
import Card from './components/Card';
import Footer from './components/Footer'
import data from './data';
import './App.css';

export default function App() {

  const cards = data.map(item =>{
    return(
      <Card 
      key={item.id}
      img = {item.coverImg}
      title = {item.title}
      />
    )
  })
  return (
    <div className='container'>
      <Navbar />
      <Main />
      <div className='card-list'>
      {cards}
      </div>
      <Footer />
    </div>
  );
}
