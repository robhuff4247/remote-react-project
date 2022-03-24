import React from 'react';
import { Link } from 'react-router-dom';

export default function Details2() {
  return (
    <div className="fakeNews">
          <h3>Business. I Love Business</h3>
          <img src="http://localhost:8080/documents/20123/0/business.jpg/a79c6faf-2644-bc2b-1621-3ff05915558f?t=1646866285427" className="picture" alt="business" />
          <h4> By Sam Eagle</h4>
          <p>
          Oh that noble feeling. Feels like bells are ringing. No more double dealing, oh brother.  You, you got me and me, I got you. There is a Brotherhood of Man I tell you what. Be sure to proceed as far down the row as possible. Stopping in the middle is distinctly unpatriotic.
          </p>
          <Link to="/">Back</Link>
    </div>
  );
}