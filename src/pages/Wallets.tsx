import * as React from 'react';

interface IWalletsProps {
}

const Wallets: React.FunctionComponent<IWalletsProps> = (props) => {
  return (
      <div className='flex flex-col w-screen h-screen bg-hero-pattern justify-center p-14' >
        <p className='text-white text-3xl font-bold mb-7'>Welcome Back !</p>
        <div className='flex flex-row justify-between items-start h-[30%]' >
            <button className='flex flex-col h-full w-[15%] p-6 bg-white rounded-2xl justify-center items-center'>
                <p className='font-bold text-xl' >Add New Vault</p>
            </button>
        </div>
    </div>
  );
};

export default Wallets;
