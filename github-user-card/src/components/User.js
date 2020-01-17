import React from 'react';

const User = props => {
  console.log(props.followers);
  return (
    <div className='githubuser'>
      <h2>User Name</h2>
      <p>{props.user.name}</p>
      <h3>followers</h3>
        {props.followers.map((item, index) => (
          <p key={index}>{props.followers[index].login}</p>
        ))}
    </div>
  )
};

export default User; 