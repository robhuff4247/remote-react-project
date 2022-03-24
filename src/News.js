import React from 'react';
import { Link } from 'react-router-dom';

export default function News() {
    return(
        <div className="fakeNews">
          <h1>Latest News</h1>
          <h3>Stocks, Bonds, Dividends: Working Boys</h3>
          <img src="http://localhost:8080/documents/20123/0/businesscalls.jpg/1dd02ff7-9236-2849-afb0-6a27024ddfcf?t=1646866201297" className="picture" alt="businesscalls" />
          <h4>Professor Hidgens</h4>
          <Link to="/details1">Read More</Link>
          <br/>
          <h3>Business. I Love Business</h3>
          <img src="http://localhost:8080/documents/20123/0/business.jpg/a79c6faf-2644-bc2b-1621-3ff05915558f?t=1646866285427" className="picture" alt="business" />
          <h4>Sam Eagle</h4>
          <Link to="/details2">Read More</Link>
          <br/>
          <h3>Money, Money, Money. Is It Actually Funny?</h3>
          <img src="http://localhost:8080/documents/20123/0/moneymoney.jpg/39248e67-6ef1-ac37-7dde-3ce89a837dc8?t=1646866366935" className="picture" alt="moneymoney" />
          <h4>Lenny Andersson</h4>
          <Link to="/details3">Read More</Link>
      </div>
    );
  };