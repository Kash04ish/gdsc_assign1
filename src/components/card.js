import React from 'react';

function Card({person}) {
  return(
    <div>
      <div>
        <h2>{person.title}</h2>
        <p>{person.description}</p>
      </div>
    </div>
  );
}

export default Card;