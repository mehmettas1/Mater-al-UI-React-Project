import axios from 'axios';
import { useEffect,useState } from 'react';
import './App.css';
import Navbar from "./component/navbar/Navbar"
import Products from './component/products/Products';
function App() {
  const [products,setProducts]=useState([])
  const [cart, setCart] = useState([])
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

  const handleAddProducts=(product,quantity)=>{
  const isAdded=cart.some((item)=>item.id===product.id)
  !isAdded && setCart([...cart,{...product,quantity}]);
  }
  return (
    <div>
      <Navbar totalProduct={cart?.length}/>
      <Products products={products} handleAddProducts={handleAddProducts}/>
    </div>
  );
}
export default App;