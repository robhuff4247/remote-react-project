import React from 'react';
import Accounts from './Accounts';
import Account1 from './Account1';
import './style.css';


export default function Dashboard() {
  return(
    <div className="Dashboard">
      <Accounts />
      <Account1 />
      
    </div>
  );
};
