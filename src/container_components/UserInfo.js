import React from 'react'

const UserInfo = ({user}) => {
  
    const {name, age, hairColor, hobbies} = user || {};
  return user ? (
    <>
        <h3>Name: {name}</h3>
        <p>Age: {age} years</p>
        <p>Hair color: {hairColor}</p>
        <p>Hobbies: </p>
        <ul>
            {hobbies.map(hobby => <li key={hobby}>{hobby}</li>)}
        </ul>
    </>
  ): <p>Loading...</p>;
}

export default UserInfo