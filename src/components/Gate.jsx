import React from 'react';

const Gate = (props) => {
    return(
        <>
       <h1 className="text-decoration-underline primary">Gate's value</h1>
     {
     props.a ? 
     <h1>Open</h1>
     : 
     <h1>closed</h1> 
     }
          
        </>
    )
}
export default Gate;