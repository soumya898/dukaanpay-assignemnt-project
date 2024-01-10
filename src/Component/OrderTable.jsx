import React, { useState } from 'react';

const OrderTable = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOrder, setSortOrder] = useState('asc'); // Default sort order is ascending

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSortChange = (event) => {
    setSortOrder(event.target.value);
  };

  const [orders, setOrders] = useState([
    {
      orderId: '#281209',
      status: 'Successful',
      transactionId: '131634495747',
      refundDate: 'Today, 08:45 PM',
      orderAmount: '₹1,125.00',
    },
    {
      orderId: '#281210',
      status: 'Processing',
      transactionId: '131634495748',
      refundDate: 'Yesterday, 3:00 PM',
      orderAmount: '₹1,125.00',
    },
    {
      orderId: '#281211',
      status: 'Successful',
      transactionId: '131634495749',
      refundDate: '12 Jul 2023, 03:00 PM',
      orderAmount: '₹1,125.00',
    },
    {
      orderId: '#281212',
      status: 'Successful',
      transactionId: '131634495750',
      refundDate: '12 Jul 2023, 03:00 PM',
      orderAmount: '₹1,125.00',
    },
    {
      orderId: '#281213',
      status: 'Successful',
      transactionId: '131634495751',
      refundDate: '12 Jul 2023, 03:00 PM',
      orderAmount: '₹1,125.00',
    },
    {
      orderId: '#281214',
      status: 'Successful',
      transactionId: '131634495752',
      refundDate: '12 Jul 2023, 03:00 PM',
      orderAmount: '₹1,125.00',
    },
    {
      orderId: '#281215',
      status: 'Successful',
      transactionId: '131634495753',
      refundDate: '12 Jul 2023, 03:00 PM',
      orderAmount: '₹1,125.00',
    },
  ]);
  

  // Filter orders based on search term
  const filteredOrders = orders.filter(
    (order) =>
      order.orderId.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.transactionId.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Sort orders based on sort order
  const sortedOrders = filteredOrders.sort((a, b) => {
    if (sortOrder === 'asc') {
      // Sort by refund date in ascending order
      return new Date(a.refundDate) - new Date(b.refundDate) || a.orderId.localeCompare(b.orderId);
    } else {
      // Sort by refund date in descending order
      return new Date(b.refundDate) - new Date(a.refundDate) || b.orderId.localeCompare(a.orderId);
    }
  });

  return (
    <div className='searching mt-5 '>
      <input
        type="text"
        placeholder='Order ID or transaction ID'
        value={searchTerm}
        onChange={handleSearchChange}
        className="p-2 border border-gray-300 rounded-l"
      />
  
  <select
      value={sortOrder}
      onChange={handleSortChange}
      className="p-2 border border-gray-300 rounded-r float float-end "
    >
      <option value="asc">Date Asc</option>
      <option value="desc">Date Desc</option>
    </select>
      {/* Display orders or no data message */}
      {sortedOrders.length === 0 ? (
        <p className="mt-2">No data found</p>
      ) : (
        <table className="w-full border-collapse mt-4">
          <thead className="bg-gray-200">
            <tr>
              <th className="p-2 border">Order ID</th>
              <th className="p-2 border">Status</th>
              <th className="p-2 border">Transaction ID</th>
              <th className="p-2 border">Refund date</th>
              <th className="p-2 border">Order amount</th>
            </tr>
          </thead>
          <tbody>
            {sortedOrders.map((order, index) => (
              <tr key={index} className="text-center border">
                <td className="p-2">{order.orderId}</td>
                <td className="p-2">
                  {order.status === 'Successful' ? (
                    <div className="flex items-center">
                      <aside className="w-2.5 h-2.5 bg-green-600 rounded-full max-sm:w-1.5 max-sm:h-1.5"></aside>
                      <p className="ml-2">Successful</p>
                    </div>
                  ) : (
                    <div className="flex items-center">
                      <aside className="w-2.5 h-2.5 bg-gray-500 rounded-full max-sm:w-1.5 max-sm:h-1.5"></aside>
                      <p className="ml-2">Processing</p>
                    </div>
                  )}
                </td>
                <td className="p-2">{order.transactionId}</td>
                <td className="p-2">{order.refundDate}</td>
                <td className="p-2">{order.orderAmount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
  };
  
  export default OrderTable;
  


