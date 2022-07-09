import axios from "axios";
import { useState ,useEffect} from "react";
import "./App.css";
import Navbar from "./component/navbar/Navbar";
import Products from './component/products/Products';

function App() {
  const [products, setProducts] = useState([])
  const baseUrl = "https://fakestoreapi.com/products";

  const getPruducts =()=>{
    axios.get(baseUrl).then((res)=>{
      console.log(res.data);
    setProducts(res.data)
    })
  }

  useEffect(() => {
    
  getPruducts();
    
  }, [])
  

  return <div className="App">
    <Navbar/>
    <Products products ={products}/>
  </div>;
}

export default App;
