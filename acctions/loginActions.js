import { types } from '../types/types';   

export const login = ({ 
    id,
    email,  
    name,
    familyName,
    photoUrl
}) => ({ 
    type: types.login,
 
    payload: {   
        id,
        email,  
        name,
        familyName,
        photoUrl,
        isLogin: true,  
    }
});

export const startLogout = () => {
    return async( dispatch ) => {  
        dispatch( logout() );
    }
}
 

export const logout = () => ({
    type: types.logout
})

 