import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import OrderTable from './OrderTable';
// Import the specific icon you're using

const PayoutsCard = () => {
    return (
        <div className='bg-sky-blue p-4 rounded-md mb-4'>
            <div className='flex justify-between'>

                {/* First Card */}
                <div className="pay-out-card p-8 rounded-md shadow-md w-1/3  relative" style={{ backgroundColor: 'rgb(20, 110, 180)' }}>
    <div className="p-1 mb-3 text-white">Next Payout</div>
    <div className="flex items-center justify-between text-blue-500 text-lg font-bold">
        <span className="text-large"><h1 style={{ fontSize: '28px', color: 'white' }}>₹2,312.23</h1></span>
        <span className="underline text-white mr-4">23 Orders <FontAwesomeIcon icon={faArrowRight} /></span>
    </div>
    <br /> 
 
    <aside className="absolute  bottom-0 w-full left-0 px-6 py-2 rounded-lg flex justify-between bg-[#0E4F82]">
        <h1 className="text-[#F2F2F2] text-sm">Next payout date:</h1>
        <p className="text-sm text-[#F2F2F2] font-medium">Today, 04:00 PM</p>
    </aside>
</div>


                {/* Second Card */}
                <div className="pay-out-card p-8 bg-white rounded-md shadow-md w-1/3  h-1/2 ml-4">
                    <div className="font-bold mb-2 text-gray-800">Amount Pending</div>
                    <div className="flex items-center justify-between text-blue-500 text-lg">
                        <div className="text-xl font-bold">₹92,312.20</div>
                        <p>23 Orders<FontAwesomeIcon icon={faArrowRight} /></p>
                    </div>
                </div>

                {/* Third Card */}
                <div className="pay-out-card p-7 bg-white rounded-md shadow-md w-1/3 h-1/2 ml-4">
                    <div className="font-bold mb-2 text-gray-800">Amount Pending</div>
                    <div className="text-blue-500 text-lg font-bold">₹23,92,312.19</div>
                </div>
            </div>




        </div>
    );
};

export default PayoutsCard;
