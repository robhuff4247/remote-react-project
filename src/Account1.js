///Simple test to check ability to get data from headless API

import React from 'react';

class Account1 extends React.Component {
  componentDidMount() {
    const apiUrl = 'http://localhost:8080/o/c/bankaccounts/42827';
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => console.log('This is your data', data));
  }
  render() {
    return <h1>my Component has Mounted, Check the browser 'console' </h1>;
  }
}
export default Account1;

