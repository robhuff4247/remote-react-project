import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './style.css';

async function loginUser(credentials) {
 return fetch('`http://localhost:8080/o/oauth2/token', {
  form: {
    'client_id': id-87c67ee8-c056-5048-7b94-e5ac08d542b,
    'client_secret': id-87c67ee8-c056-5048-7b94-e5ac08d542b,
    'code': req.query.code,
    'grant_type': 'authorization_code',
    'redirect_uri': http://localhost:3000
  }
},
   },
   body: JSON.stringify(credentials)
 })
   .then(data => data.json())
}

export default function Login({ setToken }) {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async e => {
    e.preventDefault();
    const token = await loginUser({
      username,
      password
    });
    setToken(token);
  }

  return(
    <div className="login-wrapper">
      <h2>Welcome to Faria Financial Manager</h2>
      <h3>Please Sign In</h3>
      <form onSubmit={handleSubmit}>
        <label>
          <p>Email</p>
          <input type="text" onChange={e => setUserName(e.target.value)} />
        </label>
        <label>
          <p>Password</p>
          <input type="password" onChange={e => setPassword(e.target.value)} />
        </label>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  )
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired
};