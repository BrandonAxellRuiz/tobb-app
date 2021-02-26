import {types} from '../types/types';

const initialState = {  
    id: 0,
    email: '',  
    name: '',
    familyName: '',
    photoUrl: '',
    isLogin: false, 
}; 

export const authReducer = ( state = initialState, action ) => {
    
    switch (action.type) {
        case types.login: 
        console.log('red', action.payload)
            return {   
                id: action.payload.id,
                email: action.payload.email,  
                name: action.payload.name,
                familyName: action.payload.familyName,
                photoUrl: action.payload.photoUrl, 
                isLogin: action.payload.isLogin
            } 

        case types.logout:
                return { }
    
        default:
            return state;
    }
};