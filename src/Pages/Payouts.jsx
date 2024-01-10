import React from 'react'
import Overview from '../Component/OverView'
import PayoutsCard from '../Component/PayoutsCard'
import OrderTable from '../Component/OrderTable'

const Payouts = () => {
  return (
    <div>

      <Overview/>
      <PayoutsCard/>

      <h1 class="text-text-dark text-xl font-medium max-sm:text-lg max-sm:ml-2">Transactions | This Month</h1>

      <div className="button flex items-center mt-5 ">
  <button className=' px-3 bg-slate-500 text-white py-2 px-4 rounded-full border border-blue-700 hover:bg-blue-700 focus:outline-none transition duration-300 ease-in-out transform hover:scale-105 mr-2'>
    Payout (22)
  </button>

  <button className=' px-3 bg-blue-500 text-white py-2 px-4 rounded-full border border-blue-700 hover:bg-blue-700 focus:outline-none transition duration-300 ease-in-out transform hover:scale-105'>
    Refund (6)
  </button>
</div>



  <OrderTable/>










  


    </div>
  )
}

export default Payouts