import axios from 'axios';
import * as types from '../type/type';

const get_data = (data) => {
        return {
                type:types.GET_DATA,
                payload:data
        }
} 
export const pre_get_data = () => {
        return dispatch => {
                axios.get('http://127.0.0.1:8000/api/products')
                .then(res => {
                        dispatch(get_data(res.data.products))
                })
                .catch(err => console.log(err)
                )
        }
}

const add_data = () => {
        return {
               type:types.ADD_DATA
        }
}
export const pre_add_data = (product) => {
        return dispatch => {
                axios.post('http://127.0.0.1:8000/api/products',product)
                .then(res => dispatch(add_data()))
                .catch(err => console.log(err)
                )
        }
}