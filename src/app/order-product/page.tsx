"use client"
import { useRouter } from "next/navigation"

const OrderProduct = () => {
    
    const router = useRouter()
    const handleRoute = () =>{
        console.log("Redirecting to other page")
        if (true) {
            throw new Error("Error learning");
        }
        router.push("/products")

    }
    const handleError = () =>{
        
    }
    return (
    <div>
      <h1>Hello order the product from here</h1>
      <button onClick={handleRoute} className="px-6 py-1.5 bg-blue-500 active:bg-red-400 mr-6">Order Now</button>
      <button onClick={handleError} className="px-6 py-1.5 bg-red-400 active:bg-blue-500">Resolve Error</button>
    </div>
  )
}

export default OrderProduct
