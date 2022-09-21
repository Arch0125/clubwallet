import { ConnectButton } from '@rainbow-me/rainbowkit';
import * as React from 'react';
import GetAccount from '../hooks/GetAccount';

interface IEOADetailsProps {
}

const EOADetails: React.FunctionComponent<IEOADetailsProps> = (props) => {
  const account = GetAccount();
  return(
    <div className='flex flex-col w-[30%] h-fit shadow-lg border-[1px] border-purple-200 rounded-2xl p-4 mt-14 ' >
        <p className='text-purple-900 font-medium text-2xl'>Personal Wallet</p>
        <br/>
        <p>{account}</p>
    </div>
  ) ;
};

export default EOADetails;
