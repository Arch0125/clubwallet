import React from 'react';
import logo from './logo.svg';
import './App.css';
import hero from './assets/bg.svg';

function App() {
  return (
    <div className='flex flex-col w-screen h-screen bg-hero-pattern justify-center items-center' >
      <p className='text-[4vmax] font-extrabold text-white' >Club.wallet</p>
      <p className='text-3xl font-thin text-white text-center'>Smart Treasury Management <br/> <label className='line-through'>DAOs and Organizations</label> <br/> for personal wallets</p>
      <div className='flex flex-row w-[25%] mt-10 justify-between' >
        <button className='w-[45%] py-2 bg-white text-slate-900 rounded-xl' >Join</button>
        <button className='w-[45%] py-2 bg-slate-900 border-2 border-white text-white rounded-xl' >Learn More</button>
      </div>
      <p className='mt-14 text-white font-medium mb-4 text-2xl' >Powered by</p>
      <div className='flex flex-row w-fit h-fit' >
          <img src='https://i.imgur.com/z3I75e4.png' className='w-10 rounded-full mx-2' />
          <img src='https://imgur.com/7FSB6gD.png' className='w-10 rounded-full mx-2' />
          <img src='https://i.imgur.com/QdgjyC5.png' className='w-10 rounded-full mx-2' />
          <img src='https://i.imgur.com/Kuucs6m.png' className='w-10 rounded-full mx-2' />
          <img src='https://i.imgur.com/pFAqQZA.png' className='w-10 rounded-full mx-2' />
          <img src='https://i.imgur.com/YTBBiIk.png' className='w-10 rounded-full mx-2' />
          <img src='https://i.imgur.com/91u9KTp.png' className='w-10 rounded-full mx-2' />
          <img src='https://i.imgur.com/u2APkxV.png' className='w-10 rounded-full mx-2' />
      </div>
    </div>
  );
}

export default App;
