import React from 'react';

const User = props => {
  console.log(props.user)
  return (
    <div>
      <h2>My list of User!</h2>
      
      <p>{props.user.name}</p>
    </div>
  )
};

export default User;


{props.user.map((item, index) => ( // index is the index of the array that is being map
        <p key={index}>
          
        </p>
      ))}

 