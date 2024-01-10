import React from 'react';
import './dashboard.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { faHouse, faTruck, faTags, faChartSimple, faBullhorn, faPercent, faUserGroup } from '@fortawesome/free-solid-svg-icons';


import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

import { faWallet } from '@fortawesome/free-solid-svg-icons';

import { Link } from 'react-router-dom';


import { Route, Routes } from 'react-router-dom';

import Marketing from '../Pages/Marketing';
import Delivery from '../Pages/Delivery';
import Order from '../Pages/Order';
import Payouts from '../Pages/Payouts';
import Products from '../Pages/Products';
import Home from '../Pages/Home'
import OverView from './OverView';

const DashBoard = () => {
  return (
    <div className='dashboard'>
      <div className="sidebar bg-slate-950 flex flex-col align-between ">
        <div className="logo flex justify-between ">

          <img src="src\Assets\Image@2x.png" alt="logo" height='39' width='39' />
          <div className="visit flex flex-col justify-center ">
            <h1 className='py-2'>Nishyan </h1>
            <a href="#"> <p style={{ fontSize: '12px', padding: '2px', fontWeight: 'lighter ', }}>Visit store</p></a>
          </div>
          <div className="icon  flex justify-end p-3">
            <i> <FontAwesomeIcon icon={faChevronDown} /></i>
          </div>
        </div>
        {/* Import FontAwesomeIcons */}
        {/* <FontAwesomeIcon icon={faHouse} />
      <FontAwesomeIcon icon={faTruck} />
      <FontAwesomeIcon icon={faTags} />
      <FontAwesomeIcon icon={faChartSimple} />
      <FontAwesomeIcon icon={faBullhorn} />
      <FontAwesomeIcon icon={faPercent} />
      <FontAwesomeIcon icon={faUserGroup} /> */}

        {/* Your list with FontAwesomeIcons */}
        <ul className="flex justify-between flex-col space-y-4 mt-4">
          <li>
            <FontAwesomeIcon icon={faHouse} />
            <Link to="/" className="hover:bg-gray-700 hover:text-white px-5 py-2 transition duration-300">Home</Link>
          </li>
          <li>
            <FontAwesomeIcon icon={faTruck} />
            <Link to="/order" className="hover:bg-gray-700 hover:text-white px-5 py-2 w-full  transition duration-300">Order</Link>
          </li>
          <li>
            <FontAwesomeIcon icon={faTags} />
            <Link to="/products" className="hover:bg-gray-700 hover:text-white  py-2  px-5  transition duration-300">Products</Link>
          </li>
          <li>
            <FontAwesomeIcon icon={faChartSimple} />
            <Link to="/delivery" className="hover:bg-gray-700 hover:text-white  py-2  px-5 transition duration-300">Delivery</Link>
          </li>
          <li>
            <FontAwesomeIcon icon={faBullhorn} />
            <Link to="/marketing" className="hover:bg-gray-700 hover:text-white py-2   px-5  transition duration-300">Marketing</Link>
          </li>
          <li>
            <FontAwesomeIcon icon={faPercent} />
            <Link to="/payouts" className="hover:bg-gray-700 hover:text-white   py-2 px-5  transition duration-300">Payouts</Link>
          </li>
          <li>
            <FontAwesomeIcon icon={faUserGroup} />
            <Link to="/discounts" className="hover:bg-gray-700 hover:text-white  py-2  px-5  transition duration-300">Discounts</Link>
          </li>
          <li>
            <FontAwesomeIcon icon={faChartSimple} />
            <Link to="/audiences" className="hover:bg-gray-700 hover:text-white  py-2 px-5 transition duration-300">Audiences</Link>
          </li>
          <li>
            <FontAwesomeIcon icon={faBullhorn} />
            <Link to="/appearances" className="hover:bg-gray-700 hover:text-white py-2   px-5 transition duration-300">Appearances</Link>
          </li>
          <li>
            <FontAwesomeIcon icon={faPercent} />
            <Link to="/plugins" className="hover:bg-gray-700 hover:text-white   py-2 px-5 transition duration-300">Plugins</Link>
          </li>
        </ul>


        {/*  Wallet of dashboard  */}

        <div className="wallet-section bg-gray-700 w-full p-2 flex items-center justify-start mt-6">
          <FontAwesomeIcon icon={faWallet} className="text-gray-400 text-xl mr-2" />
          <div className="wallet-info text-white text-left">
            <p className="text-xs mb-1">Available credits</p>
            <p className="text-sm font-bold">222.10</p>
          </div>
        </div>









      </div>


      <div className="navbar flex   justify-between">
        <div className="payout flex justify-between">
          <p style={{ fontWeight: 'bold', fontFamily: 'Libre Franklin' }}>Payouts</p>
          <span style={{ fontFamily: 'Libre Franklin', fontWeight: 'lighter', fontSize: '10px', marginTop: '7px', marginLeft: '30px' }}>How it works</span>
        </div>

        <div className="search-bar-container">
          <div className="search-bar " style={{ backgroundColor: '#d9d9d9', padding: '4px', borderRadius: '8px', background: 'trasparent', display: 'flex', alignItems: 'center', width: '300px' }}>
            <FontAwesomeIcon icon={faSearch} style={{ marginRight: '10px', color: '#333', margin: 'left' }} />
            <input type="text" placeholder='Search features, tutorial, etc.' style={{ border: 'none', outline: 'none', width: '100%', fontSize: '14px', backgroundColor: 'transparent' }} />
          </div>
        </div>

        <div className="notification flex  justify-between   "  >

          <svg width="40" height="30" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_98107_4436)">
              <circle cx="20" cy="20" r="20" fill="#E6E6E6" />
              <path d="M28.4211 10.0237L11.1158 13.3823C10.4632 13.499 10 14.1287 10 14.8517V22.5019C10 23.225 10.4632 23.8547 11.1158 23.9713L12.8842 24.3212C13.6 25.6273 14.9474 27.8897 16.7579 29.7323C17.3684 30.362 18.3789 29.8022 18.2526 28.8693C18.0842 27.6331 18.1263 26.3037 18.1895 25.3707L28.4211 27.3766C29.2421 27.5398 30 26.8401 30 25.9072V11.4931C30 10.5602 29.2421 9.86046 28.4211 10.0237ZM16.4632 19.6331C16.4632 19.8897 16.2737 20.0996 16.0421 20.0996H14.3158C14.0842 20.0996 13.8947 19.8897 13.8947 19.6331V17.7206C13.8947 17.464 14.0842 17.2541 14.3158 17.2541H16.0421C16.2737 17.2541 16.4632 17.464 16.4632 17.7206V19.6331ZM21.2842 19.6331C21.2842 19.8897 21.0947 20.0996 20.8632 20.0996H19.1368C18.9053 20.0996 18.7158 19.8897 18.7158 19.6331V17.7206C18.7158 17.464 18.9053 17.2541 19.1368 17.2541H20.8632C21.0947 17.2541 21.2842 17.464 21.2842 17.7206V19.6331ZM26.1263 19.6331C26.1263 19.8897 25.9368 20.0996 25.7053 20.0996H23.9789C23.7474 20.0996 23.5579 19.8897 23.5579 19.6331V17.7206C23.5579 17.464 23.7474 17.2541 23.9789 17.2541H25.6842C25.9158 17.2541 26.1053 17.464 26.1053 17.7206V19.6331H26.1263Z" fill="#4D4D4D" />
            </g>
            <defs>
              <clipPath id="clip0_98107_4436">
                <rect width="40" height="40" fill="white" />
              </clipPath>
            </defs>
          </svg>
          <svg width="40" height="30" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_99115_4441)">
              <circle cx="20" cy="20" r="20" fill="#E6E6E6" />
              <path d="M21.1109 25.5021C20.5156 26.1582 19.4844 26.1582 18.8891 25.5021L13.6151 19.689C12.7406 18.7251 13.4245 17.1811 14.726 17.1811L25.274 17.1811C26.5755 17.1811 27.2594 18.7251 26.3849 19.689L21.1109 25.5021Z" fill="#4D4D4D" />
            </g>
            <defs>
              <clipPath id="clip0_98107_4436">
                <rect width="40" height="40" fill="white" />
              </clipPath>
            </defs>
          </svg>


        </div>
      </div>



  
      <div className="payout-page">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/order" element={<Order />} />
          <Route path="/products" element={<Products />} />
          <Route path="/delivery" element={<Delivery />} />
          <Route path="/marketing" element={<Marketing />} />
          <Route path="/payouts" element={<Payouts />} />
        </Routes>
      </div>



    </div>
  );
}

export default DashBoard;
