import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { pre_add_data } from "../../../redux/action/action";
import './Add.css'

function Add() {
        const dispatch = useDispatch()
        const [product,setProduct] = useState({
                product_title:'',
                product_price:'',
                product_description:'',
                product_image:''
        })

        const addprocess = () => {
               dispatch(pre_add_data(product))
        }
  return <div>
        <div className="add__area">
                <input 
                    type="text"   
                    placeholder="product-title"
                    value={product.product_title}
                    onChange={(e) => setProduct({...product,product_title:e.target.value})}
                />
                <input 
                    type="number"   
                    placeholder="product-price"
                    value={product.product_price}
                    onChange={(e) => setProduct({...product,product_price:e.target.value})}
                />
                <input 
                    type="text"   
                    placeholder="product-description"
                    value={product.product_description}
                    onChange={(e) => setProduct({...product,product_description:e.target.value})}
                />
                {/* <input 
                    type="file"   
                    placeholder="product-title"
                    value={product.product_title}
                    onChange={(e) => setProduct({...product,product_description:e.target.value})}
                /> */}

                <button onClick={() => addprocess()}>Add</button>
        </div>
  </div>;
}

export default Add;
