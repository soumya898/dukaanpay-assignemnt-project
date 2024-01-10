import React, { useState } from 'react';

const OverView = () => {
  const [selectedOption, setSelectedOption] = useState('thisMonth');

  const handleChange = (e) => {
    setSelectedOption(e.target.value);
  };

  return (
    <div className='overview' style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <h1 className="text-text-dark text-xl font-medium max-sm:text-lg">Overview</h1>

      <div>
      <label htmlFor="timePeriod" className="mr-2 text-text-dark"></label>
      <select
        id="timePeriod"
        value={selectedOption}
        onChange={handleChange}
        className="px-2 py-1 border rounded"
  
      >
        <option value="thisMonth">This Month</option>
        <option value="lastMonth">Last Month</option>
      </select>
      </div>

      
    </div>
  );
};

export default OverView;
