import React from 'react';
import { Link } from 'react-router-dom';

export default function Details3() {
  return (
    <div className="fakeNews">
          <h3>Money, Money, Money. Is It Actually Funny?</h3>
          <img src="http://localhost:8080/documents/20123/0/moneymoney.jpg/39248e67-6ef1-ac37-7dde-3ce89a837dc8?t=1646866366935" className="picture" alt="moneymoney" />
          <h4> By Lenny Andersson</h4>
          <p>
          "I work all night, I work all day. It is sad if you think about it. Especially sad when you consider this sample text is ultimately meaningless in the grand scheme of things.
          </p>
          <Link to="/">Back</Link>
    </div>
  );
}