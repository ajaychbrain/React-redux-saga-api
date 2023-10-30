import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import {fetchProductDetails } from './Redux/ProductAction';

function App() {

  const dispatch = useDispatch();
  const products = useSelector((state: any) => state.userReducer.data);

  console.log("Products Data",products);


  

  return (
    <>
    <button onClick={() => dispatch(fetchProductDetails())}>Show Product</button>
   
    <div className="App">
        
        <table border={2} align='center'>
          <tr>
            <th>Sr.No</th>
            <th>Product Name</th>
            <th>Product Image</th>
            <th>Product Price</th>
          </tr>

         
          {products.map((product:any, id: number) => (
          <>
           <tr key={id}>
            <td>{product.id}</td>
          <td>{product.title}</td>
          <td><img src={product.image} width="120px" height="50px" /></td>
          <td>{product.price}</td>
          <td><button>Delete</button></td>
          </tr>
          </>
        ))}
           
          

        </table>
      
    </div>
    </>
  );
}

export default App;
