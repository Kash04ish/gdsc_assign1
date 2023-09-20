import React from 'react';

const Scroll = (props) => {
  return( 
    <div style={{overflowY: 'scroll', height:'47vh'}}>
      {props.children}
    </div>	
  );
}

export default Scroll;