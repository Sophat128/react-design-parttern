import React, { useEffect } from 'react'
import { useState } from 'react';
import axios from 'axios';

const CurrentUserLoader = ({children}) => {
    const [user, setUser] = useState(null);
    useEffect(() => {
        (async () => {
            const response = await axios.get("/current-user")
            setUser(response.data);
        })();

    }, [])
  return (
    <>
        {React.Children.map(children, child => {
            if(React.isValidElement(child)){
                return React.cloneElement(child, {user})
            }
        })}
    </>
  )
}

export default CurrentUserLoader