import React, { useState, useEffect } from 'react';
import {Link } from 'react-router-dom';


const Header = () => {

  const [time, setTime] = useState(new Date());

  useEffect(() => {
    setInterval(() => setTime(new Date()), 1000);

  });
  

  return(
      <nav className="navbar bg-dark sticky-top ">
          <Link to='/'>Home</Link>
          <p className="text-white">Clock made with react hook! {time.toLocaleTimeString()}</p>
      </nav>
  );
}

export default Header