import * as React from 'react';
import axios from 'axios';
import GetAccount from '../hooks/GetAccount';
import { id } from 'ethers/lib/utils';

interface IEOABalanceProps {
}
    
    const EOABalance: React.FunctionComponent<IEOABalanceProps> = (props) => {
        
        const account = GetAccount();
        const[balances,setBalance]=React.useState([]);
        const[coins,setCoins]=React.useState([])
        const baseurl = `https://api.covalenthq.com/v1/80001/address/${account.props.children}/balances_v2/?key=ckey_ed0af45f6c99493486cf9b47e54`;
        
        React.useEffect(() => {
            axios.get(baseurl).then((res)=>{
                setBalance(res.data.data.items)
            })
        },[])
        
        console.log(balances)
        
        return(
            <div className='flex flex-col w-full  overflow-scroll ml-10 mt-14 p-4 shadow-lg border-[1px] border-purple-200 rounded-xl' >
                <label className='text-2xl font-medium text-purple-900' >Wallet Balances</label>
                <hr className='my-2' />
                { balances.length ?
                    (balances && balances.map((item)=>{
                        return(
                            <div className='flex flex-row w-full justify-between ' >
                                <label>{item['contract_name']}</label>
                                <label>{(item['balance']/(10**item['contract_decimals'])).toFixed(5)} &nbsp; {item['contract_ticker_symbol']}</label>
                            </div>
                        )
                    }
                )):<div>No Balance</div>}
            </div>
        );
};

export default EOABalance;