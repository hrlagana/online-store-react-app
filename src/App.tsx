import { ProductList } from './components/ui/customComponents/ProductList'

import './App.css'
import { ShoppingCart } from './components/ui/customComponents/ShoppingCart'
import { InventoryPage } from './components/ui/customComponents/InventoryPage'
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { setProducts } from './store/productSlice';
import { products } from './data/products';

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    const local = localStorage.getItem("products");
    const initialProducts = local ? JSON.parse(local) : products;
    dispatch(setProducts(initialProducts));
  }, [dispatch]);


  return (
    <div className="fish-store-container min-h-screen bg-gray-50 py-10 px-4">
      <div className="grid gap-5 
                    grid-cols-1 
                    md:grid-cols-1
                    lg:grid-cols-2 
                    xl:grid-cols-3">
        <div className="w-full">
          <ProductList />
        </div>

        <div className="w-full bg-white border p-6 rounded-lg">
          <ShoppingCart />
        </div>
        <div className="w-full bg-white border p-6 rounded-lg">
          <InventoryPage />
        </div>
      </div>
    </div>
  )
}

export default App
