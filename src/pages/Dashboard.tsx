import * as React from 'react';
import EOABalance from '../components/EOABalance';
import EOADetails from '../components/EOADetails';

interface IDashboardProps {
}

const Dashboard: React.FunctionComponent<IDashboardProps> = (props) => {

    const arr = [1,2,3];

  return(
    <div className='flex flex-col w-screen h-screen bg-white text-violet-900 p-14 font-sans' >
        <p className='pt-14 text-[2vmax] font-bold' >Accounts</p>
        <div className='flex flex-col pt-3 w-full h-[35%] overflow-scroll' >
            <div className='flex flex-row w-full h-fit p-3 my-3 rounded-xl justify-between items-center shadow-lg border-[1px] border-purple-200' >
                <label>0xD4Ab9d0cf7242B7E14df24B1b0F6C10eCc05fF72</label>
                <label>Guardian</label>
                <button className='bg-purple-900 text-white px-2 py-1 rounded-xl'>Access</button>
            </div>

            <div className='flex flex-row w-full h-fit p-3 my-3 rounded-xl justify-between items-center shadow-lg border-[1px] border-purple-200' >
                <label>0xD4Ab9d0cf7242B7E14df24B1b0F6C10eCc05fF72</label>
                <label>Guardian</label>
                <button className='bg-purple-900 text-white px-2 py-1 rounded-xl'>Access</button>
            </div>

            <div className='flex flex-row w-full h-fit p-3 my-3 rounded-xl justify-between items-center shadow-lg border-[1px] border-purple-200' >
                <label>0xD4Ab9d0cf7242B7E14df24B1b0F6C10eCc05fF72</label>
                <label>Guardian</label>
                <button className='bg-purple-900 text-white px-2 py-1 rounded-xl'>Access</button>
            </div>

            <div className='flex flex-row w-full h-fit p-3 my-3 rounded-xl justify-between items-center shadow-lg border-[1px] border-purple-200' >
                <label>0xD4Ab9d0cf7242B7E14df24B1b0F6C10eCc05fF72</label>
                <label>Guardian</label>
                <button className='bg-purple-900 text-white px-2 py-1 rounded-xl'>Access</button>
            </div>
        </div>
        <div className='flex flex-row w-full h-fit justify-between items-start' >
        <EOADetails/>
        <EOABalance/>
        </div>
    </div>
  );
};

export default Dashboard;
