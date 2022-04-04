import React from 'react';
import './style.css';

//Test to retrieve data from headless API

class Account1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  componentDidMount() {
    fetch('http://localhost:8080/o/c/bankaccounts/41924', {
      method: 'GET',
      headers: {
        Authorization: 'Basic ' + btoa('test@liferay.com:test1'),
        'Content-Type': 'application/json'
      }})
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result.items
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <ul>
          {items.map(item => (
            <li key={item.id}>
              {item.accountBalance} {item.accountNumber}
            </li>
          ))}
        </ul>
      );
    }
  }
}

export default Account1;