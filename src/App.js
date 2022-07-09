import axios from 'axios';
import { useEffect,useState } from 'react';
import './App.css';
import Navbar from "./component/navbar/Navbar"
import Products from './component/products/Products';
function App() {
  const [products,setProducts]=useState([])
  const baseUrl = "https://fakestoreapi.com/products";
  const getProducts=()=>{
    axios
    .get(baseUrl)
    .then((res)=>{
      console.log(res.data);
      setProducts(res.data)
    }
    )
  }
  useEffect(()=>{
    getProducts();
  },[])
  return (
    <div>
      <Navbar/>
      <Products products={products}/>
    </div>
  );
}
export default App;