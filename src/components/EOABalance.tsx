import * as React from 'react';
import axios from 'axios';
import GetAccount from '../hooks/GetAccount';

interface IEOABalanceProps {
}
    
    const EOABalance: React.FunctionComponent<IEOABalanceProps> = (props) => {
        
        const account = GetAccount();
        const[balanaces,setBalance]=React.useState(null);
        const baseurl = `https://api.covalenthq.com/v1/80001/address/${account.props.children}/balances_v2/?key=ckey_ed0af45f6c99493486cf9b47e54`;
        
        React.useEffect(() => {
            axios.get(baseurl).then((res)=>{
                setBalance(res.data)
            })
        },[])
        
        console.log(balanaces)
        
        return(
            <div>

    </div>
  ) ;
};

export default EOABalance;
