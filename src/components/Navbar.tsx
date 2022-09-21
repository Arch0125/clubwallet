import { ConnectButton } from '@rainbow-me/rainbowkit';
import * as React from 'react';

interface INavbarProps {
}

const Navbar: React.FunctionComponent<INavbarProps> = (props) => {
  return(
    <div className='flex flex-row p-3 justify-end items-center w-screen absolute z-1 bg-transparent ' >
        <ConnectButton/>
    </div>
  ) ;
};

export default Navbar;
