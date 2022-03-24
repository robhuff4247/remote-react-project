import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import './style.css';

export default function Accounts() {
  return(
    <div className="Dashboard">
      <h2>Faria Financial Management</h2>
      <h1>Accounts</h1>
      <div style={{ display: 'block', width: 650, padding: 30 }}>
        <Carousel>
          <Carousel.Item interval={15000}>
            <h2>Checking Account ...6548</h2>
            <h3>$2547.00</h3>
            
          </Carousel.Item>
          <Carousel.Item interval={15000}>
            <h2>Savings Account ...5732</h2>
            <h3>$5874.98</h3>
            
          </Carousel.Item>
          <Carousel.Item interval={15000}>
            <h2>Indvidual Retirement Account ...1234</h2>
            <h3>$44367.68</h3>
            
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
};