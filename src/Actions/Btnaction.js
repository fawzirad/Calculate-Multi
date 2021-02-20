import {ADD_NUMBER} from './type'

export const addNumbTableau =(data)=>dispatch=>{
    dispatch({
        type:ADD_NUMBER,
        payload:data
    }
    )
}