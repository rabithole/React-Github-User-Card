import React from 'react';

const User = props => {
  console.log(props)
  return (
    <div>
      <h2>My list of User!</h2>
     {props.user.map(item => (
        <p key={Math.floor(Math.random() * 10000) + 10} className='personLeft'>
          <strong>Name:</strong>  {`${item.name}`} <br/>
           <strong>Age:</strong> {`${item.age}`} <br/>
           <strong>Email:</strong> {`${item.email}`}
           <button onClick={e => props.deleteItem(e, item)}>Delete Friend</button>
        </p>
      ))}
      <p>{props.name}</p>
    </div>
  )
};

export default User;

 