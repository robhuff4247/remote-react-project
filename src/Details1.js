import React from 'react';
import { Link } from 'react-router-dom';

export default function Details1() {
  return (
    <div className="fakeNews">
          <h3>Stocks, Bonds, Dividends: Working Boys</h3>
          <img src="http://localhost:8080/documents/20123/0/businesscalls.jpg/1dd02ff7-9236-2849-afb0-6a27024ddfcf?t=1646866201297" className="picture" alt="business" />
          <h4> By Professor Hidgens</h4>
          <p>
          All I want to do is spend the day Mark and Greg and Stu and all the other business people out there. 5 o'clock can't come soon enough. I can't wait to get home to my boys.
          </p>
          <Link to="/">Back</Link>
    </div>
  );
}