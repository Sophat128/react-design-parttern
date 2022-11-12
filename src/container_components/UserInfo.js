import React from "react";
// import {useCurrentUser} from '../custom_hook/useCurrentUser'
// import { useUser } from '../custom_hook/useUser';
// import { useResource } from './../custom_hook/useResource';
import { useDataSource } from "../custom_hook/useDataSource";
import axios from "axios";

const serverResource = (resourceUrl) => async () => {
  const response = await axios.get(resourceUrl);
  return response.data;
};

const localStorageResource = key => {
  return localStorage.getItem(key);
}
const UserInfo = ({ userId }) => {
  // const user = useUser(userId);
  // const user = useResource(`/users/${userId}`)
  const user = useDataSource(serverResource(`/users/${userId}`));
  const message = useDataSource(localStorageResource("message"))

  const { name, age, hairColor, hobbies } = user || {};
  return user ? (
    <>
      <h3>Name: {name}</h3>
      <p>Age: {age} years</p>
      <p>Hair color: {hairColor}</p>
      <p>Hobbies: </p>
      <ul>
        {hobbies.map((hobby) => (
          <li key={hobby}>{hobby}</li>
        ))}
      </ul>
    </>
  ) : (
    <p>Loading...</p>
  );
};

export default UserInfo;
