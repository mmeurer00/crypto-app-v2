import { useState } from 'react'

function useToken() {
    const getToken = () => {
        const tokenString = sessionStorage.getItem('token');
        const userToken = JSON.parse(tokenString);
         /* You need to use ?.
        —when accessing the token property because 
        when you first access the application, the value of 
        sessionStorage.getItem('token') will be undefined. 
        If you try to access a property, you will generate an error. */
        return userToken?.token
    };
    const [token, setToken] = useState(getToken());

    const saveToken = userToken => {
        sessionStorage.setItem('token', JSON.stringify(userToken));
        setToken(userToken.token);
    };

    return {
        setToken: saveToken,
        token
    }
  }

/* As of right now, until logout is added, you can
clear out the token by either deleting the token in 
the Storage tab in your developer tools or by typing
sessionStorage.clear() in your developer console. */

export default useToken;