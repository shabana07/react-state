import React from 'react';
const MediCard = (props) => {
    return (
        <div className="text-center w-75">
            <h1 className="text-decoration-underline primary">MediCard's value</h1>
            <img src={props.img} alt="" />
            <h2>{props.title}</h2>
            <p>{props.body}</p>
        </div>
    )
}

export default MediCard;