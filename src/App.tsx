import { ProductList } from './components/ui/customComponents/ProductList'

import './App.css'
import { ShoppingCart } from './components/ui/customComponents/ShoppingCart'

function App() {

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 flex flex-col md:flex-row md:items-start md:justify-center gap-5">
      <div className="w-full md:w-2/3">
        <ProductList />
      </div>
      <div className="w-full md:w-1/3 bg-white border p-6 rounded-lg">
        <ShoppingCart />
      </div>
    </div>
  )
}

export default App
